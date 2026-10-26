import { test, expect, Page } from '@playwright/test';
import { OukAdminLoginPage } from "./OukAdminLoginPage";
import { CurriculumSetupPage } from "./CurriculumSetupPage";

export class OUKPOManager {
    page: Page;
    oukadminloginpage: OukAdminLoginPage;
    curriculumsetuppage: CurriculumSetupPage;
    constructor(page: Page) {
        this.page = page;
        this.oukadminloginpage = new OukAdminLoginPage(this.page);
        this.curriculumsetuppage = new CurriculumSetupPage(this.page);
    }
    getOukAdminLoginPage() {
        return this.oukadminloginpage;
    }
    getCurriculumSetupPage() {
        return this.curriculumsetuppage;
    }
}
