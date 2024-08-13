
export class InventoryPage {
    
    closeButton = '.flex-shrink-0 > .text-button';
    newCategory = ':nth-child(1) > ul > :nth-child(1) > .link > .w-full';
    usedCategory = ':nth-child(1) > ul > :nth-child(2) > .link > .w-full';
    customOrderCategory = 'ul > :nth-child(3) > .link > .w-full';
    inventoryLink = '.rounded-t-xsmall';
    cards = 'div[class="flex h-full w-full"]';
    image = `div[class='static h-full w-full']>img`;

    //  close the modal or overlay
    closeModal() {
        cy.get(this.closeButton).click();
    }

    // verify categories
    verifyCategories() {
        cy.get(this.newCategory).contains("New");
        cy.get(this.usedCategory).contains("Used");
        cy.get(this.customOrderCategory).contains("Custom order");
    }

    //  navigate to the inventory page
    goToInventory() {
        cy.get(this.inventoryLink).click();
    }
    
    checkCarImages() {
        cy.get("div[class='static h-full w-full']")
            .should('exist')
            .each(($container, index) => {
                cy.wrap($container).scrollIntoView();

                cy.wrap($container)
                    .find('img')
                    .and('not.be.empty')
                    .then(($img) => {
                        cy.log(`Checking image #${index + 1}`);
                    });
            });
    }
}

