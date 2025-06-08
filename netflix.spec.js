const {test, expect} = require ('@playwright/test')

test('login',async ({page}) => {

    await page.goto('https://www.netflix.com/in/login')
    await page.locator('input[name="userLoginId"]')
    await page.click('input[name="userLoginId"]')
    await page.fill('input[name="userLoginId"]','8939455727')
    await page.waitForTimeout(500)
    await page.locator('input[name="password"]')
    await page.click('input[name="password"]')
    await page.fill('input[name="password"]','easy@123')
    await page.click('button[type="submit"]')
})

