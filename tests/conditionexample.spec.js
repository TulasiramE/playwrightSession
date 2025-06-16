import { test, expect } from '@playwright/test'; 
let creds =["Admin","admin123"]
test("verify the condtion",async({page})=>{
 await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
 await page.locator('input[name="username"]').fill(creds[0])
 await page.locator('input[name="password"]').fill(creds[1])
 await page.locator('button[type="submit"]').click() 
 const visible =await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').isVisible()
 if(visible){
    await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click()
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers").toBeVisible()
 }
})