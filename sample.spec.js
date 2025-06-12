const { test, expect } = require('@playwright/test');

test('locators', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.fill('//input[@placeholder="Enter Name"]', 'Harini');
  await expect(page.locator('//input[@placeholder="Enter Name"]')).toHaveValue('Harini');
  await expect(page.locator('#colors option')).toHaveCount(7);

});
