<script lang="ts">
	import BarComponent from "./BarComponent.svelte";
	import Group from "./Group.svelte";
	import { Dropdown, Button } from "@svar-ui/svelte-core";
	import type {
		IToolbarChangeEvent,
		IToolbarClickEvent,
		IToolbarItem,
		TToolbarValues,
	} from "../types";

	type Props = {
		items?: IToolbarItem[];
		css?: string;
		values?: TToolbarValues | null;
		width?: number;
		onclick?: (ev: IToolbarClickEvent) => void;
		onchange?: (ev: IToolbarChangeEvent) => void;
	};

	let { items = [], css, values, width, onclick, onchange }: Props = $props();

	let popup = $state(false);

	function oncancel() {
		popup = false;
	}
	function showMenu() {
		popup = true;
	}
	function menuClick(ev: IToolbarClickEvent) {
		oncancel();
		onclick?.(ev);
	}
</script>

<div class="wx-menu {css || ''}" data-id="$menu">
	<Button icon="wxi-dots-h" onclick={showMenu} />
	{#if popup}
		<Dropdown width="{width}px" {oncancel}>
			<div class="wx-drop-menu">
				{#each items as item}
					{#if item.items}
						<Group
							{item}
							{values}
							menu={true}
							onclick={menuClick}
							{onchange}
						/>
					{:else}
						<BarComponent
							{item}
							{values}
							menu={true}
							onclick={menuClick}
							{onchange}
						/>
					{/if}
				{/each}
			</div>
		</Dropdown>
	{/if}
</div>

<style>
	.wx-menu {
		position: absolute;
		overflow: visible;
		padding: 4px;
		right: 4px;
	}

	.wx-menu :global(.wx-dropdown) {
		overflow: visible;
	}
	.wx-drop-menu {
		padding: 4px;
	}
</style>
