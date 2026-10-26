const { When, Then, Given } = require('@cucumber/cucumber');
const { SignupPage } = require('../../pageobjects/SignupPage');
const { expect, chromium } = require('@playwright/test');
const playwright = require('@playwright/test');
Given('I open the OUK application', { timeout: 60000 }, async function () {
  const { chromium } = require('@playwright/test');

  this.browser = await chromium.launch({
    headless: false
  });

  this.browserContext = await this.browser.newContext();
  this.page = await this.browserContext.newPage();

  this.signupPage = new SignupPage(this.page);

  await this.signupPage.goTo();
});

When('I click on the Signup button', async function () {
  await this.page.locator('.lgn-btn', {
    hasText: 'Signup'
  }).click();
});

Then('the Signup page should be displayed', async function () {
  await expect(
    this.page.getByPlaceholder('Email')
  ).toBeVisible();
});

When('I enter valid signup details {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string} and {string}', { timeout: 60000 }, async function (email, password, retypepassword, program, text, gender, firstname, lastname, passportnumber, dod, dom, doy, countryofresidence, phonenumber, disability, placeofbirth, county) {
  await this.signupPage.validSignupdetails(email, password, retypepassword, program, text, gender, firstname, lastname, passportnumber, dod, dom, doy, countryofresidence, phonenumber, disability, placeofbirth, county);
});

When('I submit the signup form', function () {
  this.createaccount = page.getByRole("button", { name: ' Create Account ' });
});

Then('the account should be created successfully', { timeout: 30000 }, async function () {
  await expect(
    this.page.getByText('Account created successfully')
  ).toBeVisible({ timeout: 10000 });
});

