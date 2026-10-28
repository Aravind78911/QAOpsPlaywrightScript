import { test } from '@playwright/test';
const { SignupPage } = require('../pageobjects/SignupPage');
const {signuptest} = require('../Utils/ouksignnupfixtures');

const signupData = JSON.parse(JSON.stringify(require('../Utils/ouksignupTestData.json')))
for (const signup of signupData) {
    test(`Signupdetails for ${signup.email}`, async ({ page }) => {
        /*const browserContext = await browser.newContext();
        const page = await browserContext.newPage();*/
        test.setTimeout(30000);
        const signupPage =  SignupPage(page);
        await signupPage.goTo("");
        await signupPage.validSignupdetails(signup.email, signup.password, signup.retypepassword, signup.program, signup.text, signup.gender, signup.firstname, signup.lastname, signup.passportnumber, signup.dod, signup.dom, signup.doy, signup.countryofresidence, signup.phonenumber, signup.disability, signup.placeofbirth, signup.county);
    });
}


    signuptest(`Signupdetails`, async ({ page,testSignupdetails }) => {
        /*const browserContext = await browser.newContext();
        const page = await browserContext.newPage();*/
        test.setTimeout(30000);
        const signupPage = new SignupPage(page);
        await signupPage.goTo("");
        await signupPage.validSignupdetails(testSignupdetails.email, testSignupdetails.password, testSignupdetails.retypepassword, testSignupdetails.program, testSignupdetails.text, testSignupdetails.gender, testSignupdetails.firstname, testSignupdetails.lastname, testSignupdetails.passportnumber, testSignupdetails.dod, testSignupdetails.dom, testSignupdetails.doy, testSignupdetails.countryofresidence, testSignupdetails.phonenumber, testSignupdetails.disability, testSignupdetails.placeofbirth, testSignupdetails.county);
        //ouksignup test fixed tests
    });
