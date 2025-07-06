import {test} from "@playwright/test"
import LoginPOM from "../../../Pageobject/LoginPOM"
import workShift from "../../../Pageobject/AdminPOM/workShiftPom"
let page;
let loginPage;
let workShiftpage;
test.describe("paygrade functionalities",async()=>{
    test.beforeEach(async({browser})=>{
        page=await browser.newPage()
        loginPage=new LoginPOM(page)
        workShiftpage=new workShift(page) 
        await loginPage.gotoLoginPage()
        await loginPage.LoginOrg(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    })
    test("add WorkShifts",async()=>{
        await workShiftpage.adminBlock()
        await workShiftpage.fillWorkShiftInput("General-shift")
        await workShiftpage.saveWorkShift()
        await workShiftpage.successMessage()
    })
    test("verify input error masssage",async()=>{
        await workShiftpage.adminBlock()
        await workShiftpage.saveWorkShift()
        await workShiftpage.errormessage()
    })
})