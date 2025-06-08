const {test, expect} = require ('@playwright/test')

test('locators', async({page})=>{

    await page.goto('https://www.facebook.com/')
    await page.locator('#email')
   await page.click('#email')
    await page.fill('#email','Imharini')
    //await page.waitForTimeout(2000)
   await page.click('#pass')
   await page.fill('#pass','ammu@123')
   await page.goBack()
   await page.goForward()
   await page.locator('button[type="submit"]')
   

})