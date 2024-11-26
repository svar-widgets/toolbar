<div align="center">
	
# SVAR Svelte Toolbar

[![npm](https://img.shields.io/npm/v/wx-svelte-toolbar.svg)](https://www.npmjs.com/package/wx-svelte-toolbar)
[![License](https://img.shields.io/github/license/svar-widgets/toolbar)](https://github.com/svar-widgets/toolbar/blob/main/license.txt)
[![npm downloads](https://img.shields.io/npm/dm/wx-svelte-toolbar.svg)](https://www.npmjs.com/package/wx-svelte-toolbar)

</div>

<div align="center">

[Documentation](https://docs.svar.dev/svelte/core/toolbar/) • [Demos](https://docs.svar.dev/svelte/core/samples-toolbar/#/base/willow)

</div>

A Svelte UI component for building flexible button panels, from simple button sets to complex structures with numerous buttons and select boxes. It provides an easy way to organize and display multiple toolbar items, with support for multiline layouts and collapsible item groups that can be shown on demand.

### Versions for Svelte 4 and 5

There are two versions of the Toolbar component: 
- version **1.x** was designed to work with Svelte 4
- version **2.x** is created for Svelte 5 (please note that this version is in beta and may contain some instabilities)

To use the SVAR Toolbar v.2.0 beta for Svelte 5, install it as follows:

```
npm install wx-svelte-toolbar
```

To use the SVAR Toolbar for Svelte 4:

```
npm install wx-svelte-toolbar@1.3.0
```

### How to Use

To use the widget, simply import the package and include the component in your Svelte file:

```svelte
<script>
	import { Toolbar } from "wx-svelte-toolbar";

	function onClick(item) {
		message = "Button '" + item.id + "' clicked";
	}

	let items = [
		{ id: "label", text: "Toolbar with icon buttons" },
		{
			id: "search",
			comp: "button",
			icon: "wxi-search",
			handler: onClick,
		},
	];
</script>

<Toolbar {items} />
```

### How to Modify

Typically, you don't need to modify the code. However, if you wish to do so, follow these steps:

1. Run `yarn` to install dependencies. Note that this project is a monorepo using `yarn` workspaces, so npm will not work
2. Start the project in development mode with `yarn start`

### Run Tests

To run the test:

1. Start the test examples with:
    ```sh
    yarn start:tests
    ```
2. In a separate console, run the end-to-end tests with:
    ```sh
    yarn test:cypress
    ```
