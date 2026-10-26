
const { expect } = require('@playwright/test');

class CheckOutPage {
    constructor(page) {
        this.page = page;

        this.productTitle = page.locator("h3:has-text('ZARA COAT 3')");
        this.checkoutButton = page.getByText("Checkout", { exact: true });
        this.countryInput = page.locator("[placeholder*='Country']");
        this.countryDropdown = page.locator(".ta-results");

        // Locate the email input specifically
        /* this.emailText = this.page.getByLabel('aithaaravind481@gmail.com');*/

        this.submitButton = page.locator(".action__submit");
    }

    async verifyProductDisplayed() {
        await expect(this.productTitle).toBeVisible();
    }

    async clickCheckout() {
        await this.checkoutButton.click();
    }

    async selectCountry(country) {
        await this.countryInput.pressSequentially("ind", { delay: 150 });

        await this.countryDropdown.waitFor({ state: "visible" });

        const options = this.countryDropdown.locator("button");
        const count = await options.count();

        for (let i = 0; i < count; i++) {
            const text = (await options.nth(i).innerText()).trim();

            if (text === country) {
                await options.nth(i).click();
                return;
            }
        }

        throw new Error(`Country not found: ${country}`);
    }

    /*async verifyEmail(email = 'aithaaravind481@gmail.com') {
        await expect(this.emailText).toHaveValue(email);
    }*/

    async submitOrder() {
        await this.submitButton.click();
    }
}

module.exports = { CheckOutPage };