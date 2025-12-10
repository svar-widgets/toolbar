context("Basic: toolbar buttons are clickable", () => {
	it("clicks toolbar items and checks gray bar text", () => {
		cy.visit("/index.html#/base/willow");

		cy.get(".wx-tb-element[data-id=edit] button").click();
		cy.get(".demo-status").should("contain", "Button 'edit' clicked");

		cy.get(".wx-tb-element[data-id=copy] button").click();
		cy.get(".demo-status").should("contain", "Button 'copy' clicked");

		cy.get(".wx-tb-element[data-id=delete] button").click();
		cy.get(".demo-status").should("contain", "Button 'delete' clicked");
	});
});
