const{test,expect, chromium}=require('@playwright/test')


test('multiple windows handling', async () => {


    const browser  =await chromium.launch() //browser launch
    const context =await browser.newContext() // it use to process the browser

   const page1= await context.newPage()
   const page2= await context.newPage()

   const count =await context.pages()
   console.log(count.length);

    await page1.goto('https://testautomationpractice.blogspot.com/')
    await expect (page1).toHaveTitle('Automation Testing Practice')
    await page2.goto('https://letcode.in/frame')
    await expect(page2).toHaveTitle('Frame | LetCode with Koushik')
})