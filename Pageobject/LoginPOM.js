import { expect } from "@playwright/test";
class Login{
    constructor(page){
        this.page = page;
        this.usernameInput=page.locator("input[name='username']")
        this.passwordInput=page.locator("input[type='password']")
        this.button=page.locator("button[type='submit']")
        this.errorMassage=page.locator("//p[text()='Invalid credentials']")
    }
    async gotoLoginPage(){
        await this.page.goto("/web/index.php/auth/login");
    }
    async LoginOrg(username,password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.button.click()
    }
    async loginError(){
        await expect(this.errorMassage).toBeVisible()
    }
    async successMsg(){
        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index",{timeout:5000})
    }

}
export default Login;