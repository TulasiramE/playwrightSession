import {test} from "@playwright/test"
import LoginPOM from "../../../Pageobject/LoginPOM"
import jobCatagery from "../../../Pageobject/AdminPOM/jobCatageryPom";
let page;
let loginPage;
let jobCategorypage;
test.describe("paygrade functionalities",async()=>{
    test.beforeEach(async({browser})=>{
        page=await browser.newPage()
        loginPage=new LoginPOM(page)
        jobCategorypage=new jobCatagery(page) 
        await loginPage.gotoLoginPage()
        await loginPage.LoginOrg(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    })
    test("add Jobcategories",async()=>{
        await jobCategorypage.adminBlock()
        await jobCategorypage.fillJobCategoryInput("Dev-oops")
        await jobCategorypage.saveJobCategory()
        await jobCategorypage.successMessage()
    })
    test("verify input error masssage",async()=>{
        await jobCategorypage.adminBlock()
        await jobCategorypage.saveJobCategory()
        await jobCategorypage.errormessage()
    })
})