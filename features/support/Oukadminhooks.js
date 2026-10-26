const { Before, BeforeStep, AfterStep, After, Status } = require("@cucumber/cucumber");
const { OUKPOManager } = require('../../pageobjects/OUKPOManager');
const { playwright, chromium } = require('@playwright/test');



Before({tags: "@Regression"},async function () {

    this.browser = await chromium.launch({
        headless: false
    });

    this.browserContext = await this.browser.newContext();
    this.page = await this.browserContext.newPage();
    this.oukpoManager = new OUKPOManager(this.page);

})

BeforeStep(function () {


})


AfterStep(async function (result) {

    if (result.Status === Status.FAILED) {
        return await page.screenshot({ path: 'screenshot2.png' });
    }
})

After(function () {

    console.log("I am last to Execute");

})