<script>
	import { Toolbar, registerToolbarItem, ButtonList } from "../../src/index";
	registerToolbarItem("v-segmented", ButtonList);

	let message = $state("");
	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}
	function onChange(item, value) {
		message = "Segmented '" + item.id + "': " + value;
	}
	let bar1 = [
		{
			id: "search",
			comp: "icon",
			icon: "wxi-search",
			css: "right",
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

	let bar2 = [
		{
			id: "mode",
			key: "mode",
			comp: "v-segmented",
			options: [
				{ id: "1", label: "Users" },
				{ id: "2", label: "Projects" },
				{ id: "3", label: "Settings" },
			],
			handler: onChange,
		},
		{ comp: "spacer" },
		{
			id: "run",
			comp: "button",
			text: "Upload",
			icon: "wxi-upload",
			handler: onClick,
		},
	];
</script>

<div class="demo-status">{message}</div>
<div style="display:flex; flex-direction:row; height: 300px">
	<div class="bar-container">
		<Toolbar items={bar1} layout="column" />
	</div>
	<div class="bar-container">
		<Toolbar values={{ mode: "1" }} items={bar2} layout="column" />
	</div>
	<div class="empty-space"></div>
</div>

<style>
	.bar-container {
		flex: 1;
		border: 10px solid #ccc;
		display: flex;
		flex-direction: row;
	}
	.empty-space {
		flex: 100;
	}
</style>
