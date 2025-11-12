import { Page } from '@playwright/test'

export const productsPage = (page: Page) => {
  const locators = {
    title: page.locator('.title', { hasText: 'Products' }),
    sortDropdown: page.getByTestId('product-sort-container'),
    productList: page.getByTestId('inventory-list'),
    productItems: page.getByTestId('inventory-item'),
    productCard: (name: string) => {
      const card = page.getByTestId('inventory-item').filter({
        has: page.getByTestId('inventory-item-name').filter({ hasText: name }),
      })
      return {
        self: card,
        image: card.getByRole('img'),
        title: card.getByTestId('inventory-item-name'),
        price: card.getByTestId('inventory-item-price'),
        addToCartBtn: card.locator('button', { hasText: 'Add to cart' }),
      }
    },
  }
  return { ...locators }
}
