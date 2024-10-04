<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	export let id = "";
	export let text = "";
	export let css = "";
	export let icon = "";

	function handleClick() {
		dispatch("click", { id });
	}
</script>

<div class="wx-label {css}" on:click={handleClick}>
	{#if icon}
		<i class={icon} />
	{/if}
	{text}
</div>

<style>
	.wx-label {
		width: 100%;
		white-space: nowrap;
		color: var(--wx-input-font-color);
		padding: var(--wx-input-padding);
		overflow: hidden;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	i {
		margin-right: 8px;
		font-size: var(--wx-icon-size);
	}

	.wx-label:hover {
		background-image: linear-gradient(
			rgba(0, 0, 0, 0.1) 0%,
			rgba(0, 0, 0, 0.1) 100%
		);
	}
</style>
