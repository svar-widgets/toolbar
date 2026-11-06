<div align="center">

# SVAR Svelte Toolbar

[![npm](https://img.shields.io/npm/v/@svar-ui/svelte-toolbar.svg)](https://www.npmjs.com/package/@svar-ui/svelte-toolbar)
[![License](https://img.shields.io/github/license/svar-widgets/toolbar)](https://github.com/svar-widgets/toolbar/blob/main/license.txt)
[![npm downloads](https://img.shields.io/npm/dm/@svar-ui/svelte-toolbar.svg)](https://www.npmjs.com/package/@svar-ui/svelte-toolbar)

</div>

<div align="center">

[Documentation](https://docs.svar.dev/svelte/core/toolbar/) • [Demos](https://docs.svar.dev/svelte/core/samples-toolbar/#/base/willow)

</div>

SVAR Toolbar is a Svelte UI component for building flexible button panels, from simple button sets to complex structures with numerous buttons and select boxes. It provides an easy way to organize and display multiple toolbar items, with support for multiline layouts and collapsible item groups that can be shown on demand.

### How to Use

To use the widget, simply import the package and include the component in your Svelte file:

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

### How to Modify

Typically, you don't need to modify the code. However, if you wish to do so, follow these steps:

1. Install [vite-plus](https://vite.plus) (`curl -fsSL https://vite.plus | bash` on Mac/Linux, `irm https://vite.plus/ps1 | iex` on Windows). The project uses `pnpm` workspaces under the hood, so plain `npm` will not work.
2. Run `vp i` from the project root to install dependencies.
3. Run `vp run build` to build all packages.
4. Start the demo app in development mode with `vp run start`.

### Need help?

Join our [community forum](https://forum.svar.dev/) to get help or post feature requests.
