import { test, expect } from "@playwright/test";
import logindata from "../../testData/orangelogin.json"; 
import addData from "../../testData/addEmplyeedata.json";
test("addemployee functionalities",async({page})=>{
    await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator("input[name='username']").fill(logindata.username);
  await page.locator("input[type='password']").fill(logindata.password);
  await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  await page.locator('(//a[@class="oxd-main-menu-item"])[2]').click()
  await page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
  await page.locator('input[name="firstName"]').fill(addData.firstname)
  await page.locator('input[name="lastName"]').fill(addData.lastname)
  await page.locator('button[type="submit"]').click()
  await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
})