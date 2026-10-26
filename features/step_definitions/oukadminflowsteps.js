const { When, Then, Given } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { OUKPOManager } = require('../../pageobjects/OUKPOManager');

Given(
    'I log into the OUK application with {string} and {string}',
    { timeout: 100 * 1000 },
    async function (emailaddress, password) {

        const oukadminloginPage = this.oukpoManager.getOukAdminLoginPage();

        await oukadminloginPage.goTo();
        await oukadminloginPage.validLogin(emailaddress, password);

    }
);

When(
    'admin enters valid school details {string} and {string}',
    { timeout: 100 * 1000 },
    async function (code, schoolname) {

        const curriculumSetup =
            this.oukpoManager.getCurriculumSetupPage();

        await curriculumSetup.addCurriculumSetupSchoolDetails(
            code,
            schoolname
        );
    }
);

Then(
    'the school should be created successfully',
    { timeout: 100 * 1000 },
    async function () {

        await expect(
            this.page.getByText('School created successfully')
        ).toBeVisible({ timeout: 15 * 1000 });
    }
);


Given('a login to Ecommerce3 application with {string} and {string}', async function (username,password) {
    await this.page.goto("https://rahulshettyacademy.com/angularpractice/");
    await this.page.getByLabel("Check me out if you Love IceCreams!").click();
    await this.page.getByLabel("Employed").check();
    await this.page.getByLabel("Gender").selectOption("Male");
    await this.page.getByPlaceholder("Password").fill("abc123");
});

Then('Verify Error message is displayed', async function () {
    await this.page.getByRole("button", { name: 'Submit' }).click();
});
