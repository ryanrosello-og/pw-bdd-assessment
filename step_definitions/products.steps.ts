import { Given, When, Then } from '../support/fixtures'

Given('the user is on the products page', async ({}) => {
  // Step: And the user is on the products page
  // From: features\products\cart_management.feature:8:5
})

Given('a list of items is displayed', async ({}) => {
  // Step: And a list of items is displayed
  // From: features\products\sort_product_items.feature:7:5
})

When('the user sorts the items by {string}', async ({}, arg: string) => {
  // Step: When the user sorts the items by "Price"
  // From: features\products\sort_product_items.feature:11:5
})

When('the user adds multiple products to the cart', async ({}) => {
  // Step: When the user adds multiple products to the cart
  // From: features\checkout\order_flow.feature:10:5
})

When(
  'the user adds the following items to the cart:',
  async ({}, dataTable: DataTable) => {
    // Step: When the user adds the following items to the cart:
    // From: features\products\cart_management.feature:12:5
  }
)

When('the user navigates to the cart', async ({}) => {
  // Step: And the user navigates to the cart
  // From: features\products\cart_management.feature:16:5
})

Then(
  'the items should be displayed in {string} order based on {string}',
  async ({}, arg: string, arg1: string) => {
    // Step: Then the items should be displayed in "ascending" order based on "Price"
    // From: features\products\sort_product_items.feature:12:5
  }
)
