/* eslint-disable playwright/no-standalone-expect */
import { DataTable } from 'playwright-bdd'
import { expect, When, Then } from '../support/fixtures'

When(
  'proceeds to checkout with valid personal information:',
  async ({ ui }, dataTable: DataTable) => {
    await ui.header.shoppingCartLink.click()
    await ui.cart.checkoutButton.click()
    const [data] = dataTable.hashes()
    await ui.checkout.yourInformation.firstNameInput.fill(data.FirstName)
    await ui.checkout.yourInformation.lastNameInput.fill(data.LastName)
    await ui.checkout.yourInformation.zipInput.fill(data.PostalCode)
    await ui.checkout.yourInformation.continueButton.click()
    await ui.checkout.review.finishButton.click()
  }
)

Then('the order should be successfully completed', async ({ ui }) => {
  await expect(ui.checkout.confirmation.heading).toHaveText(
    'Thank you for your order!'
  )
})
