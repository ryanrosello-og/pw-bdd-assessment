import { Page } from '@playwright/test'
import { getItem } from './inventory_items.component'

export const reviewPage = (page: Page) => {
  const locators = {
    paymentInfo: page.getByTestId('payment-info-value'),
    shippingInfo: page.getByTestId('shipping-info-value'),
    subTotal: page.getByTestId('subtotal-label'),
    tax: page.getByTestId('tax-label'),
    total: page.getByTestId('total-label'),
    finishButton: page.locator('button', { hasText: 'Finish' }),
    item: (productName: string) => getItem(page, productName),
  }
  return { ...locators }
}
