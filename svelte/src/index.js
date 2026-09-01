import { Button } from "@svar-ui/svelte-core";
import Toolbar from "./components/Toolbar.svelte";
import { registerToolbarItem } from "./helpers.js";

import Separator from "./buttons/Separator.svelte";
import Spacer from "./buttons/Spacer.svelte";
import ButtonList from "./buttons/ButtonList.svelte";
import Label from "./buttons/Label.svelte";
import Icon from "./buttons/Icon.svelte";
import Item from "./buttons/Item.svelte";

registerToolbarItem("button", Button);
registerToolbarItem("button", Icon, { menu: true });
registerToolbarItem("separator", Separator);
registerToolbarItem("spacer", Spacer);
registerToolbarItem("label", Label);
registerToolbarItem("item", Item);
registerToolbarItem("icon", Icon);

export { Toolbar, ButtonList, registerToolbarItem };
