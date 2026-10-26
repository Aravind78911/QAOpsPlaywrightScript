const { test, expect, request } = require('@playwright/test');
const { APIUtils1 } = require('../Utils/APIUtils');

const loginPayload = { userEmail: "aithaaravind481@gmail.com", userPassword: "Welcome@123" };
const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
const fakePayloadOrders = { data: [], message: "No Orders" };
let response;
test.beforeAll(async () =>
//login
{
    const apiContext = await request.newContext();
    const apiUtils = new APIUtils1(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

});
test('Place the order', async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);
    test.setTimeout(60000);
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
        async route => {
            const response = await page.request.fetch(route.request());
            let body = JSON.stringify(fakePayloadOrders);
            route.fulfill(
                {
                    response,
                    body,
                }
            )
        });

    await page.locator("button[routerlink*='myorders']").click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
    console.log(await page.locator(".mt-4").textContent());
});
