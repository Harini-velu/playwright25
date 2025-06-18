const {test,expect} = require('@playwright/test')

test('mouseaction' , async({page})=>{


    await page.goto('https://www.myntra.com/shop/women')
    await page.hover ('(//a[text()="Home"])[1]')
    await page.click('//a[text()="Clocks"]')
    //wait page.waitForTimeout(3000)





})