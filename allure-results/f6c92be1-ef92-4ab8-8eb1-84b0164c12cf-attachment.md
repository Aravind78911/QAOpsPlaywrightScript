# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.ts >> @Webs Client App login for ADIDAS ORIGINAL
- Location: tests\ClientAppPO.spec.ts:9:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h3:has-text(\'ZARA COAT 3\')')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('h3:has-text(\'ZARA COAT 3\')') with timeout 5000ms
  - waiting for locator('h3:has-text(\'ZARA COAT 3\')')

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart"
    - listitem:
      - button "Sign Out"
- heading "My Cart" [level=1]
- button "Continue Shopping❯"
- heading "No Products in Your Cart !" [level=1]
```

# Test source

```ts
  1  | import { expect, Locator, Page } from '@playwright/test';
  2  | export class CheckOutPage {
  3  |     productTitle: Locator;
  4  |     checkoutButton: Locator;
  5  |     countryInput: Locator;
  6  |     countryDropdown: Locator;
  7  |     page: Page;
  8  |     submitButton: Locator;
  9  | 
  10 |     constructor(page: Page) {
  11 |         this.page = page;
  12 | 
  13 |         this.productTitle = page.locator("h3:has-text('ZARA COAT 3')");
  14 |         this.checkoutButton = page.getByText("Checkout", { exact: true });
  15 |         this.countryInput = page.locator("[placeholder*='Country']");
  16 |         this.countryDropdown = page.locator(".ta-results");
  17 | 
  18 |         // Locate the email input specifically
  19 |         /* this.emailText = this.page.getByLabel('aithaaravind481@gmail.com');*/
  20 | 
  21 |         this.submitButton = page.locator(".action__submit");
  22 |     }
  23 | 
  24 |     async verifyProductDisplayed(productName: string) {
> 25 |         await expect(this.productTitle).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  26 |     }
  27 | 
  28 |     async clickCheckout() {
  29 |         await this.checkoutButton.click();
  30 |     }
  31 | 
  32 |     async selectCountry(country: string) {
  33 |         await this.countryInput.pressSequentially("ind", { delay: 150 });
  34 | 
  35 |         await this.countryDropdown.waitFor({ state: "visible" });
  36 | 
  37 |         const options = this.countryDropdown.locator("button");
  38 |         const count = await options.count();
  39 | 
  40 |         for (let i = 0; i < count; i++) {
  41 |             const text = (await options.nth(i).innerText()).trim();
  42 | 
  43 |             if (text === country) {
  44 |                 await options.nth(i).click();
  45 |                 return;
  46 |             }
  47 |         }
  48 | 
  49 |         throw new Error(`Country not found: ${country}`);
  50 |     }
  51 | 
  52 |     /*async verifyEmail(email = 'aithaaravind481@gmail.com') {
  53 |         await expect(this.emailText).toHaveValue(email);
  54 |     }*/
  55 | 
  56 |     async submitOrder() {
  57 |         await this.submitButton.click();
  58 |     }
  59 | }
  60 | 
```