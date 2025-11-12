import { Page } from '@playwright/test'
import { loginPage } from './login'

export const ui = (page: Page) => {
  const getItem = (productName: string) => {
    const item = page
      .getByTestId('inventory-item')
      .filter({ hasText: productName })
    return {
      self: item,
      quantity: item.getByTestId('item-quantity'),
      price: item.getByTestId('inventory-item-price'),
    }
  }

  return {
    pw: page,
    loginPage: loginPage(page),

    products: {
      title: page.locator('.title', { hasText: 'Products' }),
      sortDropdown: page.getByTestId('product-sort-container'),

      // Product card actions
      productCard: (name: string) => {
        const card = page.getByTestId('inventory-item').filter({
          has: page
            .getByTestId('inventory-item-name')
            .filter({ hasText: name }),
        })
        return {
          self: card,
          image: card.getByRole('img'),
          title: card.getByTestId('inventory-item-name'),
          price: card.getByTestId('inventory-item-price'),
          addToCartBtn: card.locator('button', { hasText: 'Add to cart' }),
        }
      },
    },

    // Cart
    cart: {
      itemsList: page.getByTestId('inventory-item'),
      checkoutButton: page.locator('button', { hasText: 'Checkout' }),
      item: getItem,
    },

    // Checkout flow
    checkout: {
      yourInformation: {
        firstNameInput: page.getByPlaceholder('First Name'),
        lastNameInput: page.getByPlaceholder('Last Name'),
        zipInput: page.getByPlaceholder('Zip/Postal Code'),
        continueButton: page.locator('button', { hasText: 'Continue' }),
      },

      // Review page
      review: {
        paymentInfo: page.getByTestId('payment-info-value'),
        shippingInfo: page.getByTestId('shipping-info-value'),
        subTotal: page.getByTestId('subtotal-label'),
        tax: page.getByTestId('tax-label'),
        total: page.getByTestId('total-label'),
        finishButton: page.locator('button', { hasText: 'Finish' }),
        item: getItem,
      },

      // Order confirmation
      confirmation: {
        heading: page.getByTestId('complete-header'),
        backHomeButton: page.locator('button', { hasText: 'Back Home' }),
      },
    },

    common: {
      header: {
        shoppingCartLink: page
          .getByTestId('primary-header')
          .getByTestId('shopping-cart-link'),
        shoppingCartItemCount: page
          .getByTestId('primary-header')
          .getByTestId('shopping-cart-badge'),
      },
    },
  }
}

export type UI = ReturnType<typeof ui>
