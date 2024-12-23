<script>
	import { Button } from "wx-svelte-core";

	let { icon, text, css, type, disabled, menu, onclick } = $props();
</script>

{#if menu}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="wx-item" {onclick}>
		{#if icon}<i class="{icon} {css}"></i>{/if}
		{text}
	</div>
{:else}
	<Button {icon} {type} {css} title={text} {disabled} {onclick} />
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
