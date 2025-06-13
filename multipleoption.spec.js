const{test,expect}=require('@playwright/test')

test('Multipleoption',async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //await expect(page.locator('#country option')).toHaveCount(10)
 
   const len=await page.$$('#country option')
   expect(len).toHaveLength(10)

    
})