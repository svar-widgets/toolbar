<script>
	import { Toolbar, registerToolbarItem } from "../../src/index";
	import { RichSelect } from "wx-svelte-core";

	registerToolbarItem("richselect", RichSelect);

	let message = $state("");
	let width = $state(650);

	let fontFamily = "Arial";
	let fontFamilyData = [
		{ id: "Arial", name: "Arial" },
		{ id: "Tahoma", name: "Tahoma" },
		{ id: "Times New Roman", name: "Times" },
	];
	let fontSize = "14px";
	let fontSizeData = [
		{ id: "12px", name: "12" },
		{ id: "14px", name: "14" },
		{ id: "16px", name: "16" },
		{ id: "18px", name: "18" },
	];
	function changeWidth() {
		width = width == 650 ? 450 : width == 450 ? 300 : 650;
	}
	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}

	let items = [
		{
			id: "width",
			comp: "button",
			text: "Change width",
			handler: changeWidth,
			type: "primary",
		},
		{ comp: "spacer" },
		{ id: "sep0", comp: "separator" },
		{
			items: [
				{
					id: "align-left",
					comp: "button",
					icon: "wxo-align-left",
					handler: onClick,
				},
				{
					id: "align-center",
					comp: "button",
					icon: "wxo-align-center",
					handler: onClick,
				},
				{
					id: "align-right",
					comp: "button",
					icon: "wxo-align-right",
					handler: onClick,
				},
				{
					id: "align-justify",
					comp: "button",
					icon: "wxo-align-justify",
					handler: onClick,
				},
			],
		},
		{ id: "sep1", comp: "separator" },
		{
			items: [
				{
					id: "font-family",
					comp: "richselect",
					css: "wideSelect",
					options: fontFamilyData,
					value: fontFamily,
					key: "family",
				},
				{
					id: "font-size",
					comp: "richselect",
					options: fontSizeData,
					value: fontSize,
					key: "size",
				},
			],
		},
	];

	let values = {};
</script>

<div class="topbar" style="width: {width}px;">
	<Toolbar {items} {values} />
	<div class="demo-status">{message}</div>
</div>

<style>
	.topbar {
		height: 100%;
		border-right: 1px solid #ddd;
	}
	.topbar :global(.wideSelect) {
		--wx-input-width: 160px;
	}
</style>
