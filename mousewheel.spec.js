const {test,expect} = require('@playwright/test')

test('mousewheel' , async({page})=>{

    await page.goto('https://www.myntra.com/shop/women')
    await page.mouse.wheel(0,1000)
    await page.mouse.wheel(0, -1000)

   // await page.locator('//img[@class=')





})
