const base = require('@playwright/test');

exports.logintest = base.test.extend(

    {
        testadminflowdata:
        {
            emailaddress: "adminuser@gmail.com",
            password: "Welcome@123",
            code: "vp900",
            schoolname: "vphas school"
        }
    }
)