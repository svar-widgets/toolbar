context("Basic: clicking item in overflow menu", () => {
	it("clicks an item inside overflow menu and sees gray bar update", () => {
		cy.visit("/index.html#/menu/willow");
		cy.wait(1000);

		const checkButtonsAndClickOverflow = expectedCount => {
			cy.get(".wx-toolbar .wx-tb-element").then($elements => {
				const visibleElements = $elements.filter((index, element) => {
					return (
						Cypress.$(element).css("visibility") !== "hidden" &&
						Cypress.$(element).css("display") !== "none"
					);
				});
				const visibleCount = visibleElements.length;
				cy.log(`Found ${visibleCount} visible toolbar elements`);

				cy.wrap(visibleCount).should("equal", expectedCount);

				if (visibleCount <= 3) {
					cy.log("Few visible elements - checking for overflow menu");
				} else if (visibleCount >= 6) {
					cy.log("Many visible elements - likely no overflow needed");
				} else {
					cy.log(
						"Medium number of visible elements - checking layout"
					);
				}

				cy.get("body").then($body => {
					if ($body.find(".wx-menu button").length > 0) {
						cy.log("Overflow menu detected - clicking on item");
						cy.get(".wx-menu button").first().click();
						cy.get(".wx-drop-menu").should("be.visible");

						cy.get(".wx-drop-menu .wx-tb-element.wx-menu").then(
							$overflowItems => {
								if ($overflowItems.length > 0) {
									const randomIndex = Math.floor(
										Math.random() * $overflowItems.length
									);
									const targetElement =
										$overflowItems.eq(randomIndex);
									const targetId =
										targetElement.attr("data-id");

									cy.get(
										`.wx-drop-menu .wx-tb-element.wx-menu[data-id=${targetId}] .wx-item`
									).click();
									cy.get(".demo-status").should(
										"contain",
										`Button '${targetId}' clicked`
									);
								}
							}
						);
					} else {
						cy.log(
							"No overflow menu available - all buttons are visible"
						);
					}
				});
			});
		};

		checkButtonsAndClickOverflow(3);

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
