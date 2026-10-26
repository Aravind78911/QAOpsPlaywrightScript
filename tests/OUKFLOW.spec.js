const { test } = require('@playwright/test')

test('Browser Playwright test', async ({ browser }) => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  const floatingInput = page.locator("#floatingInput");
  const floatingPassword = page.locator("#floatingPassword");
  const Loginbutton = page.locator('a:has-text("Login")');
  await page.goto('https://oukdev.samvaadpro.com/login');
  console.log(await page.title(""));
  //Using Fill method
  await floatingInput.fill("");
  await floatingInput.fill("adminuser@gmail.com");
  await floatingPassword.fill("");
  await floatingPassword.fill("Welcome@123");
  await Loginbutton.click();

  page.on('dialog', async dialog => {
    console.log(dialog.message());

    if (dialog.type() === 'confirm') {
      await dialog.accept();

    } else {
      await dialog.dismiss();
    }
  });

  await page.waitForTimeout(5000);
  await page.mouse.wheel(0, 500);

  const CurriculumSetup = page.locator(".fa-book.fas");

  await CurriculumSetup.waitFor({ state: "visible", timeout: 10000 });
  await CurriculumSetup.scrollIntoViewIfNeeded();
  await CurriculumSetup.click();
  await page.locator('a').filter({ hasText: 'School' }).first().click();
  const Addbutton = page.locator("button.btn.btn-primary");
  await Addbutton.click();
  await page.waitForTimeout(2000);
  await page.locator('input[formcontrolname="MCODE"]').fill('SSD88');
  await page.locator('input[formcontrolname="MNAME"]').fill('Saimedha School');
  await page.locator('button:has-text("Save")').click();
  await page.waitForTimeout(5000);
});

