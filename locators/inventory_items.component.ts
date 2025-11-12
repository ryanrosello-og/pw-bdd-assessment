import { Page } from '@playwright/test'

export const getItem = (page: Page, productName: string) => {
  const item = page
    .getByTestId('inventory-item')
    .filter({ hasText: productName })
  const locators = {
    self: item,
    quantity: item.getByTestId('item-quantity'),
    price: item.getByTestId('inventory-item-price'),
  }
  return {
    ...locators,
  }
}
