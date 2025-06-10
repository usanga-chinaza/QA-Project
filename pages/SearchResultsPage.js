export class SearchResultsPage {
  constructor(page) {
    this.page = page;
    this.resultItem = page.locator('.product-item'); // Result tiles
    this.resultHeader = page.locator('#maincontent div').filter({ hasText: 'Search results for:' });
    this.noResultsText = page.locator('div').filter({ hasText: 'Your search returned no' }).nth(3);
  }

  async selectProduct(productName) {
    await this.page.getByRole('link', { name: productName }).first().click();
  }

  async expectNoResults() {
    await expect(this.noResultsText).toBeVisible();
 
}

}
