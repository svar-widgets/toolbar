<script>
	/**
	 * @typedef {Object} Props
	 * @property {boolean} [menu]
	 */

	/** @type {Props} */
	let { menu = false } = $props();
</script>

<div class="wx-separator{menu ? '-menu' : ''}">&nbsp;</div>

<style>
	.wx-separator {
		width: 1px;
		min-height: 100%;
		border-left: 1px solid rgba(0, 0, 0, 0.07);
		border-right: var(--wx-border);

		margin: 6px 4px;
		box-sizing: border-box;
	}
	:global(.wx-column > .wx-tb-body) > .wx-separator,
	.wx-separator-menu {
		height: 1px;
		width: 100%;
		border-top: var(--wx-border-medium);
		align-self: center;
	}
</style>
