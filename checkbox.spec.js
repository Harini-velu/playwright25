const{test,expect}=require('@playwright/test')

test('checkbox',async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#sunday').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('#sunday').isChecked()).toBeTruthy()
    await page.locator('#sunday').uncheck()
    expect (await page.locator('#sunday').isChecked()).toBeFalsy()

})