import { test, expect } from "@playwright/test";
import logindata from "../../testData/orangelogin.json";
test("adding the paygrades functionalities", async ({ page }) => {
  await page.goto("/web/index.php/auth/login");
  await page.locator("input[name='username']").fill(logindata.username);
  await page.locator("input[type='password']").fill(logindata.password);
  await page.locator("button[type='submit']").click();
  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  await page.locator('(//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"])[1]').click();
  await page.locator('text=Job').click();
  await page.locator('text=Employment Status').click()
  await page.locator('button[class="oxd-button oxd-button--medium oxd-button--secondary"]').click()
  await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill("fulltime-emplyee")
  await page.locator('button[type="submit"]').click()
  await expect(page.locator('h6[class="oxd-text oxd-text--h6 orangehrm-main-title"]')).toBeVisible()
});