<script>
	import { Toolbar } from "../../src/index";

	let width = 480;
	let message = $state("");

	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}

	let items = [
		{
			comp: "label",
			spacer: true,
			key: "name",
		},
		{ comp: "separator" },
		{
			icon: "wxi-dots-v",
			collapsed: true,
			layout: "column",
			menu: true,
			items: [
				{
					id: "done",
					comp: "item",
					text: "Mark as finished task",
					handler: onClick,
				},
				{
					id: "delete",
					comp: "item",
					css: "danger",
					text: "Delete item",
					handler: onClick,
				},
				{ comp: "separator", menu: true },
				{
					id: "purge",
					comp: "button",
					type: "danger",
					text: "Purge all data",
					handler: onClick,
				},
			],
		},
	];
</script>

<div class="column" style="width: {width}px;">
	<Toolbar {items} values={{ name: "Item X12-A" }} />
	<div class="demo-status">{message}</div>
</div>

<style>
	.column {
		height: 100%;
		border-right: 1px solid #ddd;
	}
	:global(.wx-label.danger) {
		color: var(--wx-color-danger);
	}
</style>
