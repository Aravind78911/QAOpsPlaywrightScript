import { test as baseTest } from '@playwright/test';

interface TestSignupDetails {

    email: string;
    password: string;
    retypepassword: string;
    program: string;
    text: string;
    gender: string;
    firstname: string;
    lastname: string;
    passportnumber: string;
    dod: string;
    dom: string;
    doy: string;
    countryofresidence: string;
    phonenumber: string;
    disability: string;
    placeofbirth: string;
    county: string;

};



export const signupTest = baseTest.extend<{ testSignupdetails: TestSignupDetails }>(
    {
        testSignupdetails:

        {
            email: "juhap@mailinator.com",
            password: "Welcome@123",
            retypepassword: "Welcome@123",
            program: "BOSS",
            text: "BOSS - Bachelor of Science (B.Sc.) – Science",
            gender: "Male",
            firstname: "Ankith",
            lastname: "Goud",
            passportnumber: "P1234567",
            dod: "8",
            dom: "7",
            doy: "1995",
            countryofresidence: "Kenya",
            phonenumber: "712345678",
            disability: "No",
            placeofbirth: "Kenya",
            county: "Bomet"

        }
    }
)