<script lang="ts">
	import type { ComponentProps } from "svelte";
	import { Button } from "@svar-ui/svelte-core";

	type Props = {
		icon?: string;
		title?: string;
		text?: string;
		tooltip?: string;
		css?: string;
		type?: ComponentProps<typeof Button>["type"];
		disabled?: boolean;
		menu?: boolean;
		onclick?: (ev: MouseEvent) => void;
	};

	let {
		icon,
		title,
		text,
		tooltip,
		css,
		type,
		disabled,
		menu,
		onclick,
	}: Props = $props();
</script>

{#if menu}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="wx-item" class:wx-text-icon={!!text} {onclick}>
		<i class="{icon || 'wxi-empty'} {css || ''}"></i>
		{text}
	</div>
{:else}
	<Button {icon} {type} {css} {disabled} {title} {tooltip} {onclick} />
{/if}

<style>
	i {
		font-size: var(--wx-icon-size);
		color: var(--wx-color-font);
	}
	.wx-text-icon i {
		margin-right: 8px;
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
