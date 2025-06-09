export class SearchResultsPage {
  constructor(page) {
    this.page = page;
  }

  async selectProduct(productName) {
    await this.page.getByRole('link', { name: productName }).first().click();
  }
}
