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

	let message = $state("");
	const handler = ev => {
		const { value, item } = ev;
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
		onchange={handler}
	/>
</div>

<div class="demo-box">
	<Toolbar
		items={[{ text: "Text" }, { comp: "spacer" }, { comp: Text, key: "x" }]}
		css="demo-toolbar"
		values={{ x: "some" }}
		onchange={handler}
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
		onchange={handler}
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
					{ id: 1, label: "One" },
					{ id: 2, label: "Two" },
				],
			},
		]}
		css="demo-toolbar"
		values={{ x: 1 }}
		onchange={handler}
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
		onchange={handler}
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
		onchange={handler}
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
					{ label: "One", id: 1 },
					{ label: "Two", id: 2 },
				],
				value: [2],
				type: "inline",
				key: "x",
			},
		]}
		css="demo-toolbar"
		values={{ x: [2] }}
		onchange={handler}
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
		onchange={handler}
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
		onchange={handler}
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
		onchange={handler}
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
		onchange={handler}
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
					{ id: 1, label: "One" },
					{ id: 2, label: "Two" },
				],
			},
		]}
		css="demo-toolbar"
		values={{ x: 2 }}
		onchange={handler}
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
				key: "x",
				options: [
					{ id: 1, label: "One" },
					{ id: 2, label: "Two" },
				],
			},
		]}
		css="demo-toolbar"
		values={{ x: 2 }}
		onchange={handler}
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
				key: "x",
				options: [
					{ id: 1, label: "One" },
					{ id: 2, label: "Two" },
				],
			},
		]}
		css="demo-toolbar"
		values={{ x: [2] }}
		onchange={handler}
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
		onchange={handler}
	/>
</div>

<style>
	.demo-box {
		--wx-input-width: 234px;
	}
</style>
