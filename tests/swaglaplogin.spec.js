import { test, expect } from '@playwright/test';
import data from "../testData/loginData.json"

test("verify the login with valid credentials", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/index.html");
await page.locator('input[data-test="username"]').fill(data.username);
await page.locator('input[type="password"]').fill(data.password);
await page.locator('input[type="submit"]').click();
//assertion

await expect(page.locator("div.product_label")).toBeVisible()
})
test("verify the login with valid username and invalid password", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/index.html");
await page.locator('input[data-test="username"]').fill(data.username);
await page.locator('input[type="password"]').fill(data.wrongpassword);
await page.locator('input[type="submit"]').click();
//assertion

await expect(page.locator('h3[data-test="error"]')).toBeVisible()
})
test("verify the login with invalid username and valid password", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/index.html");
await page.locator('input[data-test="username"]').fill(data.wrongusername);
await page.locator('input[type="password"]').fill(data.password);
await page.locator('input[type="submit"]').click();
//assertion

await expect(page.locator('h3[data-test="error"]')).toBeVisible()
})
test("verify the login with invalid username and invalid password", async({page})=>{
await page.goto("https://www.saucedemo.com/v1/index.html");
await page.locator('input[data-test="username"]').fill(data.wrongusername);
await page.locator('input[type="password"]').fill(data.wrongpassword);
await page.locator('input[type="submit"]').click();
//assertion

await expect(page.locator('h3[data-test="error"]')).toBeVisible()
})