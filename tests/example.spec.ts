import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { YourCartPage } from '../pages/YourCartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';

test('user can complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new YourCartPage(page);
  const checkoutInfoPage = new CheckoutInfoPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productPage.addProductToCart(1);

  await cartPage.openCart();
  await cartPage.checkout();

  await checkoutInfoPage.fillCustomerInfo({
    title: 'Mrs.',
    firstname: 'Frosty',
    lastname: 'Snowman2',
    houseNumber: '323',
    street: 'frost',
    subDistrict: 'rt',
    district: 'for',
    province: 'ktm',
    postalcode: '20130'
  });

  await checkoutInfoPage.finish();
});
