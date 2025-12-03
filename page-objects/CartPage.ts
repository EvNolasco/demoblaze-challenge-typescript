import { expect, type Locator, type Page } from '@playwright/test';
import type { UserData } from '../utils/data';

export class CartPage {
    readonly page: Page;
    readonly placeOrderButton: Locator;
    
    // Modal Selectors
    readonly nameInput: Locator;
    readonly countryInput: Locator;
    readonly cityInput: Locator;
    readonly cardInput: Locator;
    readonly monthInput: Locator;
    readonly yearInput: Locator;
    readonly purchaseButton: Locator;

    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });

        this.nameInput = page.locator('#name');
        this.countryInput = page.locator('#country');
        this.cityInput = page.locator('#city');
        this.cardInput = page.locator('#card');
        this.monthInput = page.locator('#month');
        this.yearInput = page.locator('#year');

        this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
        this.successMessage = page.locator('.sweet-alert h2');
    }

    async placeOrder() {
        await this.placeOrderButton.click();
    }

    async fillPurchaseForm(user: UserData) {
        await this.nameInput.fill(user.name);
        await this.countryInput.fill(user.country);
        await this.cityInput.fill(user.city);
        await this.cardInput.fill(user.card);
        await this.monthInput.fill(user.month);
        await this.yearInput.fill(user.year);
    }

    async confirmPurchase() {
        await this.purchaseButton.click();
    }

    async verifyPurchaseSuccess() {
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toHaveText('Thank you for your purchase!');
    }
}