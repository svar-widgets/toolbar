import { setID } from "@svar-ui/lib-dom";

Cypress.Commands.add("shot", (...args) => {
	// eslint-disable-next-line cypress/no-unnecessary-waiting
	cy.wait(100);

	const name = args.filter(a => typeof a !== "object").join("-");
	const conf =
		typeof args[args.length - 1] === "object" ? args[args.length - 1] : {};
	const sconf = { ...conf, overwrite: true };

	if (conf.area) cy.get(conf.area).screenshot(name, sconf);
	else cy.screenshot(name, sconf);
});

Cypress.Commands.add(
	"wxT",
	{
		prevSubject: "optional",
	},
	(subject, type, id) => {
		subject = subject ? cy.wrap(subject) : cy;
		switch (type) {
			case "toolbar-button":
				return subject.get(
					`.wx-tb-element[data-id="${setID(id)}"] button`
				);

			default:
				throw `not supported arguments for wxT: ${type}, ${id}`;
		}
	}
);
