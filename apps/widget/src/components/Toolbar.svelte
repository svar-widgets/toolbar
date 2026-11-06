<script lang="ts">
	import Menu from "./Menu.svelte";
	import Group from "./Group.svelte";
	import BarComponent from "./BarComponent.svelte";

	import { onMount, tick } from "svelte";
	import { normalizeToolbarItems } from "../helpers";
	import type {
		IToolbarChangeEvent,
		IToolbarClickEvent,
		IToolbarItem,
		TToolbarValues,
	} from "../types";

	type Props = {
		items?: IToolbarItem[];
		menuCss?: string;
		css?: string;
		values?: TToolbarValues | null;
		overflow?: "collapse" | "wrap" | "menu";
		layout?: "row" | "column";
		onclick?: (ev: IToolbarClickEvent) => void;
		onchange?: (ev: IToolbarChangeEvent) => void;
	};

	let {
		items = $bindable([]),
		menuCss = "",
		css = "",
		values = $bindable(null),
		overflow = "menu",
		layout = "row",
		onclick,
		onchange,
	}: Props = $props();

	function handleChange(ev: IToolbarChangeEvent) {
		if (values && ev.item.key) {
			values[ev.item.key] = ev.value;
		}
		onchange?.(ev);
	}

	let div: HTMLDivElement;
	let menuItems = $state<IToolbarItem[]>([]);

	const getNodes = () => div.children as HTMLCollectionOf<HTMLElement>;

	const barItems = $derived(normalizeToolbarItems(items));
	const vertical = $derived(layout === "column");

	function getTotalWidth() {
		const nodes = getNodes();
		let sum = 0;
		for (let i = 0; i < barItems.length; i++) {
			if (barItems[i].comp != "spacer") {
				sum += nodes[i]?.clientWidth || 0;
				if (barItems[i].comp == "separator") sum += 8;
			}
		}
		return sum;
	}

	function collapseGroups() {
		for (let i = barItems.length - 1; i >= 0; i--) {
			// close rightmost open group
			if (barItems[i].items && !barItems[i].collapsed) {
				barItems[i].collapsed = true;
				barItems[i].$width = getNodes()[i].offsetWidth;
				// check after dom update, maybe we need to close more
				tick().then(processOverflow);

				// items are not deep reactive, so we need to trigger the update
				items = [...items];
				return;
			}
		}
	}

	function expandGroups(freeSpace: number) {
		for (let i = 0; i < barItems.length; i++) {
			// open leftmost closed group that was collapsed by overflow
			if (barItems[i].collapsed && barItems[i].$width) {
				// check if group can fit in free space
				if (
					barItems[i].$width - getNodes()[i].offsetWidth <
					freeSpace + 10
				) {
					barItems[i].collapsed = false;
					// items are not deep reactive, so we need to trigger the update
					items = [...items];
					// check after dom update, maybe we can open one more
					tick().then(processOverflow);
				}
				return;
			}
		}
	}

	function processOverflow(): void {
		if (overflow === "wrap" || vertical) return;

		const nodes = getNodes();
		// restore all items so widths can be measured
		for (let i = 0; i < barItems.length; i++) {
			if (nodes[i]) nodes[i].style.display = "";
		}

		const visibleWidth = div.clientWidth;
		const fullWidth = div.scrollWidth;
		const needMenu = fullWidth > visibleWidth;

		if (needMenu) {
			if (overflow === "collapse") return collapseGroups();

			// pinned items always stay visible
			let pinnedWidth = 0;
			for (let i = 0; i < barItems.length; i++) {
				if (barItems[i].pinned) pinnedWidth += nodes[i].clientWidth;
			}

			let sum = 0;
			for (let i = 0; i < barItems.length; i++) {
				if (barItems[i].pinned) continue;
				sum += nodes[i].clientWidth;
				if (barItems[i].comp == "separator") sum += 8;
				if (sum > visibleWidth - 40 - pinnedWidth) {
					// we need to hide nodes[i] and all next non-pinned nodes
					menuItems = [];
					for (let j = i; j < barItems.length; j++) {
						if (barItems[j].pinned) continue;
						menuItems.push(barItems[j]);
						nodes[j].style.display = "none";
					}
					// hide the ending separator
					if (
						i > 0 &&
						barItems[i - 1].comp == "separator" &&
						!barItems[i - 1].pinned
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

	onMount(() => {
		const resizeObserver = new ResizeObserver(() => processOverflow());
		resizeObserver.observe(div);

		return () => {
			resizeObserver.unobserve(div);
		};
	});
</script>

<div
	class="wx-toolbar {css}"
	class:wx-wrap={overflow === "wrap"}
	class:wx-column={vertical}
	class:wx-has-menu={menuItems.length > 0}
	bind:this={div}
>
	{#each barItems as item}
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
		width: auto;
	}
	.wx-column > :global(.wx-tb-element) {
		width: 100%;
	}
</style>
