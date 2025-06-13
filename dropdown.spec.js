const{test,expect}=require('@playwright/test')

test('dropdown',async ({page}) =>{

 await page.goto('https://testautomationpractice.blogspot.com/')
 //await page.locator('#country').selectOption("India")
 //await page.locator('#country').selectOption('India')
 await page.locator('#country').selectOption({label:'India'})
 //await page.locator('#country').selectOption({value:'India'})
 //await page.locator('#country').selectOption({Index:'9'})
 await page.waitForTimeout(2000)



})