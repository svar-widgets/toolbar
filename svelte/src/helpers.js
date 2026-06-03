import { uid } from "@svar-ui/lib-dom";

const handlers = {};
export function getItemHandler(type) {
	return handlers[type] || type;
}
export function registerToolbarItem(type, handler) {
	handlers[type] = handler;
}

// Assign stable ids and collapse consecutive separators
export function normalizeToolbarItems(items) {
	if (!items?.length) return [];
	for (const item of items) {
		if (!item.id) item.id = uid();
	}
	return collapseSeparators(items);
}

// Keep the first of consecutive separator
export function collapseSeparators(items) {
	if (!items?.length) return items || [];
	const out = [];
	let prevWasSeparator = false;
	for (const item of items) {
		const isSeparator = item.comp === "separator";
		if (isSeparator && prevWasSeparator) continue;
		out.push(item);
		prevWasSeparator = isSeparator;
	}
	return out;
}
