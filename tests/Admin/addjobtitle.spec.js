import { test, expect } from "@playwright/test";
import logindata from "../../testData/orangelogin.json";
import jobData from "../../testData/jobtitledata.json";
test("adding the job title functionalities", async ({ page }) => {
  await page.goto(
    "/web/index.php/auth/login"
  );
  await page.locator("input[name='username']").fill(logindata.username);
  await page.locator("input[type='password']").fill(logindata.password);
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
  await page
    .locator('(//input[@class="oxd-input oxd-input--active"])[2]')
    .fill(jobData.jobtitle);
  await page
    .locator('textarea[placeholder="Type description here"]')
    .fill(jobData.jobDescription);
  await page.locator('textarea[placeholder="Add note"]').fill(jobData.jobNote);
  await page.locator('button[type="submit"]').click();
  //assertion

  await expect(page.locator("h6[class='oxd-text oxd-text--h6 orangehrm-main-title']")).toBeVisible()
});
