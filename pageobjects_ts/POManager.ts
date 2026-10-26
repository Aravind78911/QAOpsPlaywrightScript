import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";
import { CheckOutPage } from "./CheckOutPage";
import { OrderHistory } from "./OrderHistory";
import { Page } from '@playwright/test';
export class POManager {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    checkOutPage: CheckOutPage;
    orderhistory: OrderHistory;
    page: Page;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.checkOutPage = new CheckOutPage(this.page);
        this.orderhistory = new OrderHistory(this.page);

    }

    getLoginPage() {

        return this.loginPage;

    }
    getDashboardPage() {

        return this.dashboardPage;

    }
    getCheckOutPage() {

        return this.checkOutPage;

    }
    getOrderHistory() {

        return this.orderhistory;
    }
}
