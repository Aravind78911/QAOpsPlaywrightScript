const { test, expect } = require('@playwright/test');
const { OukAdminLoginPage } = require('../pageobjects/OukAdminLoginPage');
const { CurriculumSetupPage } = require('../pageobjects/CurriculumSetupPage');

class OUKPOManager
{
    constructor(page)
    {
     this.page = page;
     this.oukadminloginpage = new OukAdminLoginPage(this.page);
     this.curriculumsetuppage = new CurriculumSetupPage(this.page);
    }
    getOukAdminLoginPage()
    {
        return this.oukadminloginpage;
    }
    getCurriculumSetupPage()
    {
        return this.curriculumsetuppage;
    }
}
module.exports = {OUKPOManager};