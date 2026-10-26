import { Page, Locator } from "@playwright/test";

export class LoginPage {

    page: Page;
    signInbutton: Locator;
    userName: Locator;
    password: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInbutton = page.locator("#login");
        this.userName = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }

    async goTo() {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }

    async validLogin(userName: string, password: string) {
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');

    }
}
