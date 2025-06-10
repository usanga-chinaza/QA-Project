import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test.describe('Product Search Flow', () => {
  let home, results;

  test.beforeEach(async ({ page }) => {
    home = new HomePage(page);
    results = new SearchResultsPage(page);
    await home.goto();
  });

  test('Search for existing product with uppercase text', async () => {
    await home.search('HOODIE');
    await expect(results.resultHeader).toContainText('Search results for:');
    await expect(results.resultItem.first()).toBeVisible();
  });

  test('Search for non-existent product shows no results', async () => {
    await home.search('ajneonqoin');
    const noResults = results.page.locator('main').getByText('Your search returned no results.');
    await expect(noResults).toBeVisible();
  });
  
});
