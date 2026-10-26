
// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 100, // test timeout
  expect: {
    timeout: 5000,
  },

  /* retries: 1, // important for trace visibility*/

  reporter: [
    ['html'],
    ['list'],
    ['allure-playwright']
  ],
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure', // or 'on' for debugging
  },
});