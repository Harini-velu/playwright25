const{test,expect}=require('@playwright/test')

test('radio button',async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#male').check()
    await page.waitForTimeout(2000)

})