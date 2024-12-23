<script>
	let { id = "", text = "", css = "", icon = "", onclick } = $props();

	function handleClick() {
		onclick && onclick({ id });
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="wx-label {css}" onclick={handleClick}>
	{#if icon}
		<i class={icon}></i>
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
