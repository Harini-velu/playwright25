
const {test, expect} = require ('@playwright/test')

test('locators', async({page})=>{

    await page.goto('https://www.instagram.com')
    await page.locator('//input[@aria-label="Phone number, username, or email"]')
    await page.click('//input[@aria-label="Phone number, username, or email"]')
    await page.fill('//input[@aria-label="Phone number, username, or email"]','Imharini')
    await page.waitForTimeout(3000)
    await page.locator('//input[@aria-label="Password"]')
    await page.click('//input[@aria-label="Password"]')
   await page.fill('//input[@aria-label="Password"]','ammu@123')
   await page.goBack()
   //await page.goForward()
   await page.locator('//button[type="submit"]')
   

})