import { expect } from '@playwright/test'

import { Given, When, Then } from '../support/fixtures'
Given('the user is on the login page', async ({ page }) => {
  await page.goto('/')
})

Given('the user logs in with valid credentials', async ({}) => {
  // Step: Given the user logs in with valid credentials
  // From: features\checkout\order_flow.feature:6:5
})

Given('the user is logged in', async ({}) => {
  // Step: Given the user is logged in
  // From: features\products\cart_management.feature:7:5
})

When(
  'the user logs in using {string} credentials',
  async ({ page }, user_type: string) => {
    console.log(`Logging in as ${user_type}`)
  }
)

Then(
  'the system should display {string}',
  async ({ page }, expected_result: string) => {
    console.log(`Verifying that the result is: ${expected_result}`)
  }
)
