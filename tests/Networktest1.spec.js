const { test, expect } = require('@playwright/test');

test('Security test request intercept', async ({ page }) => {

    test.setTimeout(60000);

    await page.goto("https://rahulshettyacademy.com/client/");

    await page.locator("#userEmail").fill("aithaaravind481@gmail.com");
    await page.locator("#userPassword").fill("Welcome@123");
    await page.locator("#login").click();

    await page.locator("button[routerlink*='myorders']").click();

    await page.route(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        async (route) => {
            await route.continue({
                url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6'
            });
        }
    );

    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
});