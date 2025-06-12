const{test,expect}=require('@playwright/test')

test('practice',async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(2000)
    await page.locator('//h1[@class="title"]')
    await page.getByPlaceholder('Enter EMail')
    await expect (page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect (page).toHaveTitle('Automation Testing Practice')
    await expect (page.locator('//label[text()="Gender:"]')).toBeVisible
    await expect (page .locator('//button[text()="START"]')).toBeEnabled
    await page.goto('https://www.instagram.com')
    await expect (page.locator('//button[@type="submit"]')).toBeDisabled
    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect (page.locator('Udemy Courses')).toHaveText
    await page.locator('//input[@placeholder="Enter Name"]').fill("Harini")
    await expect (page.locator('//input[@placeholder="Enter Name"]')).toHaveValue("Harini")
    await expect(page.locator('#colors option')).toHaveCount(7);
   
    



})