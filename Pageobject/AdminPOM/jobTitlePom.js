import { expect } from "@playwright/test"; 
import BaseAdminpage from "./BaseAdminpage";
class JobtitleClass extends BaseAdminpage{
    constructor(page){
        super(page)
        this.jobTitles=page.locator('//a[text()="Job Titles"] ')
        this.jobInput =page.locator('(//input[@class="oxd-input oxd-input--active"])[2]')
        this.successMsg=page.locator('//h6[text()="Job Titles"]')
    }
    async adminBlock(){
       await this.navigateToJobSection(); 
       await this.jobTitles.click()
       await this.clickAddButton()

    }
    async fillJobInput(data){
        await this.jobInput.fill(data)
    }
    async saveJobTitle() {
        await this.clickSaveButton()
    }
    async succussMessage(){
        await expect(this.successMsg).toBeVisible()
    }
    async errormessage(){
        await this.errorMassage()
    }
}

export default JobtitleClass 