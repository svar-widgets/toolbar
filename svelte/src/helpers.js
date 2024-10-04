const handlers = {};
export function getItemHandler(type) {
	return handlers[type] || type;
}
export function registerToolbarItem(type, handler) {
	handlers[type] = handler;
}
