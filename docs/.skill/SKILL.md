Use when UI of app requires Toolbar, configuring, or modifying SVAR Svelte Toolbar / @wx/svelte-toolbar components

## Package

```js
import { Toolbar, registerToolbarItem } from "@wx/svelte-toolbar";
```

## Supported functionality

### Events

-   item `handler`, toolbar `onclick`, toolbar `onchange`

### Value binding

-   `values` bag of properties bound to inputs in toolbar by `item.key`, changes tracked by `onchange`

### Overflow modes

default is `overflow="menu"`

-   `menu`: when items no longer fit, trailing top-level items move into a dots menu
    -   `menuText` replaces `text` only inside the overflow menu
-   `wrap`: wraps to new rows
-   `collapse`: never creates a dots menu; it collapses the rightmost open top-level group first, only affects top-level items that have nested `items`; plain buttons do not collapse

### Item's properties

-   `comp` - component name, built in are `button`, `icon`, `label`, `item`, `separator`, `spacer`
-   `key` - bind to values by this key
-   `text`, `menuText` - content of button in normal and menu modes
-   `collapsed`, `layout`, `items` - used to organise groups of buttons ( like ribbons )
-   `handler` - per item click handler
-   `css` - css class to the button's container
-   `spacer` - adds `flex:1` to the button (it takes all space)
-   all extra properties passthrough to the Svelte components

### Common elements

Button configurations:

```js
{ comp: "button", text: "Save" }
{ comp: "button", icon: "wxi-search" }
{ comp: "button", icon: "wxi-file", text: "Load" }
{ comp: "button", text: "Apply", type: "primary" }
{ comp: "button", icon: "wxi-delete-outline", disabled: true }
{ comp: "button", icon: "wxi-content-copy", text: "Ctrl+C", menuText: "Copy" }
```

Icon configurations:

```js
{ comp: "icon", icon: "wxi-search" }
{ comp: "icon", icon: "wxi-information-outline", text: "Info" }
{ comp: "icon", icon: "wxi-content-copy", text: "Ctrl+C", menuText: "Copy" }
{ comp: "icon", icon: "wxi-delete-outline", disabled: true }
```

Label, item, separator, spacer configurations:

```js
{ comp: "label", text: "Toolbar title" }
{ comp: "label", key: "name" }
{ comp: "label", key: "name", spacer: true }
{ comp: "item", id: "done", text: "Mark as finished task" }
{ comp: "item", id: "delete", icon: "wxi-delete-outline", text: "Delete item", css: "danger" }
{ comp: "separator" }
{ comp: "spacer" }
```

`item` is a simple clickable row, not a core button, use it for menu/list-style actions, especially inside collapsed groups/header menus.

Widgets from `@wx/svelte-core` which can be used as components: Slider, Text, CheckboxGroup, RichSelect, DatePicker, ColorPicker, ColorSelect, Checkbox, Tabs, Pager, Segmented, Switch, TwoState, Combo, MultiCombo.

## Public Types

```ts
import type { Component } from "svelte";

export interface IToolbarItem {
	id?: string | number;
	comp?: string | Component<any>;
	icon?: string;
	css?: string;
	text?: string;
	menuText?: string;
	key?: string;
	spacer?: boolean;
	collapsed?: boolean;
	handler?: (item: IToolbarItem, value?: any) => void;
	layout?: "column";
	items?: IToolbarItem[];
	[key: string]: any;
}

export declare const Toolbar: Component<{
	items?: IToolbarItem[];
	menuCss?: string;
	css?: string;
	values?: { [key: string]: any };
	overflow?: "collapse" | "wrap" | "menu";
	onclick?: (ev: { item: IToolbarItem }) => void;
	onchange?: (ev: { value: any; item: IToolbarItem }) => void;
}>;

export declare function registerToolbarItem(
	type: string,
	handler: Component<any>
): void;
```

## Styling

-   toolbar `css` is appended to `.wx-toolbar`; use it as the parent styling hook
-   menu `menuCss` is appended to the overflow `.wx-menu`; item `css` is appended to `.wx-tb-element` or group `.wx-tb-group`

-   toolbar container: `.wx-toolbar`
-   top-level item wrapper: `.wx-tb-element`
-   group wrapper: `.wx-tb-group`, group body: `.wx-tb-body`
-   overflow menu container in the toolbar row `.wx-menu`
-   content wrapper inside the opened dropdown `wx-drop-menu`
-   separator `.wx-separator` and `.wx-separator-menu`
-   `layout="column"` on Toolbar makes `.wx-toolbar.wx-column`
-   `layout: "column"` on a group makes `.wx-column > .wx-tb-body`
-   `comp: "spacer"` renders flex filler; `spacer: true` on normal item makes its wrapper `flex: 1`

```css
/*Gap between toolbar items*/
.my-toolbar .wx-tb-element {
	padding: 2px;
}

/*padding around the whole toolbar*/
.my-toolbar {
	padding: 8px 12px; /* default is 4px */
}

/*padding for groups*/
.my-toolbar .wx-tb-body {
	gap: 4px;
}
```

## Recipes

### Basic Toolbar

```svelte
<script>
	let message = $state("");
	function onClick(item) {
		message = `Button '${item.id}' clicked`;
	}

	const items = [
		{ id: "label", text: "Toolbar with icon buttons" },
		{ comp: "separator" },
		{ id: "search", comp: "button", icon: "wxi-search", handler: onClick },
		{ comp: "spacer" },
		{
			id: "copy",
			comp: "icon",
			icon: "wxi-content-copy",
			handler: onClick,
		},
	];
</script>

<Toolbar {items} />
```

### Per-Item Handler

```js
function onClick(item) {
	console.log(item.id);
}

const items = [
	{ id: "edit", comp: "button", icon: "wxi-edit-outline", handler: onClick },
];
```

### Toolbar Click Handler

```svelte
<Toolbar
	items={[
		{ id: "edit", comp: "button", icon: "wxi-edit-outline" },
		{ id: "delete", comp: "button", icon: "wxi-delete-outline" },
	]}
	onclick={ev => console.log(ev.item.id)}
/>
```

### Keyed Values

```svelte
<script>
	// component must support `value` handler and `onchange` callback to be bound, most svelte-core controls fit
	import { Slider } from "@wx/svelte-core";
	let values = $state({ size: 15 });
</script>

<Toolbar
	items={[{ comp: Slider, min: 0, max: 100, key: "size" }]}
	bind:values
	onchange={ev => console.log(ev.item.key, ev.value)}
/>
```

### Common core controls

```svelte
<script>
	import { Slider, Segmented, Switch } from "@wx/svelte-core";

	const options = [
		{ id: 1, label: "One" },
		{ id: 2, label: "Two" },
	];
</script>

<Toolbar
	css="demo-toolbar"
	values={{ size: 14, mode: 1, enabled: true }}
	items={[
		{ text: "Controls" },
		{ comp: "spacer" },
		{ comp: Slider, min: 0, max: 100, key: "size" },
		{ comp: Segmented, options, key: "mode" },
		{ comp: Switch, key: "enabled" },
	]}
/>
```

### Custom Component Contract

```svelte
<!-- CustomToolbarItem.svelte -->
<script>
	let {
		value,
		onchange,
		onclick,
		menu,
		text = "",
		disabled = false,
	} = $props();
</script>

<button
	class:in-menu={menu}
	{disabled}
	onclick={() => {
		onclick?.();
		onchange?.({ value: !value });
	}}
>
	{text}
</button>
```

```js
import CustomToolbarItem from "./CustomToolbarItem.svelte";

const items = [{ comp: CustomToolbarItem, key: "flag", text: "Toggle" }];
const values = { flag: false };
```

### Group

```js
const items = [
	{
		text: "Align",
		items: [
			{ id: "align-left", comp: "button", icon: "wxo-align-left" },
			{ id: "align-center", comp: "button", icon: "wxo-align-center" },
			{ id: "align-right", comp: "button", icon: "wxo-align-right" },
		],
	},
];
```

### Column Group

```js
const items = [
	{
		layout: "column",
		text: "Font",
		items: [
			{
				items: [
					{
						key: "font-family",
						comp: "richselect",
						options: fontFamilyData,
					},
					{
						key: "font-size",
						comp: "richselect",
						options: fontSizeData,
					},
				],
			},
			{
				items: [
					{ id: "font-bold", comp: "button", icon: "wxo-bold" },
					{ id: "font-italic", comp: "button", icon: "wxo-italic" },
					{
						id: "font-underline",
						comp: "button",
						icon: "wxo-underline",
					},
				],
			},
		],
	},
];
```

### Ribbon Layout

```js
const items = [
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
					},
				],
			},
			{
				layout: "column",
				items: [
					{ id: "undo", comp: "button", icon: "wxo-undo" },
					{ id: "redo", comp: "button", icon: "wxo-redo" },
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
						options: fontFamilyData,
					},
				],
			},
			{ items: [{ id: "font-bold", comp: "button", icon: "wxo-bold" }] },
		],
	},
];
```

### Initially-Collapsed Group

```js
const items = [
	{
		text: "Data",
		icon: "wxi-dots-v",
		collapsed: true,
		layout: "column",
		items: [{ id: "load" }, { id: "delete" }],
	},
];
```

### Header Menu

```svelte
<Toolbar
	values={{ name: "Item X12-A" }}
	items={[
		{ comp: "label", spacer: true, key: "name" },
		{ comp: "separator" },
		{
			icon: "wxi-dots-v",
			collapsed: true,
			layout: "column",
			items: [
				{ id: "done", comp: "item", text: "Mark as finished task" },
				{
					id: "delete",
					comp: "item",
					css: "danger",
					text: "Delete item",
				},
			],
		},
	]}
/>
```

### Vertical Toolbar

```svelte
<Toolbar
	layout="column"
	items={[
		{ id: "new", comp: "button", icon: "wxi-plus" },
		{ id: "edit", comp: "button", icon: "wxi-edit-outline" },
		{ comp: "separator" },
		{ id: "delete", comp: "button", icon: "wxi-delete-outline" },
	]}
/>
```
