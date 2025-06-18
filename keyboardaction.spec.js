const {test,expect} = require('@playwright/test')

test('keyboardaction', async({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')
   await page.fill('#name', 'Harini')
   await page.keyboard.press('Control+a')
   await page.keyboard.press('Control+x')
   await page.keyboard.press('Tab')
   await page.keyboard.press('Control+v')
   await page.keyboard.press('Shift+Tab')
   await page.keyboard.insertText("Sri")
   await page.waitForTimeout(2000)
 //await page.fill('#phone','9655417991')
   await page.keyboard.press('Tab')
   await page.keyboard.insertText('9655417991')
})