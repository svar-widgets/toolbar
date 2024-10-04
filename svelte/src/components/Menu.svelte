<script>
	import { createEventDispatcher } from "svelte";
	import BarComponent from "./BarComponent.svelte";
	import Group from "./Group.svelte";
	import { Dropdown, Button } from "wx-svelte-core";

	export let items = [];
	export let css;
	export let values;

	const dispatch = createEventDispatcher();

	export let width;
	let popup;
	let div;

	function cancel() {
		popup = null;
	}
	function showMenu() {
		popup = true;
	}
	function menuClick(ev) {
		cancel();
		dispatch("click", ev.detail);
	}
</script>

<div class="wx-menu {css || ''}" bind:this={div} data-id="$menu">
	<Button icon="wxi-dots-h" click={showMenu} />
	{#if popup}
		<Dropdown width="{width}px" {cancel}>
			<div class="wx-drop-menu">
				{#each items as item}
					{#if item.items}
						<Group
							{item}
							{values}
							menu={true}
							on:click={menuClick}
							on:change
						/>
					{:else}
						<BarComponent
							{item}
							{values}
							menu={true}
							on:click={menuClick}
							on:change
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
