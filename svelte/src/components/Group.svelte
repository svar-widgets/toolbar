<script>
	import { createEventDispatcher } from "svelte";
	import BarComponent from "./BarComponent.svelte";
	import { Dropdown } from "wx-svelte-core";

	const dispatch = createEventDispatcher();

	export let item;
	export let values = null;
	export let menu = false;

	let collapsed = false;
	$: if (item.collapsed) collapsed = true;

	const onClick = ev => {
		cancel();
		dispatch("click", ev.detail);
	};

	const show = () => (collapsed = false);
	const cancel = () => (collapsed = true);
</script>

<div
	class="wx-tb-group {item.css || ''}"
	class:wx-column={item.layout == "column"}
	class:wx-group-collapsed={item.collapsed && !menu}
>
	{#if item.collapsed && !menu}
		<div class="wx-collapsed" on:click={show}>
			{#if item.icon}<i class="icon {item.icon}" />{/if}
			{#if item.text}
				<div class="wx-label-text">{item.text}</div>
			{/if}
			{#if item.text && !item.icon}
				<i class="wx-label-arrow wxi-angle-down" />
			{/if}
		</div>
		{#if !collapsed}
			<Dropdown width="" {cancel}>
				<div class="wx-drop-group">
					<svelte:self
						item={{ ...item, text: "", collapsed: false }}
						{values}
						{menu}
						on:change
						on:click={onClick}
					/>
				</div>
			</Dropdown>
		{/if}
	{:else}
		<div class="wx-tb-body">
			{#each item.items as sub}
				{#if sub.items}
					<svelte:self
						item={sub}
						{values}
						on:click={onClick}
						on:change
					/>
				{:else}
					<BarComponent
						item={sub}
						{values}
						on:click={onClick}
						on:change
					/>
				{/if}
			{/each}
		</div>
		{#if item.text}
			<div class="wx-label">{item.text}</div>
		{/if}
	{/if}
</div>

<style>
	.wx-tb-group {
		position: relative;
		display: flex;
		flex-flow: column;
	}
	.wx-group-collapsed {
		flex-flow: row;
	}
	.wx-collapsed {
		display: flex;
		padding: 10px;
		flex-flow: row;
		cursor: pointer;
	}
	.wx-group-collapsed .wx-collapsed {
		align-items: center;
	}

	.wx-label {
		font-weight: var(--wx-label-font-weight);
		font-size: var(--wx-font-size-sm);
		color: var(--wx-color-font);
		text-align: center;
		display: flex;
		padding: 4px 2px 4px 12px;
		align-items: center;
		justify-content: center;
		width: 100%;
	}
	.wx-tb-group :global(.wx-dropdown) {
		overflow: inherit;
	}
	.wx-column {
		align-items: stretch;
	}
	.wx-column :global(.wx-tb-element) {
		align-self: stretch;
	}
	.wx-tb-body {
		height: 100%;
		display: flex;
	}
	.wx-column > .wx-tb-body {
		flex-flow: column;
	}
</style>
