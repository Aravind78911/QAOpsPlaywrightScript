const base = require('@playwright/test');
const { APIUtils1 } = require('./APIUtils1.js');
const { request, test } = require('@playwright/test');

const loginPayload = { userEmail: "aithaaravind481@gmail.com", userPassword: "Welcome@123" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };

exports.customtest = base.test.extend(
    {
        authenticatedPage: async ({ browser }, use) => {
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://rahulshettyacademy.com/client/");
            await page.locator("#userEmail").fill("aithaaravind481@gmail.com");
            await page.locator("#userPassword").fill("Welcome@123");
            await page.locator("#login").click();
            await page.waitForLoadState("networkidle");
            await use(page);
            await context.close();

        },

        createOrder: async ({ }, use) => {
            test.setTimeout(60000);
            const apiContext = await request.newContext();
            const apiUtils = new APIUtils1(apiContext, loginPayload);
            const response = await apiUtils.createOrder(orderPayload);
            await use(response);
            await apiContext.dispose();

        },

        testDataForOrder: {

            productName: 'ADIDAS ORIGINAL'

        }
    });

