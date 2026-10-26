import { test, expect } from '@playwright/test';

test('Playwright Special Locators', async ({ page }) => {
    test.setTimeout(60000);
    const slowExpect = expect.configure({ timeout: 9000 });
    page.setDefaultTimeout(9000);
    //page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Male");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", { name: 'Submit' }).click();
    console.log(await page.getByText("Success! The Form has been submitted successfully!."));
    //5 seconds default timeout for expect assertions --(timeout:10000) Step level
    await expect(await page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({ timeout: 10_000 });
    //Test level
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
    await page.waitForTimeout(2000);
    await page.getByRole("link", { name: "Shop" }).click({ timeout: 15000 });
    await slowExpect(page.locator(".my-4").first()).toHaveText("Shop");
    //2more
    await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();
});