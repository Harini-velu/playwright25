const{test,expect}=require('@playwright/test')

test('alert',async ({page}) =>{


await page.goto('https://testautomationpractice.blogspot.com/')

page.on('dialog' , async dialog => {
    
    await expect(dialog.type()).toContain('alert')
    await expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept()
})
    await page.click('//button[text()="Simple Alert"]')  

})

