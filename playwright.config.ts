import { defineConfig } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: ['step_definitions/**/*.ts', 'support/fixtures.ts'],
})

export default defineConfig({
  testDir,
  reporter: 'html',
  use: {
    testIdAttribute: 'data-test',
    baseURL: 'https://www.saucedemo.com',
    trace: 'on',
  },
})
