import { Given, When, Then } from '../support/fixtures'

When('proceeds to checkout with valid personal information:', async ({}, dataTable: DataTable) => {
  // Step: And proceeds to checkout with valid personal information:
  // From: features\checkout\order_flow.feature:11:5
});

Then('the order should be successfully completed', async ({}) => {
  // Step: Then the order should be successfully completed
  // From: features\checkout\order_flow.feature:14:5
});

Then('a confirmation message {string} should be displayed', async ({}, arg: string) => {
  // Step: And a confirmation message "Thank you for your order!" should be displayed
  // From: features\checkout\order_flow.feature:15:5
});

Then('the user should have the option to return to the products page', async ({}) => {
  // Step: And the user should have the option to return to the products page
  // From: features\checkout\order_flow.feature:16:5
});

Then('the checkout page should display the correct order summary', async ({}) => {
  // Step: Then the checkout page should display the correct order summary
  // From: features\products\cart_management.feature:19:5
});

Then('the total price should be accurately calculated', async ({}) => {
  // Step: And the total price should be accurately calculated
  // From: features\products\cart_management.feature:20:5
});