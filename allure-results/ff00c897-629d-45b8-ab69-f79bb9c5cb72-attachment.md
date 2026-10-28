# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebAPIPart2.spec.js >> Place the order
- Location: tests\WebAPIPart2.spec.js:17:1

# Error details

```
ReferenceError: LoginPage is not defined
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | let webContext;
  3  | 
  4  | test.beforeAll(async ({ browser }) => {
  5  |     const context = await browser.newContext();
  6  |     const page = await context.newPage();
> 7  |     const loginPage = new LoginPage(page);
     |                       ^ ReferenceError: LoginPage is not defined
  8  |     await page.goto("https://rahulshettyacademy.com/client/");
  9  |     await page.locator("#userEmail").fill("aithaaravind481@gmail.com");
  10 |     await page.locator("#userPassword").fill("Welcome@123");
  11 |     await page.locator("#login").click();
  12 |     await page.waitForLoadState("networkidle");
  13 |     await context.storageState({ path: 'state.json' });
  14 |     webContext = await browser.newContext({ storageState: 'state.json' });
  15 | 
  16 | })
  17 | test('Place the order', async () => {
  18 |     const email = "";
  19 |     const productName = 'ZARA COAT 3';
  20 |     console.log('ZARA COAT 3');
  21 |     const page = await webContext.newPage();
  22 |     await page.goto("https://rahulshettyacademy.com/client/");
  23 |     await page.locator(".fa.fa-shopping-cart").nth(2).click();
  24 |     await page.locator("button[routerlink*='cart'] ").click();
  25 |     await page.getByRole('button', { name: 'Checkout' }).click();
  26 |     await page.getByPlaceholder('Select Country').pressSequentially('India');
  27 |     await page.locator('.ta-results').waitFor();
  28 |     await page.getByText('India', { exact: true }).click();
  29 | });
  30 | 
```