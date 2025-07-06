import { test } from "@playwright/test";
import loginPompage from "../../Pageobject/LoginPOM";
let page;
let loginpage;
test.describe("login functinalities", async () => {
  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginpage = new loginPompage(page);
    await loginpage.gotoLoginPage();
  });
  test("login with valid credential", async () => {
    await loginpage.LoginOrg(
      process.env.ORG_USERNAME,
      process.env.ORG_PASSWORD
    );
    await loginpage.successMsg();
  });

  test("verify login with valid username and invalid password ", async () => {
    await loginpage.LoginOrg(
      process.env.ORG_USERNAME,
      process.env.WRG_PASSWORD
    );
    await loginpage.loginError();
  });

  test("verify login with invalid username and valid password", async () => {
    await loginpage.LoginOrg(
      process.env.WRG_USERNAME,
      process.env.ORG_PASSWORD
    );
    await loginpage.loginError();
  });

  test("verify login with invalid username and invalid password ", async () => {
    await loginpage.LoginOrg(
      process.env.WRG_USERNAME,
      process.env.WRG_PASSWORD
    );
    await loginpage.loginError();
  });
});
