const{test,expect}=require('@playwright/test')

test('confirm alert',async ({page}) =>{


await page.goto('https://testautomationpractice.blogspot.com/')

page.on('dialog' , async dialog => {
    
    await expect(dialog.type()).toContain('confirm')
    await expect(dialog.message()).toContain('Press a button!')
    await dialog.dismiss()
})
    await page.click('//button[text()="Confirmation Alert"]')  

})
