const { test, expect } = require('@playwright/test');
const { customtest } = require('../Utils/test-base');
const { POManager } = require('../pageobjects/POManager');

const dataset = JSON.parse(JSON.stringify(require("../Utils/placeorderTestData.json")));
//first method
for (const data of dataset) {
    test.skip(`@Web Client App login for ${data.productName}`, async ({ page }) => {
        //js file- Login js, DashboardPage
        const poManager = new POManager(page);
        test.setTimeout(30000);
        const products = page.locator(".card-body");
        const loginPage = poManager.getLoginPage();
        await loginPage.goTo();
        await loginPage.validLogin(data.email, data.password);
        const dashboardPage = poManager.getDashboardPage();
        await dashboardPage.searchProductAddCart(data.productName);
        await dashboardPage.navigateToCart();
        const checkoutPage = poManager.getCheckOutPage();
        await checkoutPage.verifyProductDisplayed(data.productName);
        //await page.pause();
        await expect(
            page.locator("h3:has-text('ZARA COAT 3')")
        ).toBeVisible();

        await checkoutPage.clickCheckout();

        await checkoutPage.selectCountry('India');

        /*await checkoutPage.verifyEmail(email);*/

        await checkoutPage.submitOrder();
        await dashboardPage.navigateToOrders();
        const OrderHistory = poManager.getOrderHistory(page);
        await OrderHistory.searchOrderandSelect(orderId);
        expect(orderId.includes(await OrderHistory.getOrderId())).toBeTruthy();

    })
};
//second method
customtest(`Client App login`, async ({ page, testDataForOrder }) => {
    //js file- Login js, DashboardPage
    const poManager = new POManager(page);
    test.setTimeout(30000);
    const products = page.locator(".card-body");
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.email, testDataForOrder.password);
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.searchProductAddCart(testDataForOrder.productName);
    await dashboardPage.navigateToCart();
    const checkoutPage = poManager.getCheckOutPage();
    await checkoutPage.verifyProductDisplayed(testDataForOrder.productName);
    //await page.pause();
    await expect(
        page.locator("h3:has-text('ZARA COAT 3')")
    ).toBeVisible();

    await checkoutPage.clickCheckout();
})