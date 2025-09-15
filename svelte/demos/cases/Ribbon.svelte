<script>
	import { Toolbar, registerToolbarItem } from "../../src/index";
	import { RichSelect } from "@svar-ui/svelte-core";

	registerToolbarItem("richselect", RichSelect);

	let message = $state("");

	let fontFamilyData = [
		{ id: "Arial", label: "Arial" },
		{ id: "Tahoma", label: "Tahoma" },
		{ id: "Times New Roman", label: "Times" },
	];
	let fontSizeData = [
		{ id: "12px", label: "12" },
		{ id: "14px", label: "14" },
		{ id: "16px", label: "16" },
		{ id: "18px", label: "18" },
	];
	const values = {
		"font-family": "Arial",
		"font-size": "14px",
	};

	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}
	function onChange(item, value) {
		message = item.key + " changed: " + value;
	}

	let items = [
		{
			items: [
				{
					layout: "column",
					items: [
						{
							id: "load",
							css: "bigButton",
							comp: "button",
							icon: "wxi-file",
							text: "Load",
							handler: onClick,
						},
					],
				},
				{
					layout: "column",
					items: [
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
			],
		},
		{ comp: "separator" },
		{
			layout: "column",
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
	];
</script>

<div class="topbar">
	<Toolbar {items} {values} />
</div>
<div class="demo-status">{message}</div>

<style>
	.topbar :global(.wideSelect) {
		--wx-input-width: 160px;
	}
	.topbar :global(.bigButton),
	.topbar :global(.bigButton button) {
		height: 100%;
		width: 80px;
	}
	.topbar :global(.bigButton i) {
		display: block !important;
	}
</style>
