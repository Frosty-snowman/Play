import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async checkout(customer: {
    title: string;
    firstname: string;
    lastname: string;
    houseNumber: string;
    street: string;
    subDistrict: string;
    district: string;
    province: string;
    postalcode: string;
  }) {
    await this.page.getByTestId('checkout-button').click();
    await this.page.getByTestId('customer-title').selectOption(customer.title);
    await this.page.getByTestId('customer-firstname').fill(customer.firstname);
    await this.page.getByTestId('customer-lastname').fill(customer.lastname);
    await this.page.getByTestId('customer-house-number').fill(customer.houseNumber);
    await this.page.getByTestId('customer-street').fill(customer.street);
    await this.page.getByTestId('customer-sub-district').fill(customer.subDistrict);
    await this.page.getByTestId('customer-district').fill(customer.district);
    await this.page.getByTestId('customer-province').fill(customer.province);
    await this.page.getByTestId('customer-postalcode').fill(customer.postalcode);
    await this.page.getByTestId('continue-button').click();
  }

  async finishOrder() {
    await this.page.getByTestId('finish-button').click();
    await expect(this.page.getByText('Thank you for your order')).toBeVisible();
    await this.page.getByTestId('back-home-button').click();
  }
}
