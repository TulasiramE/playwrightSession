import { expect } from "@playwright/test";
class BaseAdminpage {
  constructor(page) {
    this.page = page;
    this.adminButton = page.locator(
      'a[href="/web/index.php/admin/viewAdminModule"]'
    );
    this.jobButton = page.locator('//span[text()="Job "]');
    this.addButton = page.locator('//button[text()=" Add "]');
    this.saveButton = page.locator('button[type="submit"]');
    this.errorMsg = page.locator('//span[text()="Required"]')
  }
  async navigateToJobSection() {
    await this.adminButton.click();
    await this.jobButton.click();
  }
  async clickAddButton() {
    await this.addButton.click();
  } 
  async clickSaveButton() {
    await this.saveButton.click();
  }
  async errorMassage(){
   await expect(this.errorMsg).toBeVisible()
  }
}
export default BaseAdminpage;
