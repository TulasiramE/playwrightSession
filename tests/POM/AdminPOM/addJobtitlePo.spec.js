import { test } from "@playwright/test"
import JobtitleClass from "../../../Pageobject/AdminPOM/jobTitlePom"
import LoginPOM from "../../../Pageobject/LoginPOM"

let page;
let LoginPage;
let adminPage;
let jobTitleData;

test.describe("addjobtiltes Functionalities",async()=>{
    test.beforeEach(async({browser})=>{
        page = await browser.newPage();
        LoginPage =new LoginPOM(page);
        adminPage=new JobtitleClass(page);
        await LoginPage.gotoLoginPage()
        await LoginPage.LoginOrg(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    })
    test("Add the Job Title ",async()=>{
        await adminPage.adminBlock();
        jobTitleData="PHP"+Math.random().toString(36).substring(2,7)
        await adminPage.fillJobInput(jobTitleData)
        await adminPage.saveJobTitle()
        await adminPage.succussMessage()
    })
    test("verify the input error message",async()=>{
        await adminPage.adminBlock();
        await adminPage.saveJobTitle();
        await adminPage.errormessage()

    })
})
