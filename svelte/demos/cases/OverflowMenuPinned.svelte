<script>
	import { Toolbar } from "../../src/index";

	let width = $state(270);
	let message = $state("");

	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}
	function changeWidth() {
		width = width == 500 ? 350 : width == 350 ? 250 : 500;
	}

	let items = [
		{
			id: "width",
			comp: "button",
			text: "Resize",
			handler: changeWidth,
			type: "primary",
		},
		{
			id: "search",
			comp: "icon",
			icon: "wxi-search",
			handler: onClick,
		},
		{ comp: "spacer" },
		{
			id: "info",
			comp: "icon",
			icon: "wxi-information-outline",
			handler: onClick,
			text: "Info",
		},
		{ comp: "separator" },
		{
			id: "copy",
			comp: "icon",
			icon: "wxi-content-copy",
			handler: onClick,
			text: "Ctrl+C",
			menuText: "Copy",
		},
		{
			id: "edit",
			comp: "icon",
			icon: "wxi-edit-outline",
			handler: onClick,
			text: "Ctrl+E",
			menuText: "Edit",
			pinned: true,
		},
		{
			id: "delete",
			comp: "icon",
			icon: "wxi-delete-outline",
			handler: onClick,
			pinned: true,
		},
	];
</script>

<h4 style="padding-left:20px">Edit and Delete icons are always visible</h4>
<div class="column" style="width: {width}px;">
	<Toolbar {items} />
	<div class="demo-status">{message}</div>
</div>

<style>
	.column {
		height: 100%;
		border-right: 1px solid #ddd;
	}
</style>
