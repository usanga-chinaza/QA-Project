export class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = page.getByRole('combobox', { name: ' Search' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
  }

  async goto() {
    await this.page.goto('https://magento.softwaretestingboard.com/');
  }

  async search(term) {
    await this.searchBox.click();
    await this.searchBox.fill(term);
    await this.searchButton.click();
  }
}
