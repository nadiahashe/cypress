import { InventoryPage } from "../pages/inventoryPage";
describe('Inventory Tests', () => {
    const inventoryPage = new InventoryPage();

    before(() => {
        cy.visit('https://ev.com');
    });

    it('Checks if all cars in the inventory have images', () => {

        inventoryPage.closeModal();
        inventoryPage.verifyCategories();
        inventoryPage.closeModal();
        inventoryPage.goToInventory();
        inventoryPage.checkCarImages();
    });
});

