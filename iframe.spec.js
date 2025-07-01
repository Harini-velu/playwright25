const{test,expect}=require('@playwright/test')

test('frame',async ({page}) =>{

    await page.goto('https://letcode.in/frame')
    const key =await page.frame({url:'https://letcode.in/frameui'})
    await key.fill('//input[@placeholder="Enter name"]' ,'Harini')
    await key.fill('//input[@placeholder="Enter email"]', "harinivelu45@gmail.com")
    await page.pause ()


})