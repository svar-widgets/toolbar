context("Basic: overflow collapse behavior", () => {
	it("moves items into overflow menu when container width changes", () => {
		const resizeObserverLoopErrRe =
			/^[^(ResizeObserver loop limit exceeded)]/;
		Cypress.on("uncaught:exception", err => {
			if (resizeObserverLoopErrRe.test(err.message)) {
				return false;
			}
		});

		cy.visit("/index.html#/menu-groups/willow");

		cy.get(".wx-toolbar .wx-tb-element").then($elements => {
			const initialCount = $elements.length;
			cy.log(`Initial toolbar items: ${initialCount}`);
		});

		cy.get(".wx-menu").should("not.exist");

		cy.contains("button", "Change width").click();

		cy.get(".wx-toolbar .wx-tb-element").then($elements => {
			const afterFirstChange = $elements.length;
			cy.log(
				`Toolbar items after first width change: ${afterFirstChange}`
			);
		});

		cy.get(".wx-menu").should("exist");

		cy.get(".wx-menu button").first().click();
		cy.get(".wx-drop-menu").should("be.visible");

		cy.get(".wx-drop-menu .wx-tb-element").should("have.length", 2);
	});
});
