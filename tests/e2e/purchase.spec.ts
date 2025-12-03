import { test } from '@playwright/test';
import { HomePage } from '../../page-objects/HomePage';
import { ProductPage } from '../../page-objects/ProductPage';
import { CartPage } from '../../page-objects/CartPage';
import { testUser, productToBuy } from '../../utils/data';

test.describe('E-Commerce Purchase Flow', () => {

    test('User can complete a purchase flow successfully', async ({ page }) => {
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);
        const cartPage = new CartPage(page);

        await test.step('Navigate to Home and select product', async () => {
            await homePage.goto();
            await homePage.selectProduct(productToBuy);
        });

        await test.step('Add product to cart', async () => {
            await productPage.addToCart();
        });

        await test.step('Proceed to Checkout', async () => {
            await homePage.navigateToCart();
            await cartPage.placeOrder();
        });

        await test.step('Fill form and purchase', async () => {
            await cartPage.fillPurchaseForm(testUser);
            await cartPage.confirmPurchase();
        });

        await test.step('Verify success message', async () => {
            await cartPage.verifyPurchaseSuccess();
        });
    });
});