# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.ts >> @Webs Client App login for ZARA COAT 3
- Location: tests\ClientAppPO.spec.ts:10:8

# Error details

```
TypeError: Cannot read properties of undefined (reading 'includes')
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e5]:
      - generic [ref=e7]:
        - link "Automation Automation Practice":
          - /url: ""
          - generic [ref=e8] [cursor=pointer]:
            - heading "Automation" [level=3] [ref=e9]
            - paragraph [ref=e10]: Automation Practice
      - text: 
      - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
        - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
      - list [ref=e12]:
        - listitem [ref=e13] [cursor=pointer]:
          - button " HOME" [ref=e14]:
            - generic [ref=e15]: 
            - text: HOME
        - listitem
        - listitem [ref=e16] [cursor=pointer]:
          - button " ORDERS" [ref=e17]:
            - generic [ref=e18]: 
            - text: ORDERS
        - listitem [ref=e19] [cursor=pointer]:
          - button " Cart" [ref=e20]:
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22] [cursor=pointer]:
          - button "Sign Out" [ref=e23]:
            - generic [aria-hidden] [ref=e24]: 
            - text: Sign Out
    - generic [ref=e25]:
      - heading "Your Orders" [level=1] [ref=e26]
      - table [ref=e27]:
        - rowgroup [ref=e28]:
          - row [ref=e29]:
            - columnheader "Order Id" [ref=e30]
            - columnheader "Product Image" [ref=e31]
            - columnheader "Name" [ref=e32]
            - columnheader "Price" [ref=e33]
            - columnheader "Ordered Date" [ref=e34]
            - columnheader "View" [ref=e35]
            - columnheader "Delete" [ref=e36]
        - rowgroup [ref=e37]:
          - row [ref=e38]:
            - rowheader "6ad7340b93b084c41f5bb26b" [ref=e39]
            - cell [ref=e40]
            - cell "ZARA COAT 3" [ref=e42]
            - cell "$ 11500" [ref=e43]
            - cell "Tue Oct 20" [ref=e44]
            - cell [ref=e45]:
              - button "View" [ref=e46] [cursor=pointer]
            - cell [ref=e47]:
              - button "Delete" [ref=e48] [cursor=pointer]
          - row [ref=e49]:
            - rowheader "6ad5e38b93b084c41f594428" [ref=e50]
            - cell [ref=e51]
            - cell "ZARA COAT 3" [ref=e53]
            - cell "$ 11500" [ref=e54]
            - cell "Mon Oct 19" [ref=e55]
            - cell [ref=e56]:
              - button "View" [ref=e57] [cursor=pointer]
            - cell [ref=e58]:
              - button "Delete" [ref=e59] [cursor=pointer]
          - row [ref=e60]:
            - rowheader "6ad5e1c093b084c41f593f83" [ref=e61]
            - cell [ref=e62]
            - cell "ZARA COAT 3" [ref=e64]
            - cell "$ 11500" [ref=e65]
            - cell "Mon Oct 19" [ref=e66]
            - cell [ref=e67]:
              - button "View" [ref=e68] [cursor=pointer]
            - cell [ref=e69]:
              - button "Delete" [ref=e70] [cursor=pointer]
          - row [ref=e71]:
            - rowheader "6ad5e1a993b084c41f593f36" [ref=e72]
            - cell [ref=e73]
            - cell "ZARA COAT 3" [ref=e75]
            - cell "$ 11500" [ref=e76]
            - cell "Mon Oct 19" [ref=e77]
            - cell [ref=e78]:
              - button "View" [ref=e79] [cursor=pointer]
            - cell [ref=e80]:
              - button "Delete" [ref=e81] [cursor=pointer]
          - row [ref=e82]:
            - rowheader "6ad5e0d993b084c41f593cd6" [ref=e83]
            - cell [ref=e84]
            - cell "ZARA COAT 3" [ref=e86]
            - cell "$ 11500" [ref=e87]
            - cell "Mon Oct 19" [ref=e88]
            - cell [ref=e89]:
              - button "View" [ref=e90] [cursor=pointer]
            - cell [ref=e91]:
              - button "Delete" [ref=e92] [cursor=pointer]
          - row [ref=e93]:
            - rowheader "6ad5b0d593b084c41f58c0fe" [ref=e94]
            - cell [ref=e95]
            - cell "ZARA COAT 3" [ref=e97]
            - cell "$ 11500" [ref=e98]
            - cell "Mon Oct 19" [ref=e99]
            - cell [ref=e100]:
              - button "View" [ref=e101] [cursor=pointer]
            - cell [ref=e102]:
              - button "Delete" [ref=e103] [cursor=pointer]
          - row [ref=e104]:
            - rowheader "6ad5b06293b084c41f58c036" [ref=e105]
            - cell [ref=e106]
            - cell "ZARA COAT 3" [ref=e108]
            - cell "$ 11500" [ref=e109]
            - cell "Mon Oct 19" [ref=e110]
            - cell [ref=e111]:
              - button "View" [ref=e112] [cursor=pointer]
            - cell [ref=e113]:
              - button "Delete" [ref=e114] [cursor=pointer]
      - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
    - generic [ref=e117]:
      - button "Go Back to Shop" [ref=e118] [cursor=pointer]
      - button "Go Back to Cart" [ref=e119] [cursor=pointer]
  - generic "Order Placed Successfully" [ref=e121]
```

# Test source

```ts
  1  | import {test,expect } from '@playwright/test';
  2  | import { customTest } from '../Utils_ts/test-base';
  3  | import { POManager } from '../pageobjects_ts/POManager';
  4  | import placeorderTestData from "../Utils/placeorderTestData.json";
  5  | const dataset = placeorderTestData;
  6  | //const dataset = JSON.parse(JSON.stringify("../Utils/placeorderTestData.json"));
  7  | 
  8  | //first method
  9  | for (const data of dataset) {
  10 |    test(`@Webs Client App login for ${data.productName}`, async ({ page }) => {
  11 |         //js file- Login js, DashboardPage
  12 |         const poManager = new POManager(page);
  13 |         test.setTimeout(30000);
  14 |         const products = page.locator(".card-body");
  15 |         const loginPage = poManager.getLoginPage();
  16 |         await loginPage.goTo();
  17 |         await loginPage.validLogin(data.email, data.password);
  18 |         const dashboardPage = poManager.getDashboardPage();
  19 |         await dashboardPage.searchProductAddCart(data.productName);
  20 |         await dashboardPage.navigateToCart();
  21 |         const checkoutPage = poManager.getCheckOutPage();
  22 |         await checkoutPage.verifyProductDisplayed(data.productName);
  23 |         //await page.pause();
  24 |         await expect(
  25 |             page.locator("h3:has-text('ZARA COAT 3')")
  26 |         ).toBeVisible();
  27 | 
  28 |         await checkoutPage.clickCheckout();
  29 | 
  30 |         await checkoutPage.selectCountry('India');
  31 | 
  32 |         /*await checkoutPage.verifyEmail(email);*/
  33 | 
  34 |         await checkoutPage.submitOrder();
  35 | 
  36 |         const OrderHistory = poManager.getOrderHistory();
  37 |         
  38 |         await page.locator("button[routerlink*='myorders']").click();
  39 |         await page.locator("tbody").waitFor();
  40 |         const rows = await page.locator("tbody tr");
  41 | 
  42 |  
  43 |         for (let i = 0; i < await rows.count(); ++i) {
  44 |             const rowOrderId = await rows.nth(i).locator("th").textContent();
  45 |             let orderId:any;
> 46 |             if (orderId.includes(rowOrderId)) {
     |                         ^ TypeError: Cannot read properties of undefined (reading 'includes')
  47 |                 await rows.nth(i).locator("button").first().click();
  48 |                 break;
  49 |             }
  50 |         }
  51 |         let orderId:any;
  52 |         const orderIdDetails = await page.locator(".col-text").textContent();
  53 |         expect(orderId.includes(orderIdDetails)).toBeTruthy();
  54 |     })
  55 | };
  56 | //second method
  57 | customTest(`Client App`, async ({ page, testDataForOrder }) => {
  58 |     //js file- Login js, DashboardPage
  59 |     const poManager = new POManager(page);
  60 |     test.setTimeout(30000);
  61 |     const products = page.locator(".card-body");
  62 |     const loginPage = poManager.getLoginPage();
  63 |     await loginPage.goTo();
  64 |     await loginPage.validLogin(testDataForOrder.email, testDataForOrder.password);
  65 |     const dashboardPage = poManager.getDashboardPage();
  66 |     await dashboardPage.searchProductAddCart(testDataForOrder.productName);
  67 |     await dashboardPage.navigateToCart();
  68 |     const checkoutPage = poManager.getCheckOutPage();
  69 |     await checkoutPage.verifyProductDisplayed(testDataForOrder.productName);
  70 |     //await page.pause();
  71 |     await expect(
  72 |         page.locator("h3:has-text('ZARA COAT 3')")
  73 |     ).toBeVisible();
  74 | 
  75 |     await checkoutPage.clickCheckout();
  76 | });
  77 | 
  78 | 
```