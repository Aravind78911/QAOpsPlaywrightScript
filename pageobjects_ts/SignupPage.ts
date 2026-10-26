import { Locator, Page } from "@playwright/test";

export class SignupPage {
    page: Page;
    signupbutton: Locator;
    email: Locator;
    password: Locator;
    retypepassword: Locator;
    program: Locator;
    text: Locator;
    gender: Locator;
    firstname: Locator;
    lastname: Locator;
    passportnumber: Locator;
    dob: Locator;
    dod: Locator;
    dom: Locator;
    doy: Locator;
    countryofresidence: Locator;
    phonenumber: Locator;
    disability: Locator;
    placeofbirth: Locator;
    county: Locator;
    pleaseconfirm: Locator;
    createaccount: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signupbutton = page.locator('.lgn-btn', { hasText: 'Signup' });
        this.email = page.getByPlaceholder("Email");
        this.password = page.getByRole('textbox', { name: "Password", exact: true });
        this.retypepassword = page.getByRole('textbox', { name: "Retype Password" });
        this.program = page.getByPlaceholder("Select Program");
        this.text = page.getByText("BOSS - Bachelor of Science (B.Sc.) – Science");
        this.gender = page.locator('select[formcontrolname = "Gender"]');
        this.firstname = page.getByPlaceholder("First Name(s)");
        this.lastname = page.getByPlaceholder("Last Name");
        this.passportnumber = page.getByPlaceholder("Number");
        this.dob = page.locator(".ouk-dob-fields");
        this.dod = this.dob.locator('.ouk-select').nth(0);
        this.dom = this.dob.locator('.ouk-select').nth(1);
        this.doy = this.dob.locator('.ouk-select').nth(2);
        this.countryofresidence = page.getByPlaceholder("Select a country");
        this.phonenumber = page.locator("#floatingInput");
        this.disability = page.getByLabel("No");
        this.placeofbirth = page.getByPlaceholder("Place of birth");
        this.county = page.locator('select[formcontrolname="COUNTIES_ID"]');
        this.pleaseconfirm = page.locator("#confirm");
        this.createaccount = page.getByRole("button", { name: ' Create Account ' });

    }
    async goTo(url:string) {
        await this.page.goto("https://oukdevapplicant.samvaadpro.com/login");
    }
    async validSignupdetails(email: string, password: string, retypepassword: string, program: string, text: string, gender: string, firstname: string, lastname: string, passportnumber: string, dod: string, dom: string, doy: string, countryofresidence: string, phonenumber: string, disability: string, placeofbirth: string, county: string) {
        await this.signupbutton.click();

        await this.email.fill(email);
        await this.password.fill(password);
        await this.retypepassword.fill(retypepassword);
        await this.program.click();
        await this.text.click();
        await this.gender.selectOption(gender);
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.passportnumber.fill(passportnumber);
        await this.dod.selectOption(dod);
        await this.dom.selectOption(dom);
        await this.doy.selectOption(doy);
        await this.countryofresidence.fill(countryofresidence);
        await this.phonenumber.fill(phonenumber);
        await this.disability.click();
        await this.placeofbirth.fill(placeofbirth);
        await this.county.selectOption(county);
        await this.pleaseconfirm.check();
        await this.createaccount.click();
        await this.page.waitForTimeout(5000);

    }
}
