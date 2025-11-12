import { Page } from '@playwright/test'

export const confirmationPage = (page: Page) => {
  const locators = {
    heading: page.getByTestId('complete-header'),
    backHomeButton: page.locator('button', { hasText: 'Back Home' }),
  }
  return { ...locators }
}
