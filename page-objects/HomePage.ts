import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly cartLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.getByRole('link', { name: 'Cart', exact: true });
    }

    async goto() {
        await this.page.goto('/');
    }

    async selectProduct(productName: string) {
        await this.page.getByRole('link', { name: productName }).click();
    }

    async navigateToCart() {
        await this.cartLink.click();
    }
}