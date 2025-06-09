import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';


test('Add Item to Cart', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);
  const product = new ProductPage(page);
  // const cart = new CartPage(page);

  const productName = 'Marco Lightweight Active';
  const size = 'M';
  const color = 'Green';
  const quantity = 2;

  await home.goto();
  await home.search('hoodie');
  await results.selectProduct(productName);
  await product.selectSize(size);
  await product.selectColor(color);
  await product.setQuantity(quantity);
  await product.addToCart();

  //  Assert that the cart icon reflects the expected item count
  const cartCountLocator = page.locator('.counter-number');
  await expect(cartCountLocator).toHaveText(String(quantity), { timeout: 5000 });
});

test('Remove Item from Cart', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);
  const product = new ProductPage(page);
  const cart = new CartPage(page);

  const productName = 'Marco Lightweight Active';
  const size = 'M';
  const color = 'Green';
  const quantity = 2;

  await home.goto();
  await home.search('hoodie');
  await results.selectProduct(productName);
  await product.selectSize(size);
  await product.selectColor(color);
  await product.setQuantity(quantity);
  await product.addToCart();

  await cart.openCart(quantity);
  await cart.viewAndEditCart();
  await cart.removeItem();
  await cart.verifyCartIsEmpty();
});

test('Attempt to add to cart with missing required fields', async ({ page }) => {
  const home = new HomePage(page);
  const results = new SearchResultsPage(page);
  const product = new ProductPage(page);
  const productName = 'Marco Lightweight Active';
  const color = 'Green';
  const quantity = 2;

  await home.goto();
  await home.search('hoodie');
  await results.selectProduct(productName);

  // Only select color; skip size
  await product.selectColor(color);
  await product.setQuantity(quantity);

  // Try to add to cart without selecting size
  await product.addToCart();

  // Assert required field error is shown
  await product.expectRequiredFieldError();
});