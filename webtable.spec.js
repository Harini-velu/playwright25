import{test,expect} from '@playwright/test'

test ('web table' ,async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')
   const table= await page.locator('#productTable')
    
 // columns
   const column =await table.locator('thead tr th')
   console.log("Number of column: " + await column.count());

//rows
const row =await table.locator('tbody tr')
   console.log("Number of row: " + await row.count());
   
})
