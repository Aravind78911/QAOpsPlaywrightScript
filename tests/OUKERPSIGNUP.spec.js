import { test } from '@playwright/test';
test.skip('OUKSIGNUP', async ({ browser }) => {
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  /*test.setTimeout(120000);*/
  await page.goto("https://oukdevapplicant.samvaadpro.co/login");
  await page.locator('.lgn-btn', { hasText: 'Signup' }).click();
  await page.getByPlaceholder("Email").fill("juham@mailinator.com");
  await page.getByRole('textbox', { name: "Password", exact: true }).fill("Welcome@123");
  await page.getByRole('textbox', { name: "Retype Password" }).fill("Welcome@123");
  await page.getByPlaceholder("Select Program").click();
  await page.getByText("BOSS - Bachelor of Science (B.Sc.) – Science").click();
  await page.locator('select[formcontrolname = "Gender"]').selectOption("Male");
  await page.getByPlaceholder("First Name(s)").fill("ankith");
  await page.getByPlaceholder("Last Name").fill("goud");
  await page.getByPlaceholder("Number").fill("234567456");
  const dob = page.locator(".ouk-dob-fields");
  await dob.locator(".ouk-select").nth(0).selectOption("8");
  await dob.locator(".ouk-select").nth(1).selectOption("7");
  await dob.locator(".ouk-select").nth(2).selectOption("1995");
  await page.getByPlaceholder("Select a country").fill("India");
  await page.locator("#floatingInput").fill("9873663624");
  await page.getByLabel("No").click();
  await page.getByPlaceholder("Place of birth").fill("India");
  await page.locator(".ouk-select").selectOption("Bomet");
  await page.locator("#confirm").check();
  await page.getByRole("button", { name: ' Create Account ' }).click();
});