# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: OUKAdminFlowPO.spec.js >> ouk admin login for adminrakesh@mailinator.com
- Location: tests\OUKAdminFlowPO.spec.js:7:3

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('span[href="#CurriculumSetup"] i.fa-book, .fa-book.fas').first()

```

# Page snapshot

```yaml
- generic [ref=e11]:
  - generic [ref=e12]:
    - link [ref=e14]:
      - /url: "javascript:"
    - heading "Welcome to Open University of Kenya" [level=6] [ref=e15]
    - heading "Login" [level=5] [ref=e16]
    - generic [ref=e18]:
      - generic [ref=e19]:
        - textbox "OUK Email" [ref=e20]: adminrakesh@mailinator.com
        - generic: OUK Email
      - generic [ref=e21]:
        - generic [ref=e22] [cursor=pointer]: 
        - textbox "Password" [ref=e24]: Welcome@123
        - generic: Password
    - generic [ref=e25] [cursor=pointer]: Login
  - generic [ref=e27]:
    - text: Forgot password?
    - generic [ref=e28] [cursor=pointer]: Click Here
```

# Test source

```ts
  1  | class CurriculumSetupPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  | 
  5  |         this.curriculumsetup = page.locator('span[href="#CurriculumSetup"] i.fa-book, .fa-book.fas').first();
  6  |         this.school = page.locator('a').filter({ hasText: 'School' });
  7  |         this.addbutton = page.locator('button.btn-primary, button:has(.fa-plus)').first();
  8  |         this.code = page.locator('input[formcontrolname="MCODE"]');
  9  |         this.schoolname = page.locator('input[formcontrolname="MNAME"]');
  10 |         this.savebutton = page.getByRole('button', { name: 'Save', exact: true });
  11 |     }
  12 | 
  13 |     async addCurriculumSetupSchoolDetails(code, schoolname) {
> 14 |         await this.curriculumsetup.click();
     |                                    ^ Error: locator.click: Test timeout of 60000ms exceeded.
  15 |         await this.school.first().click();
  16 |         await this.addbutton.click();
  17 |         await this.code.fill(code);
  18 |         await this.schoolname.fill(schoolname);
  19 |         await this.savebutton.click();
  20 |     }
  21 | }
  22 | module.exports = { CurriculumSetupPage };
```