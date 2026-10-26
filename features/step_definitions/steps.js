const { When, Then, Given } = require('@cucumber/cucumber');
const { POManager } = require('../../pageobjects/POManager');
const { chromium, expect } = require('@playwright/test');
const playwright = require('@playwright/test');

Given('a login to Ecommerce application with {string} and {string}', { timeout: 100 * 1000 }, async function (email, password) {

    const products = this.page.locator(".card-body");
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(email, password);
});

When('Add {string} to Cart', async function (productName) {

    this.dashboardPage = this.poManager.getDashboardPage();
    await this.dashboardPage.searchProductAddCart(productName);
    await this.dashboardPage.navigateToCart();
});

Then('Verify {string} is displayed in the Cart', { timeout: 30 * 1000 }, async function (productName) {

    const checkoutPage = this.poManager.getCheckOutPage();
    await checkoutPage.verifyProductDisplayed(productName);
    await checkoutPage.clickCheckout();
});

Then('Verify Order is present in the OrderHistory', async function () {
    await this.dashboardPage.navigateToOrders();
    const OrderHistory = this.poManager.getOrderHistory(page);
    await OrderHistory.searchOrderandSelect(orderId);
    expect(orderId.includes(await OrderHistory.getOrderId())).toBeTruthy();
});


Given('a login to Ecommerce2 application with {string} and {string}', async function (username,password) {
    await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
    await this.page.getByLabel("Check me out if you Love IceCreams!").click();
    await this.page.getByLabel("Employed").check();
    await this.page.getByLabel("Gender").selectOption("Male");
    await this.page.getByPlaceholder("Password").fill("abc123");
});

Then('Verify Error message is displayed', async function () {
    await this.page.getByRole("button", { name: 'Submit' }).click();
});

