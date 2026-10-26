import {test,expect } from '@playwright/test';
import { customTest } from '../Utils_ts/test-base';
import { POManager } from '../pageobjects_ts/POManager';
import placeorderTestData from "../Utils/placeorderTestData.json";
const dataset = placeorderTestData;

//first method
for (const data of dataset) {
   test(`@Webs Client App login for ${data.productName}`, async ({ page }) => {
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

        const OrderHistory = poManager.getOrderHistory();
        
        await page.locator("button[routerlink*='myorders']").click();
        await page.locator("tbody").waitFor();
        const rows = await page.locator("tbody tr");

 
        for (let i = 0; i < await rows.count(); ++i) {
            const rowOrderId = await rows.nth(i).locator("th").textContent();
            let orderId:any;
            if (orderId.includes(rowOrderId)) {
                await rows.nth(i).locator("button").first().click();
                break;
            }
        }
        let orderId:any;
        const orderIdDetails = await page.locator(".col-text").textContent();
        expect(orderId.includes(orderIdDetails)).toBeTruthy();
    })
};
//second method
customTest(`Client App`, async ({ page, testDataForOrder }) => {
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
});

