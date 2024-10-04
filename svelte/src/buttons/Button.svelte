<script>
	import { Button } from "wx-svelte-core";

	export let icon;
	export let text = "";
	export let css;
	export let type;
	export let disabled;

	export let menu;
</script>

{#if menu}
	<div class="wx-item" on:click>
		<i class="{icon || 'wxi-empty'} {css || ''}" />
		{text}
	</div>
{:else}
	<Button {icon} {type} {css} {text} {disabled} on:click />
{/if}

<style>
	i {
		margin-right: 8px;
		font-size: var(--wx-button-icon-size);
		color: var(--wx-icon-color);
	}
	.wx-item {
		cursor: pointer;
		white-space: nowrap;
		line-height: 26px;
	}
</style>
