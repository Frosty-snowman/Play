import { Page } from '@playwright/test';

export class YourCartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.locator('data-testid=icon-cart').click();
  }

  async checkout() {
    await this.page.getByTestId('checkout-button').click();
  }
}
