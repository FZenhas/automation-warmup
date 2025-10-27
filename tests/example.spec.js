// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.goto('https://playwright.dev/'); //goto - go and open the browser

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/); // the slash is a must contain. If in between "" means specific word
  
  //await comand by default waits 5 secs until it loads
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  //whats the link with the name 'get started' and once finded, click on it

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
