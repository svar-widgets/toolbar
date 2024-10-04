<script>
	export let text;
	export let value;
	const SLOTS = $$props.$$slots;
</script>

{#if SLOTS}
	<div class="wx-label">
		<slot />
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
