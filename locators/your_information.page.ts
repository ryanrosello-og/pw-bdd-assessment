import { Page } from '@playwright/test'

export const yourInformationPage = (page: Page) => {
  const locators = {
    firstNameInput: page.getByPlaceholder('First Name'),
    lastNameInput: page.getByPlaceholder('Last Name'),
    zipInput: page.getByPlaceholder('Zip/Postal Code'),
    continueButton: page.locator('button', { hasText: 'Continue' }),
  }
  return { ...locators }
}
