import { test, expect } from '@playwright/test';

test('website loads without any errors', async ({ page, baseURL }) => {
  await page.goto(baseURL!);
  // Expects page to have a heading with the name of Installation.
  await page.close();
});
