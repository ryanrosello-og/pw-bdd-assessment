import { test as base, createBdd } from 'playwright-bdd'
import { type UI, ui } from '../locators/ui'

type TestFixtures = {
  ui: UI
}

export const test = base.extend<TestFixtures>({
  ui: async ({ page }: { page: any }, use: (ui: UI) => Promise<void>) => {
    await use(ui(page))
  },
})

export const { Given, When, Then } = createBdd(test)
