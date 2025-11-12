import { expect, Locator, Page } from '@playwright/test'

export const loginPage = (page: Page) => {
  const locators = {
    userNameInput: page.getByPlaceholder('Username'),
    passwordInput: page.getByPlaceholder('Password'),
    loginButton: page.getByTestId('login-button'),
    errorMessage: page.getByTestId('error'),
  }

  return {
    ...locators,
    login: async (
      username: string,
      password: string,
      expectedSyncElement?: Locator
    ) => {
      await page.goto('/')
      await locators.userNameInput.fill(username)
      await locators.passwordInput.fill(password)
      await locators.loginButton.click()
      if (expectedSyncElement) {
        await expect(expectedSyncElement).toBeVisible()
      }
    },
  }
}
