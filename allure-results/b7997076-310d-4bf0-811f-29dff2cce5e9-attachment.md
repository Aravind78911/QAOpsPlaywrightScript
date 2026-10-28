# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Networktest.spec.js >> Place the order
- Location: tests\Networktest.spec.js:16:1

# Error details

```
TypeError: APIUtils1 is not a constructor
```

# Test source

```ts
  1  | const { test, expect, request } = require('@playwright/test');
  2  | const { APIUtils1 } = require('../Utils/APIUtils');
  3  | 
  4  | const loginPayload = { userEmail: "aithaaravind481@gmail.com", userPassword: "Welcome@123" };
  5  | const orderPayload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
  6  | const fakePayloadOrders = { data: [], message: "No Orders" };
  7  | let response;
  8  | test.beforeAll(async () =>
  9  | //login
  10 | {
  11 |     const apiContext = await request.newContext();
> 12 |     const apiUtils = new APIUtils1(apiContext, loginPayload);
     |                      ^ TypeError: APIUtils1 is not a constructor
  13 |     response = await apiUtils.createOrder(orderPayload);
  14 | 
  15 | });
  16 | test('Place the order', async ({ page }) => {
  17 | 
  18 |     await page.addInitScript(value => {
  19 |         window.localStorage.setItem('token', value);
  20 |     }, response.token);
  21 |     test.setTimeout(60000);
  22 |     await page.goto("https://rahulshettyacademy.com/client/");
  23 |     await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
  24 |         async route => {
  25 |             const response = await page.request.fetch(route.request());
  26 |             let body = JSON.stringify(fakePayloadOrders);
  27 |             route.fulfill(
  28 |                 {
  29 |                     response,
  30 |                     body,
  31 |                 }
  32 |             )
  33 |         });
  34 | 
  35 |     await page.locator("button[routerlink*='myorders']").click();
  36 |     await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
  37 |     console.log(await page.locator(".mt-4").textContent());
  38 | });
  39 | 
```