import { Given, When, Then, expect } from '../support/fixtures'
import { UI } from '../locators/ui'
import { config } from '../support/config'

Given('the user is on the login page', async ({ ui }) => {
  await ui.pw.goto('/')
  await expect(ui.loginPage.userNameInput).toBeVisible()
})

Given('the user logs in with valid credentials', async ({ ui }) => {
  await ui.loginPage.login(
    config.users.standard.username,
    config.users.standard.password,
    ui.products.title
  )
})

Given('the user is logged in', async ({ ui }) => {
  await ui.loginPage.login(
    config.users.standard.username,
    config.users.standard.password,
    ui.products.title
  )
})

When(
  'the user logs in using {string} credentials',
  async ({ ui }, user_type: string) => {
    if (user_type === 'valid') {
      await ui.loginPage.login(
        config.users.standard.username,
        config.users.standard.password,
        ui.products.title
      )
    } else if (user_type === 'invalid') {
      await ui.loginPage.login(
        config.users.invalid.username,
        config.users.invalid.password
      )
    } else if (user_type === 'empty') {
      await ui.loginPage.login('', '')
    } else {
      throw new Error(`Unknown user type: ${user_type}`)
    }
  }
)

Then(
  'the application should display {string}',
  async ({ ui }, expected_result: string) => {
    if (expected_result === 'Products') {
      await expect(ui.products.title).toBeVisible()
    } else {
      await expect(ui.loginPage.errorMessage).toHaveText(expected_result)
    }
  }
)
