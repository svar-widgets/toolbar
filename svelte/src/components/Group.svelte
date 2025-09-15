<script>
	import Group from "./Group.svelte";

	import BarComponent from "./BarComponent.svelte";
	import { Dropdown } from "@svar-ui/svelte-core";

	let { item, values = null, menu = false, onchange, onclick } = $props();

	let collapsedState = $state(true);

	const onClick = ev => {
		oncancel();
		onclick && onclick(ev);
	};

	const show = () => (collapsedState = false);
	const oncancel = () => (collapsedState = true);
</script>

<div
	class="wx-tb-group {item.css || ''}"
	class:wx-column={item.layout == "column"}
	class:wx-group-collapsed={item.collapsed && !menu}
>
	{#if item.collapsed && !menu}
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="wx-collapsed" onclick={show}>
			{#if item.icon}<i class="icon {item.icon}"></i>{/if}
			{#if item.text}
				<div class="wx-label-text">{item.text}</div>
			{/if}
			{#if item.text && !item.icon}
				<i class="wx-label-arrow wxi-angle-down"></i>
			{/if}
		</div>
		{#if !collapsedState}
			<Dropdown width="" {oncancel}>
				<div class="wx-drop-group">
					<Group
						item={{ ...item, text: "", collapsed: false }}
						{values}
						{menu}
						{onchange}
						onclick={onClick}
					/>
				</div>
			</Dropdown>
		{/if}
	{:else}
		<div class="wx-tb-body">
			{#each item.items as sub}
				{#if sub.items}
					<Group item={sub} {values} onclick={onClick} {onchange} />
				{:else}
					<BarComponent
						item={sub}
						{values}
						onclick={onClick}
						{onchange}
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
