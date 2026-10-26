const { Before, After, BeforeStep, AfterStep,Status } = require("@cucumber/cucumber");
const playwright = require('@playwright/test');
const { POManager } = require('../../pageobjects/POManager');


Before(async function () {

    const browser = await playwright.chromium.launch({
        headless: false
    });
    const browserContext = await browser.newContext();
    this.page = await browserContext.newPage();
    this.poManager = new POManager(this.page);
});

BeforeStep(function () {

});

AfterStep(async function ({ result }) {

    if (result.status === Status.FAILED) {
        await this.page.screenshot({ path: 'screenshot1.png' });
    }
});

After(function () {

    console.log("I am last to execute");
});