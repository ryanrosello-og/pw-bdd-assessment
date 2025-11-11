Feature: Complete End-to-End Order Flow
  Enables registered users to purchase items by logging in, adding products to the cart,
  and completing the checkout process.

  Background:
    Given the user logs in with valid credentials

  @e2e @checkout
  Scenario: Successful completion of an order
    When the user adds multiple products to the cart
    And proceeds to checkout with valid personal information:
      | FirstName | LastName | PostalCode |
      | John      | Doe      | 12345      |
    Then the order should be successfully completed
    And a confirmation message "Thank you for your order!" should be displayed
    And the user should have the option to return to the products page
