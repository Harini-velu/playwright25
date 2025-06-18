const {test,expect} = require('@playwright/test')

test('dbclick', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.click('//button[text()="Copy Text"]' , {clickCount: 2})

})
