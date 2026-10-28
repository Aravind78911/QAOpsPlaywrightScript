const { test, expect } = require('@playwright/test');
const { OUKPOManager } = require('../pageobjects/OUKPOManager');
const { logintest } = require('../Utils/oukadminfixtures');
const oukadmindata = JSON.parse(JSON.stringify(require('../Utils/oukadminloginandcurriculumsetupTestData.json')));
//first method
for (const oukadmin of oukadmindata) {
  test(`ouk admin login for ${oukadmin.emailaddress}`, async ({ page }) => {
    /*const browserContext = await browser.newContext();
    const page = await browserContext.newPage();*/
    test.setTimeout(60000);
    const oukpoManager = new OUKPOManager(page);
    const oukadminloginPage = oukpoManager.getOukAdminLoginPage();
    await oukadminloginPage.goTo();
    await oukadminloginPage.validLogin(oukadmin.emailaddress, oukadmin.password);
    const curriculumSetup = oukpoManager.getCurriculumSetupPage();
    await curriculumSetup.addCurriculumSetupSchoolDetails(oukadmin.code, oukadmin.schoolname);
  });
}
//second method
logintest(`ouk admin login`, async ({ page, testadminflowdata }) => {
  /*const browserContext = await browser.newContext();
  const page = await browserContext.newPage();*/
  test.setTimeout(60000);
  const oukpoManager = new OUKPOManager(page);
  const oukadminloginPage = oukpoManager.getOukAdminLoginPage();
  await oukadminloginPage.goTo();
  await oukadminloginPage.validLogin(testadminflowdata.emailaddress, testadminflowdata.password);
  const curriculumSetup = oukpoManager.getCurriculumSetupPage();
  await curriculumSetup.addCurriculumSetupSchoolDetails(testadminflowdata.code, testadminflowdata.schoolname);
});

