import Toolbar from "./components/Toolbar.svelte";
import { registerToolbarItem } from "./helpers.js";

import Separator from "./buttons/Separator.svelte";
import Spacer from "./buttons/Spacer.svelte";
import Button from "./buttons/Button.svelte";
import Label from "./buttons/Label.svelte";
import Icon from "./buttons/Icon.svelte";
import Item from "./buttons/Item.svelte";

registerToolbarItem("button", Button);
registerToolbarItem("separator", Separator);
registerToolbarItem("spacer", Spacer);
registerToolbarItem("label", Label);
registerToolbarItem("item", Item);
registerToolbarItem("icon", Icon);

export { Toolbar, registerToolbarItem };
