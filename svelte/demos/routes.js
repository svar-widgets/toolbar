import BasicInit from "./cases/BasicInit.svelte";
import OverflowMenu from "./cases/OverflowMenu.svelte";
import OverflowMenuGroups from "./cases/OverflowMenuGroups.svelte";
import OverflowCollapsed from "./cases/OverflowCollapsed.svelte";
import MultiLine from "./cases/MultiLine.svelte";
import OverflowWrap from "./cases/OverflowWrap.svelte";
import CollapsedGroups from "./cases/CollapsedGroups.svelte";
import Buttons from "./cases/Buttons.svelte";
import Values from "./cases/Values.svelte";
import Ribbon from "./cases/Ribbon.svelte";
import HeaderMenu from "./cases/HeaderMenu.svelte";

export const links = [
	["/base/:skin", "Toolbar basic", BasicInit],
	["/multiline/:skin", "Multiline", MultiLine],
	["/collapsed/:skin", "Collapsed sections", CollapsedGroups],
	["/ribbon/:skin", "Ribbon", Ribbon],
	["/buttons/:skin", "Button types", Buttons],
	["/values/:skin", "Binding values", Values],
	["/menu/:skin", "Overflow menu", OverflowMenu],
	["/wrap/:skin", "Overflow wrap", OverflowWrap],
	["/menu-groups]/:skin", "Overflow menu groups", OverflowMenuGroups],
	["/sections/:skin", "Overflow collapse", OverflowCollapsed],
	["/header/:skin", "Header menu", HeaderMenu],
];
