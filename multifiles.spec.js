const{test,expect}=require('@playwright/test')

test('uploadfile',async ({page}) =>{

await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
await page.locator('#filesToUpload').setInputFiles(["C:/Users/Harini javascript/playwright25/tests/checkbox.spec.js","C:/Users/Harini javascript/playwright25/tests/assertion.spec.js"])
await page.waitForTimeout(3000)
await expect(page.locator("#fileList")).toHaveText(['checkbox.spec.js','assertion.spec.js'])

await page.locator('#filesToUpload').setInputFiles([])

})