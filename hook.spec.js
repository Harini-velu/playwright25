const{test,expect}=require('@playwright/test');


let page;
test.beforeEach('before process',async ({browser}) =>{
    page =await browser.newPage()

await page.goto('https://demoblaze.com/') 
await page.click('#login2')
await page.fill('#loginusername', "Harini")
await page.fill('#loginpassword', "ammu@123")
await page.click('//button[text()="Log in"]')

})

test.afterEach(async() => {
    await page.click("#logout2")
    
})

test ('check list',async () => {
    const product =await page.locator('.card')
    await expect(product).toHaveCount(9)
    
})

test('add to cart',async() => {

    await page.click('//a[text()="Samsung galaxy s6]')
    await page.click('//a[text="Add to cart"]')
    page.on('dialog',async dialog  => {

    await expect(dialog.type()).toContain('alert')
    await expect(dialog.message()).toContain('Product added')
    await dialog.accept()

    })
    
})