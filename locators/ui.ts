import { cartPage } from './cart.page'
import { Page } from '@playwright/test'
import { loginPage } from './login.page'
import { reviewPage } from './review.page'
import { productsPage } from './products.page'
import { headerComponent } from './header.component'
import { confirmationPage } from './confirmation.page'
import { yourInformationPage } from './your_information.page'

export const ui = (page: Page) => {
  return {
    pw: page,
    loginPage: loginPage(page),
    productsPage: productsPage(page),
    cart: cartPage(page),
    checkout: {
      yourInformation: yourInformationPage(page),
      review: reviewPage(page),
      confirmation: confirmationPage(page),
    },
    header: headerComponent(page),
  }
}

export type UI = ReturnType<typeof ui>
