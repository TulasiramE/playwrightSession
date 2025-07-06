import {expect} from "@playwright/test"
import BaseAdminpage from "./BaseAdminpage"
class JobCategory extends BaseAdminpage{
    constructor(page){
        super(page)
        this.categoryButton=page.locator('//a[text()="Job Categories"]')
        this.addInput = page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.successMsg = page.locator('//h6[text()="Job Categories"]');
    }
    async adminBlock(){
       await this.navigateToJobSection(); 
       await this.categoryButton.click()
       await this.clickAddButton()

    }
    async fillJobCategoryInput(data){
        await this.addInput.fill(data)
    }
    async saveJobCategory() {
        await this.clickSaveButton()
    }
    async succussMessage(){
        await expect(this.successMsg).toBeVisible()
    }
    async errormessage(){
        await this.errorMassage()
    }

}
export default JobCategory;