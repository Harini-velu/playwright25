const {test,expect}=require('@playwright/test')

test('soft assertion', async({page})=> {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page.locator('//[@alt="company-branding"]')).toBeVisible()
    await page.fill('//input[@name="username"]','Admin')
    await page.fill('//input[@name="password"]','admin123')
    await page.click('button[type="submit"]')
    
})