import { Locator, Page } from "@playwright/test";

export class OukAdminLoginPage {
    page: Page;
    emailaddress: Locator;
    password: Locator;
    loginbutton: Locator;
    constructor(page: Page) {
        this.page = page;
        this.emailaddress = page.locator("#floatingInput");
        this.password = page.locator("#floatingPassword");
        this.loginbutton = page.locator('a:has-text("Login")');
    }
    async goTo() {
        await this.page.goto("https://oukdev.samvaadpro.com/login");
    }
    async validLogin(emailaddress: string, password: string) {
        await this.emailaddress.fill(emailaddress);
        await this.password.fill(password);
        await this.loginbutton.click();
        await this.page.waitForTimeout(5000);
    }

}