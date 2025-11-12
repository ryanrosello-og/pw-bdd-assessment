/* eslint-disable playwright/no-standalone-expect */
import { When, Then, expect } from '../support/fixtures'

Then(
  'the cart should display all added items with correct quantities',
  async ({ ui }) => {
    await expect(ui.cart.item('Sauce Labs Backpack').quantity).toHaveText('1')
    await expect(ui.cart.item('Sauce Labs Backpack').price).toHaveText('$29.99')
    await expect(ui.cart.item('Sauce Labs Fleece Jacket').quantity).toHaveText(
      '1'
    )
    await expect(ui.cart.item('Sauce Labs Fleece Jacket').price).toHaveText(
      '$49.99'
    )
  }
)

When('the user proceeds to checkout', async ({ ui }) => {
  await ui.cart.checkoutButton.click()
  await expect(ui.checkout.yourInformation.firstNameInput).toBeVisible()
})
