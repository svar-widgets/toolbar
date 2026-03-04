context("Basic: toolbar buttons are clickable", () => {
	it("clicks toolbar items and checks gray bar text", () => {
		cy.visit("/index.html#/base/willow");

		cy.wxT("toolbar-button", "edit").click();
		cy.get(".demo-status").should("contain", "Button 'edit' clicked");

		cy.wxT("toolbar-button", "copy").click();
		cy.get(".demo-status").should("contain", "Button 'copy' clicked");

		cy.wxT("toolbar-button", "delete").click();
		cy.get(".demo-status").should("contain", "Button 'delete' clicked");
	});
});
