import { test , expect } from '@playwright/test'; 

let page;
test.describe("login functinalities",()=>{
    test.beforeAll(()=>{
        console.log("start execution")
    })
    test.beforeEach(async({browser})=>{
      page=await browser.newPage()

    })
  test("login with valid credential",{tag:"@smoke"},async()=>{
  await page.locator("input[name='username']").fill(process.env.ORG_USERNAME);
  await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD);
  await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
}) 

test("verify login with valid username and invalid password @option",async()=>{

  await page.locator("input[name='username']").fill(process.env.ORG_USERNAME);
  await page.locator("input[type='password']").fill(process.env.WRG_PASSWORD);
  await page.locator("button[type='submit']").click();
  await expect(page.getByText("Invalid credentials")).toBeVisible()
})

test("verify login with invalid username and valid password",{tag:"@smoke"},async()=>{

  await page.locator("input[name='username']").fill(process.env.WRG_USERNAME);
  await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD);
  await page.locator("button[type='submit']").click();
  await expect(page.getByText("Invalid credentials")).toBeVisible()
}) 

test("verify login with invalid username and invalid password @option",async()=>{

  await page.locator("input[name='username']").fill(process.env.WRG_USERNAME);
  await page.locator("input[type='password']").fill(process.env.WRG_PASSWORD);
  await page.locator("button[type='submit']").click();
  await expect(page.getByText("Invalid credentials")).toBeVisible()
})
})
