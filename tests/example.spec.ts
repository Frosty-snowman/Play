import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { loginUsers } from '../data/login-tests';
import { ProductPage } from '../pages/ProductPage';
import { YourCartPage } from '../pages/YourCartPage';
import { CheckoutInfoPage } from '../pages/CheckoutInfoPage';
import { checkoutInfo } from '../data/checkoutinfo-tests';

test('user can complete checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new YourCartPage(page);
  const checkoutInfoPage = new CheckoutInfoPage(page);

  await loginPage.goto();
  await loginPage.login(loginUsers.validUser.username, loginUsers.validUser.password);

  await productPage.addProductToCart(1);

  await cartPage.openCart();
  await cartPage.checkout();

  await checkoutInfoPage.fillCustomerInfo(checkoutInfo.validInfo);
  await checkoutInfoPage.finish();
});


// test("user can't login with wrong username", async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.login(loginUsers.invalidUser.username, loginUsers.invalidUser.password);

//   const errorMessage = await loginPage.getErrorMessage();
//   expect(errorMessage).toBe('Login failed');
// });
