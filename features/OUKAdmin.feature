Feature: OUK Admin School Management
     @Regression
    Scenario: Admin creates a school successfully
        Given I log into the OUK application with "adminuser@gmail.com" and "Welcome@123"
        When admin enters valid school details "bgh78" and "mahad school"
        Then the school should be created successfully

  Scenario: Placing the Order
    Given a login to Ecommerce3 application with "aithaaravind481@gmail.com" and "Welcome@123"
    When Add "zara coat 3" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    Then Verify Order is present in the OrderHistory

Examples:
      | username                  | password    |
      | aithaaravind481@gmail.com | Welcome@123 |
      | hello@123.com             | Iamhello    |


             