# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Playwrightscript.spec.js >> Playwright Special Locators
- Location: tests\Playwrightscript.spec.js:3:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('.my-4').first()
Expected: "Shop"
Received: "Shop Name"
Timeout:  9000ms

Call log:
  - Expect "toHaveText" locator('.my-4').first() with timeout 9000ms
  - waiting for locator('.my-4').first()
    21 × locator resolved to <h1 class="my-4">Shop Name</h1>
       - unexpected value "Shop Name"

```

```yaml
- heading "Shop Name" [level=1]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Playwright Special Locators', async ({ page }) => {
  4  |     test.setTimeout(60000);
  5  |     const slowExpect = expect.configure({ timeout: 9000 });
  6  |     page.setDefaultTimeout(9000);
  7  |     //page.route('**/*.{jpg,png,jpeg}',route=> route.abort());
  8  |     await page.goto("https://rahulshettyacademy.com/angularpractice/");
  9  |     await page.getByLabel("Check me out if you Love IceCreams!").click();
  10 |     await page.getByLabel("Employed").check();
  11 |     await page.getByLabel("Gender").selectOption("Male");
  12 |     await page.getByPlaceholder("Password").fill("abc123");
  13 |     await page.getByRole("button", { name: 'Submit' }).click();
  14 |     console.log(await page.getByText("Success! The Form has been submitted successfully!."));
  15 |     //5 seconds default timeout for expect assertions --(timeout:10000) Step level
  16 |     await expect(await page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({ timeout: 10_000 });
  17 |     //Test level
  18 |     await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible();
  19 |     await page.waitForTimeout(2000);
  20 |     await page.getByRole("link", { name: "Shop" }).click({ timeout: 15000 });
> 21 |     await slowExpect(page.locator(".my-4").first()).toHaveText("Shop");
     |                                                     ^ Error: expect(locator).toHaveText(expected) failed
  22 |     //2more
  23 |     await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();
  24 | });
```