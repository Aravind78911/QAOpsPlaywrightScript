import { Locator, Page } from "@playwright/test";

export class CurriculumSetupPage {
    
        page: Page;
        curriculumsetup: Locator;
        school: Locator;
        addbutton: Locator;
        code : Locator;
        schoolname : Locator;
        savebutton : Locator;

    constructor(page: Page) {
        this.page = page;

        this.curriculumsetup = page.locator('span[href="#CurriculumSetup"] i.fa-book, .fa-book.fas').first();
        this.school = page.locator('a').filter({ hasText: 'School' });
        this.addbutton = page.locator('button.btn-primary, button:has(.fa-plus)').first();
        this.code = page.locator('input[formcontrolname="MCODE"]');
        this.schoolname = page.locator('input[formcontrolname="MNAME"]');
        this.savebutton = page.getByRole('button', { name: 'Save', exact: true });
    }

    async addCurriculumSetupSchoolDetails(code:string, schoolname:string) {
        await this.curriculumsetup.click();
        await this.school.first().click();
        await this.addbutton.click();
        await this.code.fill(code);
        await this.schoolname.fill(schoolname);
        await this.savebutton.click();
    }
}
