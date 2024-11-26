<script>
	import { Toolbar } from "../../src/index";
	let message = $state("");
	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}

	let items = [
		{ id: "label", text: "Toolbar with icon buttons" },
		{
			id: "search",
			comp: "button",
			icon: "wxi-search",
			css: "right",
			handler: onClick,
		},
		{ comp: "spacer" },
		{
			id: "edit",
			comp: "button",
			icon: "wxi-edit-outline",
			handler: onClick,
		},
		{
			id: "copy",
			comp: "icon",
			icon: "wxi-content-copy",
			handler: onClick,
		},
		{
			id: "delete",
			comp: "button",
			icon: "wxi-delete-outline",
			handler: onClick,
		},
	];
</script>

<Toolbar {items} />

<div class="demo-status">{message}</div>
