const {test, expect}= require ('@playwright/test')

test('locators', async({page})=>{

    await page.goto("https://www.instagram.com/accounts/login/");

})