import {test as baseTest} from '@playwright/test';
interface  TestDataForOrder {
    email: string;
    password: string;
    productName: string;
};

export const customTest = baseTest.extend<{testDataForOrder:TestDataForOrder}>(

    {
        testDataForOrder: 
        {
            email: "aithaaravind481@gmail.com",
            password: "Welcome@123",
            productName: "ZARA COAT 3"
        }

    }
)