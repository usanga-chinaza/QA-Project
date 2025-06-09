import { expect } from '@playwright/test';
export class ProductPage {
  constructor(page) {
    this.page = page;
    this.quantityInput = page.getByRole('spinbutton', { name: 'Qty' });
    this.addToCartButton = page.getByRole('button', { name: 'Add to Cart' });
    this.requiredFieldError = page.getByText('This is a required field.');
  }

  async selectSize(size) {
    await this.page.getByRole('option', { name: size }).click();
  }

  async selectColor(color) {
    await this.page.getByRole('option', { name: color }).click();
  }

  async setQuantity(quantity) {
    await this.quantityInput.click();
    await this.quantityInput.fill(String(quantity));
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async expectRequiredFieldError() {
    await expect(this.requiredFieldError).toBeVisible();
  }
}
