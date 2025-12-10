context("Basic: content wraps when container changes", () => {
	it("wraps toolbar rows on width change", () => {
		cy.visit("/index.html#/wrap/willow");

		cy.get(".wx-toolbar").as("bar");
		cy.get("@bar").should("have.class", "wx-wrap");

		cy.contains("button", "Change width").as("resize");
		cy.get("@resize").click();
		cy.get("@resize").click();

		cy.get("@bar")
			.find(".wx-tb-element")
			.then($els => {
				const tops = [...$els].map(
					el => el.getBoundingClientRect().top
				);
				const minTop = Math.min(...tops);
				const uniqueRows = new Set(
					tops.map(t => Math.round(t - minTop))
				);
				expect(uniqueRows.size).to.be.greaterThan(1);
			});
	});
});
