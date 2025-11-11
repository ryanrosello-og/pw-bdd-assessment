Feature: Sort items in product list

  Allow users to sort items by different criteria such as price or name.

  Background:
    Given the user is on the products page
    And a list of items is displayed

  @ui @sorting
  Scenario Outline: User sorts items by different criteria
    When the user sorts the items by "<sort_option>"
    Then the items should be displayed in "<order>" order based on "<sort_option>"

    Examples:
      | sort_option  | order      |
      | Price        | ascending  |
      | Price        | descending |
      | Name         | ascending  |
      | Name         | descending |
