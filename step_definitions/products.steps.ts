/* eslint-disable playwright/no-standalone-expect */
import { DataTable } from 'playwright-bdd/dist/cucumber/DataTable'
import { config } from '../support/config'
import { Given, When, Then, expect } from '../support/fixtures'

Given('the user is on the products page', async ({ ui }) => {
  await ui.loginPage.login(
    config.users.standard.username,
    config.users.standard.password,
    ui.productsPage.title
  )
})

Given('a list of items is displayed', async ({ ui }) => {
  await expect(ui.productsPage.productList).toBeVisible()
})

When(
  'the user sorts the items by {string}',
  async ({ ui }, sortOption: string) => {
    await ui.productsPage.sortDropdown.selectOption(sortOption)
  }
)

When('the user adds multiple products to the cart', async ({ ui }) => {
  await ui.productsPage.productCard('Sauce Labs Backpack').addToCartBtn.click()
  await ui.productsPage
    .productCard('Sauce Labs Fleece Jacket')
    .addToCartBtn.click()
  await expect(ui.header.shoppingCartItemCount).toHaveCount(2)
})

When(
  'the user adds the following items to the cart',
  async ({ ui }, dataTable: DataTable) => {
    for (const row of dataTable.hashes()) {
      await ui.productsPage.productCard(row.label).addToCartBtn.click()
    }
    await expect(ui.header.shoppingCartItemCount).toHaveCount(
      dataTable.rows().length
    )
  }
)

When('the user navigates to the cart', async ({ ui }) => {
  await ui.header.shoppingCartLink.click()
  await expect(ui.cart.checkoutButton).toBeVisible()
})

Then(
  'the items should be displayed in order based on {string}',
  async ({ ui }, sortOption: string) => {
    switch (sortOption) {
      case 'Name (A to Z)':
        await expect(ui.productsPage.productList.first()).toHaveText(
          /Sauce Labs Backpack/
        )
        await expect(ui.productsPage.productList.last()).toHaveText(
          /Test.allTheThings() T-Shirt (Red)/
        )
        break
      case 'Name (Z to A)':
        await expect(ui.productsPage.productList.first()).toHaveText(
          /Test.allTheThings() T-Shirt (Red)/
        )
        await expect(ui.productsPage.productList.last()).toHaveText(
          /Sauce Labs Backpack/
        )
        break
      case 'Price (low to high)':
        await expect(ui.productsPage.productList.first()).toHaveText(
          /Sauce Labs Onesie/
        )
        await expect(ui.productsPage.productList.last()).toHaveText(
          /Sauce Labs Fleece Jacket/
        )
        break
      case 'Price (high to low)':
        await expect(ui.productsPage.productList.last()).toHaveText(
          /Sauce Labs Onesie/
        )
        await expect(ui.productsPage.productList.first()).toHaveText(
          /Sauce Labs Fleece Jacket/
        )
        break
      default:
        throw new Error(`Unknown sort option: ${sortOption}`)
    }
  }
)
