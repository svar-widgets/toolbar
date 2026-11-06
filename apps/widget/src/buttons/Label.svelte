<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		text?: string;
		value?: any;
		children?: Snippet;
	};

	const { text, value, children }: Props = $props();
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
