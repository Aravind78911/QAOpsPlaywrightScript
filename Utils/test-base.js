const base  = require('@playwright/test');


exports.customtest = base.test.extend(

    {
        testDataForOrder:
        {
            email: "aithaaravind481@gmail.com",
            password: "Welcome@123",
            productName: "ZARA COAT 3"
        }

    }
)