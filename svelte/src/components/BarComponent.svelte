<script>
	import { setID } from "@svar-ui/lib-dom";
	import { getItemHandler } from "../helpers";
	import Separator from "../buttons/Separator.svelte";
	import Spacer from "../buttons/Spacer.svelte";

	let { item = {}, menu = false, values, onclick, onchange } = $props();
	let itemComponent = $derived(getItemHandler(item.comp, { menu }));

	function onClick() {
		if (item.handler) item.handler(item);
		onclick && onclick({ item });
	}

	let value = $derived(item.key ? values[item.key] : undefined);
	function detectChange({ value }) {
		if (item.handler) item.handler(item, value);
		onchange && onchange({ value, item });
	}

	const text = $derived(menu ? item.menuText || item.text : item.text);
</script>

{#if item.comp == "spacer"}
	<Spacer />
{:else if item.comp == "separator"}
	<Separator {menu} />
{:else}
	{@const SvelteComponent = itemComponent}
	<div
		class="wx-tb-element {item.css || ''}"
		class:wx-spacer={item.spacer}
		class:wx-menu={menu}
		data-id={setID(item.id)}
	>
		<SvelteComponent
			{value}
			onchange={detectChange}
			onclick={onClick}
			{menu}
			{...item}
			{text}
		/>
	</div>
{/if}

<style>
	.wx-spacer {
		flex: 1;
	}
	.wx-tb-element {
		padding: 4px;
		flex-shrink: 0;
		align-self: center;
		display: flex;
	}
	.wx-menu.wx-tb-element {
		line-height: 36px;
		padding: 2px 8px;
		background-color: var(--wx-background);
	}
	.wx-menu :global(button) {
		width: 100%;
	}
	.wx-menu :global(.wx-tb-element) {
		align-self: stretch;
	}
	.wx-menu.wx-tb-element:hover {
		background: var(--wx-background-alt);
	}
</style>
