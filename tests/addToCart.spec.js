import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test.describe('Cart Tests', () => {
  let home, results, product, cart;
  const productName = 'Marco Lightweight Active';
  const size = 'M';
  const color = 'Green';
  const quantity = 2;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    results = new SearchResultsPage(page);
    product = new ProductPage(page);
    cart = new CartPage(page);

    await home.goto();
    await home.search('hoodie');
    await results.selectProduct(productName);
  });

  test('Add Item to Cart', async ({ page }) => {
    await product.selectSize(size);
    await product.selectColor(color);
    await product.setQuantity(quantity);
    await product.addToCart();
    await expect(page.locator('.counter-number')).toHaveText(String(quantity));
  });

  test('Remove Item from Cart', async ({ page }) => {
    await product.selectSize(size);
    await product.selectColor(color);
    await product.setQuantity(quantity);
    await product.addToCart();
    await cart.openCart(quantity);
    await cart.viewAndEditCart();
    await cart.removeItem();
    await cart.verifyCartIsEmpty();
  });

  test('Missing Required Fields', async () => {
    await product.selectColor(color);
    await product.setQuantity(quantity);
    await product.addToCart();
    await product.expectRequiredFieldError();
  });
});
