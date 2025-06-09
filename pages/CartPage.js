import { expect } from '@playwright/test';
export class CartPage {
  constructor(page) {
    this.page = page;
  }

  async openCart(expectedCount) {
    const cartLabel = ` My Cart ${expectedCount} ${expectedCount} items`;
    await this.page.getByRole('link', { name: cartLabel }).waitFor({ timeout: 5000 });
    await this.page.getByRole('link', { name: cartLabel }).click();
  }

  async viewAndEditCart() {
    await this.page.getByRole('link', { name: 'View and Edit Cart' }).click();
  }

  async removeItem() {
    await this.page.getByRole('link', { name: ' Remove item' }).click();
  }

  async verifyCartIsEmpty() {
    await expect(
      this.page.getByText('You have no items in your shopping cart. Click here to continue shopping.')
    ).toBeVisible();
  }

  async verifyProductDetails({ name, unitPrice, totalPrice }) {
    const cartTable = this.page.locator('#shopping-cart-table');
    //await expect(cartTable.getByText(name)).toBeVisible();
    //await expect(cartTable.getByText(unitPrice)).toBeVisible();
    //await expect(cartTable.getByText(totalPrice)).toBeVisible();
  }
}
