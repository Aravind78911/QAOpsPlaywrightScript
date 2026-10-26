const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { CheckOutPage } = require('./CheckOutPage');
class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.checkOutPage = new CheckOutPage(this.page);

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
}
module.exports = {POManager};