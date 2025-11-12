import { Page } from '@playwright/test'

export const headerComponent = (page: Page) => {
  const locators = {
    shoppingCartLink: page
      .getByTestId('primary-header')
      .getByTestId('shopping-cart-link'),
    shoppingCartItemCount: page
      .getByTestId('primary-header')
      .getByTestId('shopping-cart-badge'),
  }
  return { ...locators }
}
