import {expect} from "@playwright/test"
import BaseAdminpage from "./BaseAdminpage"
class WorkShift extends BaseAdminpage{
    constructor(page){
        super(page)
        this.workshiftButton=page.locator('//a[text()="Work Shifts"]')
        this.addInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.successMsg = page.locator('//h6[text()="Work Shifts"]');
    }
    async adminBlock(){
       await this.navigateToJobSection(); 
       await this.workshiftButton.click()
       await this.clickAddButton()

    }
    async fillWorkShiftInput(data){
        await this.addInput.fill(data)
    }
    async saveWorkShift() {
        await this.clickSaveButton()
    }
    async successMessage(){
        await expect(this.successMsg).toBeVisible()
    }
    async errormessage(){
        await this.errorMassage()
    }

}
export default WorkShift;