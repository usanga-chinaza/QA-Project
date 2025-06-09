// pages/CheckoutPage.js
export class CheckoutPage {
    constructor(page) {
      this.page = page;
    }
  
    async fillShippingDetails(user) {
      await this.page.getByRole('textbox', { name: 'Email Address * Email Address' }).fill(user.email);
      await this.page.getByRole('textbox', { name: 'First Name *' }).fill(user.firstName);
      await this.page.getByRole('textbox', { name: 'Last Name *' }).fill(user.lastName);
      await this.page.getByRole('textbox', { name: 'Street Address: Line 1' }).fill(user.address);
      await this.page.getByRole('textbox', { name: 'City *' }).fill(user.city);
      await this.page.locator('select[name="region_id"]').selectOption(user.stateCode);
      await this.page.getByRole('textbox', { name: 'Zip/Postal Code *' }).fill(user.zip);
      await this.page.getByLabel('Country').selectOption(user.countryCode);
      await this.page.getByRole('textbox', { name: 'Phone Number *' }).fill(user.phone);
    }
  
    async continueToShipping() {
      await this.page.getByRole('button', { name: 'Next' }).click();
    }
  }
  