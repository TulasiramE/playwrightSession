import {expect} from "@playwright/test"
import BaseAdminpage from "./BaseAdminpage"
class EmployeeStatus extends BaseAdminpage{
    constructor(page){
        super(page)
        this.employeeButton=page.locator('//a[text()="Employment Status"]')
        this.addInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.successMsg = page.locator('//h6[text()="Employment Status"]');
    }
    async adminBlock(){
       await this.navigateToJobSection(); 
       await this.employeeButton.click()
       await this.clickAddButton()

    }
    async fillEmpInput(data){
        await this.addInput.fill(data)
    }
    async saveEmp() {
        await this.clickSaveButton()
    }
    async succussMessage(){
        await expect(this.successMsg).toBeVisible()
    }
    async errormessage(){
        await this.errorMassage()
    }

}
export default EmployeeStatus;