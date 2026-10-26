Feature: OUK User Signup

  Scenario: Creating Signup Account for User
    Given I open the OUK application
    When I click on the Signup button
    Then the Signup page should be displayed
    When I enter valid signup details "jwaran@maailinator.com" and "Welcome@123" and "Welcome@123" and "Boss - Bachelor of Science (B.Sc.) – Science" and "BOSS - Bachelor of Science (B.Sc.) – Science" and "male" and "arjun" and "goud" and "36636632" and "2" and "8" and "1995" and "kenya" and "68474737323" and "No" and "kenya" and "kiambu"
    And I submit the signup form
    Then the account should be created successfully