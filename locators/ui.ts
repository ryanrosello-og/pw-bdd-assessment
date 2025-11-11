import { Page } from '@playwright/test'

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
    auth: {
      emailInput: page.getByTestId('username'),
      passwordInput: page.getByTestId('password'),
      loginButton: page.getByTestId('login-button'),
      errorMessage: page.getByTestId('error'),
    },

    products: {
      title: page.getByTestId('title'),
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
          addToCartBtn: card.getByRole('button', { name: 'Add to cart' }),
        }
      },
    },

    // Cart
    cart: {
      itemsList: page.getByTestId('inventory-item'),
      checkoutButton: page.getByTestId('checkout'),
      item: getItem,
    },

    // Checkout flow
    checkout: {
      yourInformation: {
        firstNameInput: page.getByLabel('firstName'),
        lastNameInput: page.getByLabel('lastName'),
        zipInput: page.getByLabel('postalCode'),
        continueButton: page.getByTestId('continue'),
      },

      // Review page
      review: {
        paymentInfo: page.getByTestId('payment-info-value'),
        shippingInfo: page.getByTestId('shipping-info-value'),
        subTotal: page.getByTestId('subtotal-label'),
        tax: page.getByTestId('tax-label'),
        total: page.getByTestId('total-label'),
        finishButton: page.getByTestId('finish'),
        item: getItem,
      },

      // Order confirmation
      confirmation: {
        heading: page.getByTestId('complete-header'),
        backHomeButton: page.getByTestId('back-to-products'),
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
