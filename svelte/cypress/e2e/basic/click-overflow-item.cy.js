context("Basic: clicking item in overflow menu", () => {
	it("clicks an item inside overflow menu and sees gray bar update", () => {
		cy.viewport(700, 660);
		cy.visit("/index.html#/menu/willow");
		cy.wait(1000);

		const totalCount = 6;
		const checkButtonsAndClickOverflow = expectedCount => {
			cy.get(".wx-toolbar .wx-tb-element:visible").should(
				"have.length",
				expectedCount
			);

			const overflowCount = totalCount - expectedCount;
			if (overflowCount) {
				cy.get(".wx-menu button").first().click();
				cy.get(".wx-drop-menu").should("be.visible");

				cy.get(".wx-drop-menu .wx-tb-element").should(
					"have.length",
					overflowCount
				);
				cy.get(".wx-drop-menu .wx-tb-element").first().click();

				cy.get(".demo-status")
					.should("be.visible")
					.invoke("text")
					.should("contain", "clicked");
			} else {
				cy.get(".wx-menu button").should("not.exist");
			}
		};

		cy.contains("button", "Resize column").as("resize");
		cy.get("@resize").click();
		cy.wait(300);
		checkButtonsAndClickOverflow(6);

		cy.get("@resize").click();
		cy.wait(300);
		checkButtonsAndClickOverflow(5);

		cy.get("@resize").click();
		cy.wait(300);
		checkButtonsAndClickOverflow(2);
	});
});
