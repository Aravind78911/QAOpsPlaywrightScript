# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.js >> @Web Client App login for ADIDAS ORIGINAL
- Location: tests\ClientAppPO.spec.js:8:5

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
      - button " Cart 1"
    - listitem:
      - button "Sign Out"
- heading "My Cart" [level=1]
- button "Continue Shopping❯"
- list:
  - listitem:
    - paragraph: "#6960eae1c941646b7a8b3ed3"
    - heading "ADIDAS ORIGINAL" [level=3]
    - paragraph: MRP $ 11500
    - paragraph: In Stock
    - paragraph: $ 11500
    - button "Buy Now❯"
    - button "❯"
- list:
  - listitem: Subtotal $11500
  - listitem: Total $11500
  - listitem:
    - button "Checkout❯"
```

# Test source

```ts
  1  | 
  2  | const { expect } = require('@playwright/test');
  3  | 
  4  | class CheckOutPage {
  5  |     constructor(page) {
  6  |         this.page = page;
  7  | 
  8  |         this.productTitle = page.locator("h3:has-text('ZARA COAT 3')");
  9  |         this.checkoutButton = page.getByText("Checkout", { exact: true });
  10 |         this.countryInput = page.locator("[placeholder*='Country']");
  11 |         this.countryDropdown = page.locator(".ta-results");
  12 | 
  13 |         // Locate the email input specifically
  14 |         /* this.emailText = this.page.getByLabel('aithaaravind481@gmail.com');*/
  15 | 
  16 |         this.submitButton = page.locator(".action__submit");
  17 |     }
  18 | 
  19 |     async verifyProductDisplayed() {
> 20 |         await expect(this.productTitle).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  21 |     }
  22 | 
  23 |     async clickCheckout() {
  24 |         await this.checkoutButton.click();
  25 |     }
  26 | 
  27 |     async selectCountry(country) {
  28 |         await this.countryInput.pressSequentially("ind", { delay: 150 });
  29 | 
  30 |         await this.countryDropdown.waitFor({ state: "visible" });
  31 | 
  32 |         const options = this.countryDropdown.locator("button");
  33 |         const count = await options.count();
  34 | 
  35 |         for (let i = 0; i < count; i++) {
  36 |             const text = (await options.nth(i).innerText()).trim();
  37 | 
  38 |             if (text === country) {
  39 |                 await options.nth(i).click();
  40 |                 return;
  41 |             }
  42 |         }
  43 | 
  44 |         throw new Error(`Country not found: ${country}`);
  45 |     }
  46 | 
  47 |     /*async verifyEmail(email = 'aithaaravind481@gmail.com') {
  48 |         await expect(this.emailText).toHaveValue(email);
  49 |     }*/
  50 | 
  51 |     async submitOrder() {
  52 |         await this.submitButton.click();
  53 |     }
  54 | }
  55 | 
  56 | module.exports = { CheckOutPage };
```