import BasicInit from "./cases/BasicInit.svelte";
import OverflowMenu from "./cases/OverflowMenu.svelte";
import OverflowMenuPinned from "./cases/OverflowMenuPinned.svelte";
import OverflowMenuGroups from "./cases/OverflowMenuGroups.svelte";
import OverflowCollapsed from "./cases/OverflowCollapsed.svelte";
import MultiLine from "./cases/MultiLine.svelte";
import OverflowWrap from "./cases/OverflowWrap.svelte";
import CollapsedGroups from "./cases/CollapsedGroups.svelte";
import Buttons from "./cases/Buttons.svelte";
import Values from "./cases/Values.svelte";
import Ribbon from "./cases/Ribbon.svelte";
import HeaderMenu from "./cases/HeaderMenu.svelte";
import Tooltips from "./cases/Tooltips.svelte";

export const links = [
	["/base/:skin", "Toolbar basic", BasicInit, "BasicInit"],
	["/multiline/:skin", "Multiline", MultiLine, "MultiLine"],
	[
		"/collapsed/:skin",
		"Collapsed sections",
		CollapsedGroups,
		"CollapsedGroups",
	],
	["/ribbon/:skin", "Ribbon", Ribbon, "Ribbon"],
	["/buttons/:skin", "Button types", Buttons, "Buttons"],
	["/tooltip/:skin", "Button tooltips", Tooltips, "Tooltips"],
	["/values/:skin", "Binding values", Values, "Values"],
	["/menu/:skin", "Overflow menu", OverflowMenu, "OverflowMenu"],
	[
		"/menu-pinned/:skin",
		"Overflow menu pinned",
		OverflowMenuPinned,
		"OverflowMenuPinned",
	],
	["/wrap/:skin", "Overflow wrap", OverflowWrap, "OverflowWrap"],
	[
		"/menu-groups/:skin",
		"Overflow menu groups",
		OverflowMenuGroups,
		"OverflowMenuGroups",
	],
	[
		"/sections/:skin",
		"Overflow collapse",
		OverflowCollapsed,
		"OverflowCollapsed",
	],
	["/header/:skin", "Header menu", HeaderMenu, "HeaderMenu"],
];
