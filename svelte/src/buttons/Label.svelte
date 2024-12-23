<script>
	const { text, value, children } = $props();
</script>

{#if children}
	<div class="wx-label">
		{@render children()}
	</div>
{:else}
	<div class="wx-label">{value || text}</div>
{/if}

<style>
	.wx-label {
		width: auto;
		font-weight: var(--wx-label-font-weight);
		color: var(--wx-input-font-color);
		padding: var(--wx-input-padding);
		overflow: hidden;
	}
</style>
