<script>
	import { Button } from "wx-svelte-core";

	/**
	 * @typedef {Object} Props
	 * @property {any} icon
	 * @property {string} [text]
	 * @property {any} css
	 * @property {any} type
	 * @property {any} disabled
	 * @property {any} menu
	 */

	/** @type {Props} */
	let { icon, text = "", css, type, disabled, menu, onclick } = $props();
</script>

{#if menu}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="wx-item" {onclick}>
		<i class="{icon || 'wxi-empty'} {css || ''}"></i>
		{text}
	</div>
{:else}
	<Button {icon} {type} {css} {text} {disabled} {onclick} />
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
