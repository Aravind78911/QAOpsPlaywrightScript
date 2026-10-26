
// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 1,
  workers: 1,
  timeout: 30 * 100, // test timeout
  expect: {
    timeout: 5000,
  },

  /* retries: 1, // important for trace visibility*/

  reporter: 'html',
  projects: [
    {
      name: 'safari',
      use:
      {
        browserName: 'webkit',
        headless: true,
        screenshot: 'off',
        ...devices ['iPhone 11 Pro'],
        trace: 'on',
      },
    },
    {
      name: 'chrome',
      use:
      {
        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        //...devices ['Galaxy S24'],
        ignoreHTTPSErrors: true,
        permissions: ['geolocation'],
        trace: 'on',
        //viewport:{width:720,height:720},
      },
    },
  ],
});
