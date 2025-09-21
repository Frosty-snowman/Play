import { Page } from '@playwright/test';

export class CheckoutInfoPage {
  constructor(private page: Page) {}

  async fillCustomerInfo(data: {
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
    await this.page.getByTestId('customer-title').selectOption(data.title);
    await this.page.getByTestId('customer-firstname').fill(data.firstname);
    await this.page.getByTestId('customer-lastname').fill(data.lastname);
    await this.page.getByTestId('customer-house-number').fill(data.houseNumber);
    await this.page.getByTestId('customer-street').fill(data.street);
    await this.page.getByTestId('customer-sub-district').fill(data.subDistrict);
    await this.page.getByTestId('customer-district').fill(data.district);
    await this.page.getByTestId('customer-province').fill(data.province);
    await this.page.getByTestId('customer-postalcode').fill(data.postalcode);
    await this.page.getByTestId('continue-button').click();
  }

  async finish() {
    await this.page.getByTestId('finish-button').click();
    await this.page.getByTestId('back-home-button').click();
  }
}
