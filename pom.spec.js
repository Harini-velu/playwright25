const{test,expect}=require('@playwright/test')

import shortcut from './login'
test ('page object model', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    const filling=new shortcut(page)
    await filling.loginpage("Admin", "admin123")
    await page.pause()
})