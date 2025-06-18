const {test,expect} = require('@playwright/test')

test('screenshot' , async({page})=>{


    await page.goto('https://www.myntra.com/myntra?f=Gender%3Amen%2Cmen%20women%3A%3AQuick%20Filters%3APrice%20Crash')
    await page.waitForTimeout(3000)
    await page.screenshot({path:'C:/Users/Harini javascript/playwright25/tests/photos'+Date.now()+'home page.png'})
})


test('fullpage' , async({page})=>{

    
    await page.goto('https://www.myntra.com/myntra?f=Gender%3Amen%2Cmen%20women%3A%3AQuick%20Filters%3APrice%20Crash')
    await page.screenshot({path:'C:/Users/Harini javascript/playwright25/tests/photos'+Date.now()+'full page.png' ,fullPage:true})
})

test.only('element' , async({page})=>{

    
    await page.goto('https://www.myntra.com/myntra?f=Gender%3Amen%2Cmen%20women%3A%3AQuick%20Filters%3APrice%20Crash')
    await page.locator('//img[@alt="Olay Total Effects Day Cream with SPF15 - Fights 7 Signs of Ageing - 50g"]').screenshot({path:'C:/Users/Harini javascript/playwright25/tests/photos'+Date.now()+'element page.png' })
})
    