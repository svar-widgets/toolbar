import type { Component } from "svelte";
import { uid } from "@svar-ui/lib-dom";
import type { IItemConfig, IToolbarItem } from "./types";

const handlers: Record<string, Component<any>> = {};
export function getItemHandler(
	type: string | Component<any> | undefined,
	config: IItemConfig | null = null
): Component<any> {
	// try to get the handler for the config, fallback to the type
	// so we need not register all button types for alternative modes
	const c =
		typeof type === "string"
			? handlers[getID(type, config)] || handlers[type]
			: type;
	return c || handlers["label"];
}
export function registerToolbarItem(
	type: string,
	handler: Component<any>,
	config: IItemConfig | null = null
): void {
	handlers[getID(type, config)] = handler;
}

// Assign stable ids and collapse consecutive separators
export function normalizeToolbarItems(items?: IToolbarItem[]): IToolbarItem[] {
	if (!items?.length) return [];
	for (const item of items) {
		if (!item.id) item.id = uid();
	}
	return collapseSeparators(items);
}

// Keep the first of consecutive separator
export function collapseSeparators(items?: IToolbarItem[]): IToolbarItem[] {
	if (!items?.length) return items || [];
	const out: IToolbarItem[] = [];
	let prevWasSeparator = false;
	for (const item of items) {
		const isSeparator = item.comp === "separator";
		if (isSeparator && prevWasSeparator) continue;
		out.push(item);
		prevWasSeparator = isSeparator;
	}
	return out;
}

function getID(type: string, config: IItemConfig | null = null): string {
	return `${type}${config?.menu ? ":menu" : ""}`;
}
