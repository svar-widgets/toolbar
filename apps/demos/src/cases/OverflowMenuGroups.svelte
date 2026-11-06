<script lang="ts">
	import { Toolbar, registerToolbarItem } from "@svar-ui/svelte-toolbar";
	import type { IToolbarItem } from "@svar-ui/svelte-toolbar";
	import { RichSelect } from "@svar-ui/svelte-core";

	registerToolbarItem("richselect", RichSelect);

	let message = $state("");
	let width = $state(650);

	let fontFamily = "Arial";
	let fontFamilyData = [
		{ id: "Arial", label: "Arial" },
		{ id: "Tahoma", label: "Tahoma" },
		{ id: "Times New Roman", label: "Times" },
	];
	let fontSize = "14px";
	let fontSizeData = [
		{ id: "12px", label: "12" },
		{ id: "14px", label: "14" },
		{ id: "16px", label: "16" },
		{ id: "18px", label: "18" },
	];
	function changeWidth() {
		width = width == 650 ? 450 : width == 450 ? 300 : 650;
	}
	function onClick(item: IToolbarItem) {
		message = "Button '" + item.id + "' clicked";
	}
	function onChange(item: IToolbarItem, value: any) {
		message = item.key + " changed: " + value;
	}

	let items: IToolbarItem[] = [
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
					key: "font-family",
					comp: "richselect",
					css: "wideSelect",
					options: fontFamilyData,
					value: fontFamily,
					handler: onChange,
				},
				{
					key: "font-size",
					comp: "richselect",
					options: fontSizeData,
					value: fontSize,
					handler: onChange,
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
