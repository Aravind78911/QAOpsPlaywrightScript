const { test, expect, request } = require('@playwright/test');
const { APIUtils1 } = require('../Utils/APIUtils1');

const loginPayload = { userEmail: "aithaaravind481@gmail.com", userPassword: "Welcome@123" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
let response;
test.beforeAll(async () =>
//login
{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils1(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});
test('@API Place the order', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    test.setTimeout(60000);
    await page.goto("https://rahulshettyacademy.com/client/");
    const bElement = page.locator('b', { hasText: 'ZARA COAT 3' });
    console.log('ZARA COAT 3');
    await page.locator(".fa.fa-shopping-cart").nth(2).click();
    await page.locator("button[routerlink*='cart'] ").click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder('Select Country').pressSequentially('India');
    await page.locator('.ta-results').waitFor();
    await page.getByText('India', { exact: true }).click();
});
