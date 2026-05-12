<script>
	import Menu from "./Menu.svelte";
	import Group from "./Group.svelte";
	import BarComponent from "./BarComponent.svelte";

	import { uid } from "@svar-ui/lib-dom";
	import { onMount, tick } from "svelte";

	let {
		items = $bindable([]),
		menuCss = "",
		css = "",
		values = $bindable(null),
		overflow = "menu",
		layout = "row",
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
	let menuItems = $state([]);

	function processOverflow() {
		if (overflow === "wrap") return;

		const nodes = div.children;
		// restore all items so widths can be measured
		for (let i = 0; i < items.length; i++) {
			if (nodes[i]) nodes[i].style.display = "";
		}

		const visibleWidth = div.clientWidth;
		const fullWidth = div.scrollWidth;
		const needMenu = fullWidth > visibleWidth;

		if (needMenu) {
			if (overflow === "collapse") return collapseGroups(visibleWidth);

			// pinned items always stay visible
			let pinnedWidth = 0;
			for (let i = 0; i < items.length; i++) {
				if (items[i].pinned) pinnedWidth += nodes[i].clientWidth;
			}

			let sum = 0;
			for (let i = 0; i < items.length; i++) {
				if (items[i].pinned) continue;
				sum += nodes[i].clientWidth;
				if (items[i].comp == "separator") sum += 8;
				if (sum > visibleWidth - 40 - pinnedWidth) {
					// we need to hide nodes[i] and all next non-pinned nodes
					menuItems = [];
					for (let j = i; j < items.length; j++) {
						if (items[j].pinned) continue;
						menuItems.push(items[j]);
						nodes[j].style.display = "none";
					}
					// hide the ending separator
					if (
						i > 0 &&
						items[i - 1].comp == "separator" &&
						!items[i - 1].pinned
					) {
						nodes[i - 1].style.display = "none";
					}
					break;
				}
			}
		} else {
			const freeWidth = visibleWidth - getTotalWidth();
			if (freeWidth <= 0) return;
			if (overflow === "collapse") return expandGroups(freeWidth);

			if (menuItems.length) menuItems = [];
		}
	}

	function getTotalWidth() {
		const nodes = div.children;
		let sum = 0;
		for (let i = 0; i < items.length; i++) {
			if (items[i].comp != "spacer") {
				sum += nodes[i]?.clientWidth || 0;
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
	class:wx-column={layout == "column"}
	class:wx-has-menu={menuItems.length}
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
		min-height: 48px;
	}
	.wx-toolbar.wx-has-menu {
		padding-right: 48px;
	}
	.wx-toolbar.wx-wrap {
		flex-wrap: wrap;
	}
	.wx-column {
		flex-flow: column;
	}
</style>
