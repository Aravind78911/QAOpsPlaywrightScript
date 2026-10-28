# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.ts >> @Webs Client App login for ZARA COAT 3
- Location: tests\ClientAppPO.spec.ts:9:8

# Error details

```
TypeError: Cannot read properties of undefined (reading 'includes')
```

# Page snapshot

```yaml
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
          - rowheader "6ae08426a90a419aa82dd090" [ref=e39]
          - cell [ref=e40]
          - cell "ZARA COAT 3" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Tue Oct 27" [ref=e44]
          - cell [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row [ref=e49]:
          - rowheader "6ae08420a90a419aa82dd056" [ref=e50]
          - cell [ref=e51]
          - cell "ZARA COAT 3" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Tue Oct 27" [ref=e55]
          - cell [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row [ref=e60]:
          - rowheader "6ae08420a90a419aa82dd04f" [ref=e61]
          - cell [ref=e62]
          - cell "ZARA COAT 3" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Tue Oct 27" [ref=e66]
          - cell [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row [ref=e71]:
          - rowheader "6ad7340b93b084c41f5bb26b" [ref=e72]
          - cell [ref=e73]
          - cell "ZARA COAT 3" [ref=e75]
          - cell "$ 11500" [ref=e76]
          - cell "Tue Oct 20" [ref=e77]
          - cell [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row [ref=e82]:
          - rowheader "6ad5e38b93b084c41f594428" [ref=e83]
          - cell [ref=e84]
          - cell "ZARA COAT 3" [ref=e86]
          - cell "$ 11500" [ref=e87]
          - cell "Mon Oct 19" [ref=e88]
          - cell [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row [ref=e93]:
          - rowheader "6ad5e1c093b084c41f593f83" [ref=e94]
          - cell [ref=e95]
          - cell "ZARA COAT 3" [ref=e97]
          - cell "$ 11500" [ref=e98]
          - cell "Mon Oct 19" [ref=e99]
          - cell [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row [ref=e104]:
          - rowheader "6ad5e1a993b084c41f593f36" [ref=e105]
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
```

# Test source

```ts
  1  | import {test,expect } from '@playwright/test';
  2  | import { customTest } from '../Utils_ts/test-base';
  3  | import { POManager } from '../pageobjects_ts/POManager';
  4  | import placeorderTestData from "../Utils/placeorderTestData.json";
  5  | const dataset = placeorderTestData;
  6  | 
  7  | //first method
  8  | for (const data of dataset) {
  9  |    test(`@Webs Client App login for ${data.productName}`, async ({ page }) => {
  10 |         //js file- Login js, DashboardPage
  11 |         const poManager = new POManager(page);
  12 |         test.setTimeout(30000);
  13 |         const products = page.locator(".card-body");
  14 |         const loginPage = poManager.getLoginPage();
  15 |         await loginPage.goTo();
  16 |         await loginPage.validLogin(data.email, data.password);
  17 |         const dashboardPage = poManager.getDashboardPage();
  18 |         await dashboardPage.searchProductAddCart(data.productName);
  19 |         await dashboardPage.navigateToCart();
  20 |         const checkoutPage = poManager.getCheckOutPage();
  21 |         await checkoutPage.verifyProductDisplayed(data.productName);
  22 |         //await page.pause();
  23 |         await expect(
  24 |             page.locator("h3:has-text('ZARA COAT 3')")
  25 |         ).toBeVisible();
  26 | 
  27 |         await checkoutPage.clickCheckout();
  28 | 
  29 |         await checkoutPage.selectCountry('India');
  30 | 
  31 |         /*await checkoutPage.verifyEmail(email);*/
  32 | 
  33 |         await checkoutPage.submitOrder();
  34 | 
  35 |         const OrderHistory = poManager.getOrderHistory();
  36 |         
  37 |         await page.locator("button[routerlink*='myorders']").click();
  38 |         await page.locator("tbody").waitFor();
  39 |         const rows = await page.locator("tbody tr");
  40 | 
  41 |  
  42 |         for (let i = 0; i < await rows.count(); ++i) {
  43 |             const rowOrderId = await rows.nth(i).locator("th").textContent();
  44 |             let orderId:any;
> 45 |             if (orderId.includes(rowOrderId)) {
     |                         ^ TypeError: Cannot read properties of undefined (reading 'includes')
  46 |                 await rows.nth(i).locator("button").first().click();
  47 |                 break;
  48 |             }
  49 |         }
  50 |         let orderId:any;
  51 |         const orderIdDetails = await page.locator(".col-text").textContent();
  52 |         expect(orderId.includes(orderIdDetails)).toBeTruthy();
  53 |     })
  54 | };
  55 | //second method
  56 | customTest(`Client App`, async ({ page, testDataForOrder }) => {
  57 |     //js file- Login js, DashboardPage
  58 |     const poManager = new POManager(page);
  59 |     test.setTimeout(30000);
  60 |     const products = page.locator(".card-body");
  61 |     const loginPage = poManager.getLoginPage();
  62 |     await loginPage.goTo();
  63 |     await loginPage.validLogin(testDataForOrder.email, testDataForOrder.password);
  64 |     const dashboardPage = poManager.getDashboardPage();
  65 |     await dashboardPage.searchProductAddCart(testDataForOrder.productName);
  66 |     await dashboardPage.navigateToCart();
  67 |     const checkoutPage = poManager.getCheckOutPage();
  68 |     await checkoutPage.verifyProductDisplayed(testDataForOrder.productName);
  69 |     //await page.pause();
  70 |     await expect(
  71 |         page.locator("h3:has-text('ZARA COAT 3')")
  72 |     ).toBeVisible();
  73 | 
  74 |     await checkoutPage.clickCheckout();
  75 | });
  76 | 
  77 | 
```