<script>
	import { Toolbar, registerToolbarItem } from "../../src/index";
	import { Tooltip, RichSelect, Slider } from "@svar-ui/svelte-core";

	registerToolbarItem("richselect", RichSelect);
	registerToolbarItem("slider", Slider);

	let fontFamilyData = [
		{ id: "Arial", label: "Arial" },
		{ id: "Tahoma", label: "Tahoma" },
		{ id: "Times New Roman", label: "Times" },
	];

	const values = {
		"font-family": "Arial",
	};

	let items = [
		{ id: "label", text: "Hover over items to see tooltips" },
		{
			id: "add",
			comp: "icon",
			icon: "wxi-plus",
			css: "right",
			tooltip: "New file",
			text: "New file",
		},
		{
			id: "favorite",
			comp: "icon",
			icon: "wxi-star",
			css: "right",
			tooltip: "Favorite",
			text: "Favorite",
		},
		{
			id: "search",
			comp: "icon",
			icon: "wxi-search",
			css: "right",
			tooltip: "Search",
			text: "Search",
		},
		{ comp: "separator" },
		{
			key: "font-family",
			comp: "richselect",
			css: "wideSelect",
			options: fontFamilyData,
			tooltip: "Font family",
		},
		{
			id: "align-left",
			comp: "icon",
			icon: "wxo-align-left",
			tooltip: "Align left",
			text: "Align left",
		},
		{
			id: "align-center",
			comp: "icon",
			icon: "wxo-align-center",
			tooltip: "Align center",
			text: "Align center",
		},
		{
			id: "align-right",
			comp: "icon",
			icon: "wxo-align-right",
			tooltip: "Align right",
			text: "Align right",
		},
		{
			id: "align-justify",
			comp: "icon",
			icon: "wxo-align-justify",
			tooltip: "Align justify",
			text: "Align justify",
		},
		{ comp: "separator" },
		{
			comp: "slider",
			tooltip: "Zoom",
		},
		{ comp: "spacer" },
		{
			id: "edit",
			comp: "icon",
			icon: "wxi-edit-outline",
			tooltip: "Edit",
			text: "Edit",
		},
		{
			id: "copy",
			comp: "icon",
			icon: "wxi-content-copy",
			tooltip: "Copy",
			text: "Copy",
		},
		{
			id: "delete",
			comp: "icon",
			icon: "wxi-delete-outline",
			tooltip: "Delete",
			text: "Delete",
		},
	];
</script>

<Tooltip arrow at="bottom-center">
	<Toolbar {items} {values} />
</Tooltip>

<style>
	:global(.wideSelect) {
		--wx-input-width: 160px;
	}
</style>
