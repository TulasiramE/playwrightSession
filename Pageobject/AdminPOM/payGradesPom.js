import { expect } from "@playwright/test";
import BaseAdminpage from "./BaseAdminpage";
class PayGradeClass extends BaseAdminpage {
  constructor(page) {
    super(page);
    this.payGradeButton = page.locator('//a[text()="Pay Grades"]');
    this.payGradeInput = page.locator(
      '(//input[@class="oxd-input oxd-input--active"])[2]'
    );
    this.successMsg = page.locator('//h6[text()="Edit Pay Grade"]');
  }
  async navigatetoAdmin(){
    await this.navigateToJobSection()
    await this.payGradeButton.click()
    await this.clickAddButton()
  }
  async fillpaygarde(data){
     await this.payGradeInput.fill(data)
  }
  async saveBtn(){
    await this.clickSaveButton()
  }
  async successMessage(){
    await expect(this.successMsg).toBeVisible()
  }
  async errormessage(){
    await this.errorMassage()
    }
}
export default PayGradeClass;
