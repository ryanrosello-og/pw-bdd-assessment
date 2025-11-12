import { Page } from '@playwright/test'
import { getItem } from './inventory_items.component'

export const cartPage = (page: Page) => {
  const locators = {
    itemsList: page.getByTestId('inventory-item'),
    checkoutButton: page.locator('button', { hasText: 'Checkout' }),
    item: (productName: string) => getItem(page, productName),
  }
  return { ...locators }
}
