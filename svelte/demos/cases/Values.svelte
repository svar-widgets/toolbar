<script>
	import { Toolbar } from "../../src/index";
	import { Slider, Button } from "wx-svelte-core";

	let message = $state("");
	const handler = ev => {
		const { value, item } = ev;
		message = `${item.key} changed: ${value}`;
	};

	let values = $state({ x1: 15, x2: 15 });
	let values2 = $state({ x1: 15 });
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
		onchange={handler}
	/>
	<span class="demo-code">{JSON.stringify(values)}</span>
	<br />
	<Button text="Reset x1" onclick={() => (values.x1 = 1)} />
	<Button text="Reset x2" onclick={() => (values.x2 = 1)} />
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
		onchange={handler}
	/>
</div>
