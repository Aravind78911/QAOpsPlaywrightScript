Feature: Ecommerce validations
 
  Scenario: Placing the Order
    Given a login to Ecommerce application with "aithaaravind481@gmail.com" and "Welcome@123"
    When Add "zara coat 4" to Cart
    Then Verify "zara coat 3" is displayed in the Cart
    Then Verify Order is present in the OrderHistory


  Scenario Outline: Placing the Order
    Given a login to Ecommerce2 application with "<username>" and "<password>"
    Then Verify Error message is displayed

    Examples:
      | username                  | password    |
      | aithaaravind481@gmail.com | Welcome@123 |
      | hello@123.com             | Iamhello    |