import {test , expect} from '@playwright/test';
import  Login  from '../../Pageobject/LoginPOM.js';

test.only("Buzz,whats on your mind?", async ({page})=>{
    test.slow()
    const loginpo = new Login(page);
    await loginpo.gotoLoginPage();
    await loginpo.LoginOrg(process.env.ORG_USERNAME,process.env.ORG_PASSWORD);
    await page.locator('(//li[@class="oxd-main-menu-item-wrapper"])[12]').click();
    await page.locator(`textarea[placeholder="What's on your mind?"]`).fill("Hello, this is a test message from Playwright!");
    await page.locator('button[type="submit"]').click();
    await expect(page.getByText("Successfully Saved")).toBeVisible()
})