import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('user can complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await productPage.addProductToCart(2);
  await productPage.openCart();

  await checkoutPage.checkout({
    title: 'Ms.',
    firstname: 'Nattapat',
    lastname: 'Pinrat',
    houseNumber: '2/69',
    street: 'frosty',
    subDistrict: 'Snowman',
    district: 'eiei',
    province: 'hoho',
    postalcode: '20140',
  });

  await checkoutPage.finishOrder();
});
