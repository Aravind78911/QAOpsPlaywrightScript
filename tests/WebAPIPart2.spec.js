const { test, expect } = require('@playwright/test');
let webContext;

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("#userEmail").fill("aithaaravind481@gmail.com");
    await page.locator("#userPassword").fill("Welcome@123");
    await page.locator("#login").click();
    await page.waitForLoadState("networkidle");
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });

})
test('Place the order', async () => {
    const email = "";
    const productName = 'ZARA COAT 3';
    console.log('ZARA COAT 3');
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator(".fa.fa-shopping-cart").nth(2).click();
    await page.locator("button[routerlink*='cart'] ").click();
    await page.getByRole('button', { name: 'Checkout' }).click();
    await page.getByPlaceholder('Select Country').pressSequentially('India');
    await page.locator('.ta-results').waitFor();
    await page.getByText('India', { exact: true }).click();
});
