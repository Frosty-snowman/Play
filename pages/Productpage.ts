import { Page } from '@playwright/test';

export class ProductPage {
  constructor(private page: Page) {}

  async addProductToCart(productId: number) {
    await this.page
      .getByTestId(`product-${productId}`)
      .getByTestId('add-cart-button')
      .click();
  }

  async openCart() {
    await this.page.getByTestId('count-cart').click();
  }
}
