import { defineConfig } from '@playwright/test'
import { defineBddConfig } from 'playwright-bdd'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.resolve(__dirname, '.env') })

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
