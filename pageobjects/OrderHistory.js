const {  expect } = require('@playwright/test');

class OrderHistory {
    constructor(page) {
        this.ordertext = page.locator(".hero-primary");
        this.orderid = page.locator(".em-spacer-1 .ng-star-inserted");
        this.myorders = page.locator("button[routerlink*='myorders']");
        this.tbody = page.locator("tbody");
        this.rows = page.locator("tbody tr");
        this.orderIdDetails =  page.locator(".col-text");

    }

    async getOrderHistory() {
        await (expect(this.ordertext.toHaveText(" Thankyou for the order. ")));
        const orderId = await this.orderid.textContent();
        console.log(orderId);
        await this.myorders.click();
        await this.tbody.waitFor();
        const rows = await this.rows;


        for (let i = 0; i < await this.rows.count(); ++i) {
            const rowOrderId = await this.rows.nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await this.rows.nth(i).locator("button").first().click();
                break;
            }
        }
        const orderIdDetails = this.orderIdDetails.textContent();
            expect(orderId.includes(orderIdDetails)).toBeTruthy();

    }
}
module.exports = {OrderHistory};