import { test as base, createBdd } from 'playwright-bdd'
import { type UI, ui } from '../locators/ui'
import { Page, expect } from '@playwright/test'

type TestFixtures = {
  ui: UI
}

export const test = base.extend<TestFixtures>({
  ui: async ({ page }: { page: Page }, use: (ui: UI) => Promise<void>) => {
    await use(ui(page))
  },
})

const { Given, When, Then } = createBdd(test)
export { Given, When, Then, expect }
