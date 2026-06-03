import type { Component } from "svelte";

export interface IToolbarItem {
	id?: string | number;
	comp?: string | Component<any>;
	icon?: string;
	css?: string;
	type?: string;
	title?: string;
	text?: string;
	tooltip?: string;
	menuText?: string;
	key?: string;
	disabled?: boolean;
	spacer?: boolean;
	collapsed?: boolean;
	handler?: (item: IToolbarItem, value?: any) => void;
	layout?: "column";
	items?: IToolbarItem[];
	pinned?: boolean;
	[key: string]: any;
}

export declare const Toolbar: Component<{
	items?: IToolbarItem[];
	menuCss?: string;
	css?: string;
	values?: { [key: string]: any };
	overflow?: "collapse" | "wrap" | "menu";
	onclick?: (ev: { item: IToolbarItem }) => void;
	onchange?: (ev: { value: any; item: IToolbarItem }) => void;
}>;

export declare function registerToolbarItem(
	type: string,
	handler: Component<any>
): void;
