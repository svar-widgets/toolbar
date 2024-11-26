<script>
	import Menu from "./Menu.svelte";
	import Group from "./Group.svelte";
	import BarComponent from "./BarComponent.svelte";

	import { uid } from "wx-lib-dom";
	import { onMount, tick } from "svelte";

	let {
		items = $bindable([]),
		menuCss = "",
		css,
		values = $bindable(null),
		overflow = "menu",
		onclick,
		onchange,
	} = $props();

	function handleChange(ev) {
		if (values) {
			values[ev.item.key] = ev.value;
			values = values;
		}
		onchange && onchange(ev);
	}

	let div = null;
	let lastToolbarState = -1;
	let menuItems = $state([]);

	function processOverflow() {
		if (overflow === "wrap") return;

		const visibleWidth = div.clientWidth;
		const fullWidth = div.scrollWidth;
		const needMenu = fullWidth > visibleWidth;

		if (needMenu) {
			if (overflow === "collapse") return collapseGroups(visibleWidth);
			// we need to decide how many nodes need to be
			const nodes = div.children;
			let sum = 0;

			for (let i = 0; i < items.length; i++) {
				sum += nodes[i].clientWidth;
				if (items[i].comp == "separator") sum += 8;
				if (sum > visibleWidth - 40) {
					// skip updates, as visibility state was not changed
					if (lastToolbarState === i) return;
					lastToolbarState = i;

					// we need to hide nodes[i] and all next nodes
					menuItems = [];
					for (let j = i; j < items.length; j++) {
						menuItems.push(items[j]);
						nodes[j].style.visibility = "hidden";
					}
					// hide the ending separator
					if (i > 0 && items[i - 1].comp == "separator") {
						nodes[i - 1].style.visibility = "hidden";
					}
					break;
				}
				nodes[i].style.visibility = "";
			}
		} else {
			const freeWidth = visibleWidth - getTotalWidth();
			if (freeWidth <= 0) return;
			if (overflow === "collapse") return expandGroups(freeWidth);

			if (menuItems.length) {
				lastToolbarState = null;
				const nodes = div.children;
				for (let i = 0; i < items.length; i++) {
					nodes[i].style.visibility = "";
				}
				menuItems = [];
			}
		}
	}

	function getTotalWidth() {
		const nodes = div.children;
		let sum = 0;
		for (let i = 0; i < items.length; i++) {
			if (items[i].comp != "spacer") {
				sum += nodes[i].clientWidth;
				if (items[i].comp == "separator") sum += 8;
			}
		}
		return sum;
	}

	function collapseGroups() {
		for (let i = items.length - 1; i >= 0; i--) {
			// close rightmost open group
			if (items[i].items && !items[i].collapsed) {
				items[i].collapsed = true;
				items[i].$width = div.children[i].offsetWidth;
				// check after dom update, maybe we need to close more
				tick().then(processOverflow);

				// items are not deep reactive, so we need to trigger the update
				items = [...items];
				return;
			}
		}
	}

	function expandGroups(freeSpace) {
		for (let i = 0; i < items.length; i++) {
			// close leftmost closed group, that was closed previously
			if (items[i].collapsed && items[i].$width) {
				// check if group can fit in free space
				if (
					items[i].$width - div.children[i].offsetWidth <
					freeSpace + 10
				) {
					items[i].collapsed = false;
					// check after dom update, maybe we can open one more
					tick().then(processOverflow);
				}

				items = [...items];
				return;
			}
		}
	}

	// rebuild toolbar items, inject group nodes
	function normalize(items) {
		items.forEach(item => {
			if (!item.id) item.id = uid();
		});
		return items;
	}

	onMount(() => {
		const resizeObserver = new ResizeObserver(() => processOverflow(div));
		resizeObserver.observe(div);

		return () => {
			if (resizeObserver) resizeObserver.unobserve(div);
		};
	});

	const visibleItems = $derived(normalize(items));
</script>

<div
	class="wx-toolbar {css}"
	class:wx-wrap={overflow === "wrap"}
	bind:this={div}
>
	{#each visibleItems as item}
		{#if item.items}
			<Group {item} {values} {onclick} onchange={handleChange} />
		{:else}
			<BarComponent {item} {values} {onclick} onchange={handleChange} />
		{/if}
	{/each}
	{#if menuItems.length}
		<Menu
			items={menuItems}
			css={menuCss}
			{values}
			{onclick}
			onchange={handleChange}
		/>
	{/if}
</div>

<style>
	.wx-toolbar {
		width: 100%;
		flex-wrap: nowrap;
		display: flex;
		align-items: stretch;
		padding: 4px;
		position: relative;
	}
	.wx-toolbar.wx-wrap {
		flex-wrap: wrap;
	}
</style>
