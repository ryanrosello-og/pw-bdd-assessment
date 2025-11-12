Feature: Add multiple items to cart and verify checkout

  Ensure users can add multiple items to their shopping cart
  and successfully proceed to checkout.

  Background:
    Given the user is logged in
    And the user is on the products page

  @ui @cart @checkout
  Scenario Outline: User adds multiple items to the cart and verifies checkout
    When the user adds the following items to the cart
      | item_name                      |
      | Sauce Labs Backpack            |
      | Sauce Labs Fleece Jacket       |
    And the user navigates to the cart
    Then the cart should display all added items with correct quantities

