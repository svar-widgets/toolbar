## SVAR Toolbar for Svelte

SVAR Toolbar offers a ready-to-use control for creating button panels.

### Useful Links

-   [Documentation](https://docs.svar.dev/svelte/core/overview)
-   [How to start guide](https://docs.svar.dev/svelte/core/getting_started/)
-   [Demos](https://docs.svar.dev/svelte/toolbar/samples/#/base/willow)

### License

SVAR Toolbar for Svelte is available under MIT license.

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
