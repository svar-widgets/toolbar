<script>
	import BarComponent from "./BarComponent.svelte";
	import Group from "./Group.svelte";
	import { Dropdown, Button } from "wx-svelte-core";

	let { items = [], css, values, width, onclick, onchange } = $props();

	let popup = $state();
	let div = $state();

	function oncancel() {
		popup = null;
	}
	function showMenu() {
		popup = true;
	}
	function menuClick(ev) {
		oncancel();
		onclick && onclick(ev);
	}
</script>

<div class="wx-menu {css || ''}" bind:this={div} data-id="$menu">
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
