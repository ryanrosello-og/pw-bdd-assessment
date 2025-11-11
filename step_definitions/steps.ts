import { expect } from '@playwright/test'

import { Given, When, Then } from '../support/fixtures'
Given('I am on home page', async ({ page, ui }) => {
  await ui.auth.loginButton.click()

})

When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click()
})

Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword))
})
