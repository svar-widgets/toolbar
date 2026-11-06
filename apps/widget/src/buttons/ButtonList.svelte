<script lang="ts">
	import { Button } from "@svar-ui/svelte-core";
	import type { IButtonListOption, TID } from "../types";

	type Props = {
		options?: IButtonListOption[];
		value?: TID;
		css?: string;
		disabled?: boolean;
		onchange?: (ev: { value: TID }) => void;
	};

	let {
		css = "",
		disabled,
		options = [],
		onchange,
		value = $bindable(),
	}: Props = $props();

	function onClickHandler(id: TID) {
		value = id;
		onchange?.({ value: id });
	}
</script>

<div class="wx-button-list {css}">
	{#each options as option}
		<Button
			type={value === option.id ? "primary" : undefined}
			{disabled}
			text={option.label}
			onclick={() => onClickHandler(option.id)}
		/>
	{/each}
</div>

<style>
	.wx-button-list {
		line-height: normal;
	}
	.wx-button-list :global(button) {
		width: 100%;
	}
	.wx-button-list :global(button:not(:first-child)) {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	.wx-button-list :global(button:not(:last-child)) {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
</style>
