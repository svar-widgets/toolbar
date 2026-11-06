import type { Component } from "svelte";

export type TID = string | number;

export interface IToolbarItem {
	id?: TID;
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

export type TToolbarValues = { [key: string]: any };

export interface IToolbarClickEvent {
	item: IToolbarItem;
}

export interface IToolbarChangeEvent {
	value: any;
	item: IToolbarItem;
}

export interface IButtonListOption {
	id: TID;
	label: string;
}

export interface IItemConfig {
	menu?: boolean;
}
