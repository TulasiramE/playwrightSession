import {test} from "@playwright/test"
import LoginPOM from "../../../Pageobject/LoginPOM"
import PayGradeClass from "../../../Pageobject/AdminPOM/payGradesPom";
let page;
let loginPage;
let paygradepage;
test.describe("paygrade functionalities",async()=>{
    test.beforeEach(async({browser})=>{
        page=await browser.newPage()
        loginPage=new LoginPOM(page)
        paygradepage=new PayGradeClass(page) 
        await loginPage.gotoLoginPage()
        await loginPage.LoginOrg(process.env.ORG_USERNAME, process.env.ORG_PASSWORD)
    })
    test("add pay grades",async()=>{
        await paygradepage.navigatetoAdmin()
        await paygradepage.fillpaygarde("Grade10")
        await paygradepage.saveBtn()
        await paygradepage.successMessage()
    })
    test.only("verify input error masssage",async()=>{
        await paygradepage.navigatetoAdmin()
        await paygradepage.saveBtn() 
        await paygradepage.errormessage()
    })
})