<div align="center">
	
# SVAR Svelte Toolbar

[![npm](https://img.shields.io/npm/v/wx-svelte-toolbar.svg)](https://www.npmjs.com/package/@svar-ui/svelte-toolbar)
[![License](https://img.shields.io/github/license/svar-widgets/toolbar)](https://github.com/svar-widgets/toolbar/blob/main/license.txt)
[![npm downloads](https://img.shields.io/npm/dm/wx-svelte-toolbar.svg)](https://www.npmjs.com/package/@svar-ui/svelte-toolbar)

</div>

<div align="center">

[Documentation](https://docs.svar.dev/svelte/core/toolbar/) • [Demos](https://docs.svar.dev/svelte/core/samples-toolbar/#/base/willow)

</div>

**SVAR Toolbar** is a Svelte UI component for building flexible button panels, from simple button sets to complex structures with numerous buttons and select boxes. It provides an easy way to organize and display multiple toolbar items, with support for multiline layouts and collapsible item groups that can be shown on demand.

<div align="center">
	
<img src="https://svar.dev/images/github/github-toolbar.png" alt="Svelte Toolbar Component" style="width: 800px;">

</div>

### How to Use

To use the toolbar, simply import the package and include the component in your Svelte file:

```svelte
<script>
	import { Toolbar } from "@svar-ui/svelte-toolbar";

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

### Svelte 4 and Svelte 5 Versions

There are two versions of the library: the 1.x version, designed to work with Svelte 4, and the 2.x version, created for Svelte 5. 

To use the SVAR Toolbar beta for Svelte 5, install it as follows:

```
npm install @svar-ui/svelte-toolbar
```

To use the SVAR Toolbar for Svelte 4:

```
npm install wx-svelte-toolbar@1.3.0
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
