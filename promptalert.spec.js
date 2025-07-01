const{test,expect}=require('@playwright/test')

test('prompt alert',async ({page}) =>{


await page.goto('https://testautomationpractice.blogspot.com/')

page.on('dialog' , async dialog => {
    
    await expect(dialog.type()).toContain('prompt')
    await expect(dialog.message()).toContain('Please enter your name:')
    await dialog.accept("Harry potter")
})
    await page.click('//button[text()="Prompt Alert"]')  

})