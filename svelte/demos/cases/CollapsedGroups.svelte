<script>
	import { Toolbar, registerToolbarItem } from "../../src/index";
	import { RichSelect } from "wx-svelte-core";

	registerToolbarItem("richselect", RichSelect);

	let message = "";

	let fontFamilyData = [
		{ id: "Arial", name: "Arial" },
		{ id: "Tahoma", name: "Tahoma" },
		{ id: "Times New Roman", name: "Times" },
	];
	let fontSizeData = [
		{ id: "12px", name: "12" },
		{ id: "14px", name: "14" },
		{ id: "16px", name: "16" },
		{ id: "18px", name: "18" },
	];
	const values = {
		"font-family": "Arial",
		"font-size": "14px",
	};

	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}
	function onChange(ev, item) {
		const { selected } = ev.detail;
		const value = selected.id;
		message = item.id + " changed: " + value;
	}

	let width = 600;
	function changeWidth() {
		width = width == 600 ? 450 : width == 450 ? 350 : 600;
	}

	let items = [
		{
			id: "width",
			comp: "button",
			text: "Resize column",
			handler: changeWidth,
			type: "primary",
		},
		{ id: "label", text: "Collapsed groups" },
		{ comp: "separator" },
		{
			text: "Data",
			collapsed: true,
			items: [
				{
					id: "load",
					comp: "button",
					icon: "wxi-file",
					text: "Load",
					handler: onClick,
				},
				{
					id: "undo",
					comp: "button",
					icon: "wxo-undo",
					handler: onClick,
				},
				{
					id: "redo",
					comp: "button",
					icon: "wxo-redo",
					handler: onClick,
				},
			],
		},
		{ comp: "separator" },
		{
			layout: "column",
			collapsed: true,
			text: "Font",
			items: [
				{
					items: [
						{
							key: "font-family",
							comp: "richselect",
							css: "wideSelect",
							options: fontFamilyData,
							handler: onChange,
						},
						{
							key: "font-size",
							comp: "richselect",
							options: fontSizeData,
							handler: onChange,
						},
					],
				},
				{
					items: [
						{
							id: "font-bold",
							comp: "button",
							icon: "wxo-bold",
							handler: onClick,
						},
						{
							id: "font-italic",
							comp: "button",
							icon: "wxo-italic",
							handler: onClick,
						},
						{
							id: "font-underline",
							comp: "button",
							icon: "wxo-underline",
							handler: onClick,
						},
					],
				},
			],
		},
		{ comp: "separator" },
		{
			layout: "column",
			collapsed: true,
			text: "Align",
			items: [
				{
					items: [
						{
							id: "align-left",
							comp: "button",
							icon: "wxo-align-left",
							handler: onClick,
						},
						{
							id: "align-right",
							comp: "button",
							icon: "wxo-align-right",
							handler: onClick,
						},
						{
							id: "align-center",
							comp: "button",
							icon: "wxo-align-center",
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
			],
		},
	];
</script>

<div class="topbar" style="width: {width}px;">
	<Toolbar {items} {values} />
</div>
<div class="demo-status">{message}</div>

<style>
	.topbar :global(.wideSelect) {
		--wx-input-width: 160px;
	}
</style>
