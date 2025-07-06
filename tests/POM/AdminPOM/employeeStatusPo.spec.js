import {test} from "@playwright/test"
import LoginPOM from "../../../Pageobject/LoginPOM"
import EmployeeStatus from "../../../Pageobject/AdminPOM/EmploymentStatusPom";
let page;
let loginPage;
let employeStatuspage;
test.describe("paygrade functionalities",async()=>{
    test.beforeEach(async({browser})=>{
        page=await browser.newPage()
        loginPage=new LoginPOM(page)
        employeStatuspage=new EmployeeStatus(page) 
        await loginPage.gotoLoginPage()
        await loginPage.LoginOrg(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    })
    test("add EmployeeStatus",async()=>{
        await employeStatuspage.navigatetoAdmin()
        await employeStatuspage.fillEmpInput("part-time")
        await employeStatuspage.saveEmp()
        await employeStatuspage.successMessage()
    })
    test.only("verify input error masssage",async()=>{
        await employeStatuspage.navigatetoAdmin()
        await employeStatuspage.saveEmp()
        await employeStatuspage.errormessage()
    })
})