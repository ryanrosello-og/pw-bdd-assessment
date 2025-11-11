Feature: Add multiple items to cart and verify checkout

  Ensure users can add multiple items to their shopping cart
  and successfully proceed to checkout.

  Background:
    Given the user is logged in
    And the user is on the products page

  @ui @cart @checkout
  Scenario Outline: User adds multiple items to the cart and verifies checkout
    When the user adds the following items to the cart:
      | item_name      | quantity |
      | <item_1>       | <qty_1>  |
      | <item_2>       | <qty_2>  |
    And the user navigates to the cart
    Then the cart should display all added items with correct quantities
    When the user proceeds to checkout
    Then the checkout page should display the correct order summary
    And the total price should be accurately calculated

    Examples:
      | item_1               | qty_1 | item_2                  | qty_2 |
      | Sauce Labs Backpack  | 1     | Sauce Labs Bolt T-Shirt | 1     |
      | Sauce Labs Onesie    | 1     | Sauce Labs Bike Light   | 1     |
