/* eslint-disable playwright/no-standalone-expect */
import { DataTable } from 'playwright-bdd'
import { expect, When, Then } from '../support/fixtures'

When(
  'proceeds to checkout with valid personal information:',
  async ({ ui }, dataTable: DataTable) => {
    await ui.header.shoppingCartLink.click()
    await ui.cart.checkoutButton.click()
    const data = dataTable.rowsHash()
    await ui.checkout.yourInformation.firstNameInput.fill(data.first_name)
    await ui.checkout.yourInformation.lastNameInput.fill(data.last_name)
    await ui.checkout.yourInformation.zipInput.fill(data.postal_code)
    await ui.checkout.yourInformation.continueButton.click()
    await ui.checkout.review.finishButton.click()
  }
)

Then('the order should be successfully completed', async ({ ui }) => {
  await expect(ui.checkout.confirmation.heading).toHaveText(
    'Thank you for your order!'
  )
})

Then(
  'the checkout page should display the correct order summary',
  async ({ ui }) => {
    // Step: Then the checkout page should display the correct order summary
    // From: features\products\cart_management.feature:19:5
  }
)

Then('the total price should be accurately calculated', async ({ ui }) => {
  // Step: And the total price should be accurately calculated
  // From: features\products\cart_management.feature:20:5
})
