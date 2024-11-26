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
		width = width == 650 ? 350 : width == 350 ? 250 : 650;
	}
	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}
	function onChange(ev, item) {
		const { selected } = ev;
		const value = selected.id;
		message = item.id + " changed: " + value;
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
		{
			id: "align-left",
			comp: "button",
			icon: "wxo-align-left",
			handler: onClick,
			group: 1,
		},
		{
			id: "align-center",
			comp: "button",
			icon: "wxo-align-center",
			handler: onClick,
			group: 1,
		},
		{
			id: "align-right",
			comp: "button",
			icon: "wxo-align-right",
			handler: onClick,
			group: 1,
		},
		{
			id: "align-justify",
			comp: "button",
			icon: "wxo-align-justify",
			handler: onClick,
			group: 1,
		},
		{ comp: "separator" },
		{
			id: "font-family",
			comp: "richselect",
			css: "wideSelect",
			options: fontFamilyData,
			value: fontFamily,
			handler: onChange,
			group: 2,
		},
		{
			id: "font-size",
			comp: "richselect",
			options: fontSizeData,
			value: fontSize,
			handler: onChange,
			group: 2,
		},
	];
</script>

<div class="column" style="width: {width}px;">
	<Toolbar {items} menuWidth="150" overflow="wrap" />
	<div class="demo-status">{message}</div>
</div>

<style>
	.column {
		height: 100%;
		border-right: 1px solid #ddd;
	}
</style>
