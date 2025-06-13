const{test,expect}=require('@playwright/test')

test('checkbox',async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#tuesday').check()
    await page.waitForTimeout(2000)
    await expect(page.locator('#tuesday').isChecked()).toBeTruthy()
    await page.locator('#tuesday').uncheck()
    expect (await page.locator('#tuesday').isChecked()).toBeFalsy()

})