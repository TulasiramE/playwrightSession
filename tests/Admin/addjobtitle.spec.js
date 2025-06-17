import { test, expect } from "@playwright/test";
import jobData from "../../testData/jobtitledata.json";
let jobTitles ={
  jobtitle1:"AzureTest",
  jobtitle2:"APITest",
  jobtitle3:"CEO",
  jobtitle4:"CloudCEO",
}
for(let title in jobTitles){
  test(`adding the job title functionalities ${jobTitles[title]}`, async ({ page }) => {
  await page.goto(
    "/web/index.php/auth/login"
  );
  await page.locator("input[name='username']").fill(process.env.ORG_USERNAME);
  await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD);
  await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  await page.locator('a[class="oxd-main-menu-item active"]').click();
  await page
    .locator(
      '(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]'
    )
    .click();
  await page
    .locator('(//li[@class="oxd-topbar-body-nav-tab --parent"])[1]')
    .click();
  await page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[1]').click();
  await page
    .locator(
      'button[class="oxd-button oxd-button--medium oxd-button--secondary"]'
    )
    .click();
    const random =Math.random().toString(36).substring(2);
  await page
    .locator('(//input[@class="oxd-input oxd-input--active"])[2]')
    .fill(jobTitles[title]+random);
  await page
    .locator('textarea[placeholder="Type description here"]')
    .fill(jobData.jobDescription);
  await page.locator('textarea[placeholder="Add note"]').fill(jobData.jobNote);
  await page.locator('button[type="submit"]').click();
  //assertion

  await expect(page.locator("h6[class='oxd-text oxd-text--h6 orangehrm-main-title']")).toBeVisible()
});

}
