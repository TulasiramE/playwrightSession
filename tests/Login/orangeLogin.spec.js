import { test, expect } from '@playwright/test';
 let menuItems={
  menu1:"Admin",
  menu2:"PIM",
  menu3:"Leave",
  menu4:"Time",
  menu5:"Recruitment",
  menu6:"My Info",
 }
 for(let item in menuItems){
  test(`${menuItems[item]}`, async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.locator('input[name="username"]').fill(process.env.ORG_USERNAME);
  await page.locator('input[type="password"]').fill(process.env.ORG_PASSWORD);
  await page.locator('button[type="submit"]').click();
  await expect(page.getByRole('link', { name: menuItems[item] })).toBeVisible({ force: true });
});
    
  }
