Feature: User Login

  Ensure users can successfully log in with valid credentials while
  blocking access when credentials are invalid.

  Background:
    Given the user is on the login page

  @smoke @login
  Scenario Outline: User attempts to log in with different credentials
    When the user logs in using "<user_type>" credentials
    Then the application should display "<expected_result>"

    Examples:
      | user_type   | expected_result                                                          |
      | valid       | Products                                                                 |
      | invalid     | Epic sadface: Username and password do not match any user in this service|
      | empty       | Epic sadface: Username is required                                       |