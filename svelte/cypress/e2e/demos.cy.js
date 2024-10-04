const cases = [
	"/base/:skin",
	"/buttons/:skin",
	"/collapsed/:skin",
	"/menu-groups]/:skin",
	"/menu/:skin",
	"/multiline/:skin",
	"/ribbon/:skin",
	"/sections/:skin",
	"/values/:skin",
	"/wrap/:skin",
];

const skins = ["material", "willow", "willow-dark"];
const links = [];

cases.forEach(w => {
	skins.forEach(s => {
		links.push(w.replace(":skin", s));
	});
});

context("Basic functionality", () => {
	it("widget", () => {
		links.forEach(w => {
			cy.visit(`/index.html#${w}`);
			cy.shot(w, { area: ".content" });
		});
	});
});
