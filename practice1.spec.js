import{test,expect} from '@playwright/test'

test ('web table' ,async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
   //const table= await page.locator('#productTable')
   
   const searchvalue="Laptop"
   const celllocator = page.locator('table tbody tr td:text("${searchvalue}")')

   await expect(celllocator).toBeVisible()


})