import { Page } from '@playwright/test';

export class YourCartPage {
  constructor(private page: Page) {}

  async openCart() {
    await this.page.locator('path').click(); // ← selector ตรงนี้ถ้าไม่เสถียร แนะนำเปลี่ยนเป็น data-testid
  }

  async checkout() {
    await this.page.getByTestId('checkout-button').click();
  }
}
