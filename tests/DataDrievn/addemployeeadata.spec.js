import { test, expect } from "@playwright/test";
const employeedata={
    employee1:{firstname:"Genos",lastname:"G"},
    employee2:{firstname:"Gon",lastname:"freaks"},
    employee3:{firstname:"naruto",lastname:"unumaki"},
    employee4:{firstname:"hinata",lastname:"m"},
    employee5:{firstname:"kakashi",lastname:"hatake"}
    
}
for(let name in employeedata){
test(`addemployee functionalities ${employeedata[name].firstname} ${employeedata[name].lastname}`,async({page})=>{
    await page.goto(
    "/web/index.php/auth/login"
  );
  await page.locator("input[name='username']").fill(process.env.ORG_USERNAME);
  await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD);
  await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  await page.locator('(//a[@class="oxd-main-menu-item"])[2]').click()
  await page.locator('(//a[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
  await page.locator('input[name="firstName"]').fill(`${employeedata[name].firstname}`)
  await page.locator('input[name="lastName"]').fill(`${employeedata[name].lastname}`)
  await page.locator('button[type="submit"]').click()
  await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()
})
}
