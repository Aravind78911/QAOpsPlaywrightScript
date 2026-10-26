Feature: Ecommerce validations

  Scenario: Placing the Order
    Given a login to Ecommerce application with "aithaaravind481@gmail.com" and "Welcome@123"
    When Add "zara coat 3" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    Then Verify Order is present in the OrderHistory

  @Validation
  Scenario: Placing the Order
    Given a login to Ecommerce3 application with "aithaaravind481@gmail.com" and "Welcome@123"
    When Add "zara coat 3" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    Then Verify Order is present in the OrderHistory

Examples:
      | username                  | password    |
      | aithaaravind481@gmail.com | Welcome@123 |
      | hello@123.com             | Iamhello    |