<script>
	import { Toolbar } from "../../src/index";
	import {
		Slider,
		Text,
		CheckboxGroup,
		RichSelect,
		DatePicker,
		ColorPicker,
		ColorSelect,
		Checkbox,
		Tabs,
		Pager,
		Segmented,
		Switch,
		TwoState,
		Combo,
		MultiCombo,
	} from "wx-svelte-core";

	let message = "";
	const handler = ev => {
		const { value, item } = ev.detail;
		message = `${item.key} changed: ${value}`;
	};
</script>

<div class="demo-status">{message}</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "Slider" },
			{ comp: "spacer" },
			{ comp: Slider, min: 0, max: 100, key: "x" },
		]}
		css="demo-toolbar"
		values={{ x: 15 }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[{ text: "Text" }, { comp: "spacer" }, { comp: Text, key: "x" }]}
		css="demo-toolbar"
		values={{ x: "some" }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "Tabs" },
			{ comp: "spacer" },
			{
				comp: Tabs,
				key: "x",
				options: [
					{ id: 1, label: "One" },
					{ id: 2, label: "Two" },
				],
			},
		]}
		css="demo-toolbar tabs"
		values={{ x: 1 }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "Segmented" },
			{ comp: "spacer" },
			{
				comp: Segmented,
				key: "x",
				options: [
					{ id: 1, name: "One" },
					{ id: 2, name: "Two" },
				],
			},
		]}
		css="demo-toolbar"
		values={{ x: 1 }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "Switch" },
			{ comp: "spacer" },
			{ comp: Switch, key: "x" },
		]}
		css="demo-toolbar"
		values={{ x: true }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "Checkbox" },
			{ comp: "spacer" },
			{ comp: Checkbox, key: "x" },
		]}
		css="demo-toolbar"
		values={{ x: true }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "Checkboxes" },
			{ comp: "spacer" },
			{
				comp: CheckboxGroup,
				options: [
					{ label: "One", value: 1 },
					{ label: "Two", value: 2 },
				],
				type: "inline",
				key: "x",
			},
		]}
		css="demo-toolbar"
		values={{ x: [2] }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "TwoState" },
			{ comp: "spacer" },
			{ comp: TwoState, text: "Button", textActive: "Pressed", key: "x" },
		]}
		css="demo-toolbar"
		values={{ x: false }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "ColorPicker" },
			{ comp: "spacer" },
			{ comp: ColorPicker, key: "x" },
		]}
		css="demo-toolbar"
		values={{ x: "#e7a90b" }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "ColorSelect" },
			{ comp: "spacer" },
			{ comp: ColorSelect, key: "x" },
		]}
		css="demo-toolbar"
		values={{ x: "#e7a90b" }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "DatePicker" },
			{ comp: "spacer" },
			{ comp: DatePicker, key: "x" },
		]}
		css="demo-toolbar"
		values={{ x: new Date() }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "RichSelect" },
			{ comp: "spacer" },
			{
				comp: RichSelect,
				text: "RichSelect",
				key: "x",
				options: [
					{ id: 1, name: "One" },
					{ id: 2, name: "Two" },
				],
			},
		]}
		css="demo-toolbar"
		values={{ x: 2 }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "Combo" },
			{ comp: "spacer" },
			{
				comp: Combo,
				text: "Combo",
				textField: "name",
				key: "x",
				options: [
					{ id: 1, name: "One" },
					{ id: 2, name: "Two" },
				],
			},
		]}
		css="demo-toolbar"
		values={{ x: 2 }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "MultiCombo" },
			{ comp: "spacer" },
			{
				comp: MultiCombo,
				text: "MultiCombo",
				textField: "name",
				key: "x",
				options: [
					{ id: 1, name: "One" },
					{ id: 2, name: "Two" },
				],
			},
		]}
		css="demo-toolbar"
		values={{ x: [2] }}
		on:change={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[
			{ text: "Pager" },
			{ comp: "spacer" },
			{ comp: Pager, key: "x", total: 100 },
		]}
		css="demo-toolbar"
		values={{ x: 2 }}
		on:change={handler}
	/>
</div>

<style>
	.demo-box {
		--wx-input-width: 234px;
	}
</style>
