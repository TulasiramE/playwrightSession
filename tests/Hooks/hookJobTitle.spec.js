import { test, expect } from "@playwright/test";
let jobTitleString;
test.describe("add and delete functionalities", () => {
   test.beforeEach(async({page})=>{
    await page.goto("/");
    await page.locator("input[name='username']").fill(process.env.ORG_USERNAME);
    await page.locator("input[type='password']").fill(process.env.ORG_PASSWORD);
    await page.locator("button[type='submit']").click();
})

test.afterEach(async({page})=>{
  await page.goto("/");
      await page
      .locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
      .click();
    await page.locator('//span[text()="Job "]').click();
    await page.locator('//a[text()="Job Titles"]').click();
    await page.waitForTimeout(1000);
    await page.locator(`//div[text()="${jobTitleString}"]/ancestor::div[@class="oxd-table-card"]//button[@type="button"]/i[@class="oxd-icon bi-trash"]`).click()
    await page.locator('//button[text()=" Yes, Delete "]').click()
    await expect(page.locator('//p[text()="Successfully Deleted"]')).toBeVisible();

})
  test("check add and delete functinalities in jobTitle section", async ({
    page,
  }) => {
    await page
      .locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
      .click();
    await page.locator('//span[text()="Job "]').click();
    await page.locator('//a[text()="Job Titles"]').click();
    await page
      .locator(
        '//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]'
      )
      .click();
    const random = Math.random().toString(36).substring(2);
    jobTitleString ="Api" + random
    await page
      .locator('(//input[@class="oxd-input oxd-input--active"])[2]')
      .fill(jobTitleString);
    await page.locator('//button[@type="submit"]').click();
    await expect(page.locator('//h6[text()="Job Titles"]')).toBeVisible();
  });
});
