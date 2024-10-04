<script>
	import { Button } from "wx-svelte-core";
	export let icon;
	export let text;
	export let css;
	export let type;
	export let disabled;

	export let menu;
</script>

{#if menu}
	<div class="wx-item" on:click>
		{#if icon}<i class="{icon} {css}" />{/if}
		{text}
	</div>
{:else}
	<Button {icon} {type} {css} title={text} {disabled} on:click />
{/if}

<style>
	i {
		margin-right: 8px;
		font-size: var(--wx-icon-size);
		color: var(--wx-color-font);
	}
	.wx-item {
		cursor: pointer;
		white-space: nowrap;
		line-height: 36px;
		height: 36px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
</style>
