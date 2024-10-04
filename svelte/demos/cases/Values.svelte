<script>
	import { Toolbar } from "../../src/index";
	import { Slider, Button } from "wx-svelte-core";

	let message = "";
	const handler = ev => {
		const { value, item } = ev.detail;
		message = `${item.key} changed: ${value}`;
	};

	let values = { x1: 15, x2: 15 };
	let values2 = { x1: 15 };
</script>

<div class="demo-status">{message}</div>

<div class="demo-box">
	<h3>Binding different values</h3>
	<Toolbar
		items={[
			{ comp: Slider, min: 0, max: 100, key: "x1" },
			{ comp: "spacer" },
			{ comp: Slider, min: 0, max: 100, key: "x2" },
		]}
		css="demo-toolbar"
		bind:values
		on:change={handler}
	/>
	<span class="demo-code">{JSON.stringify(values)}</span>
	<br />
	<Button text="Reset x1" on:click={() => (values.x1 = 1)} />
	<Button text="Reset x2" on:click={() => (values.x2 = 1)} />
</div>

<div class="demo-box">
	<h3>Binding the same value</h3>
	<Toolbar
		items={[
			{ comp: Slider, min: 0, max: 100, key: "x1" },
			{ comp: "spacer" },
			{ comp: Slider, min: 0, max: 100, key: "x1" },
		]}
		css="demo-toolbar"
		bind:values={values2}
		on:change={handler}
	/>
</div>
