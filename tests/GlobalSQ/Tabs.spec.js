import { test, expect} from "@playwright/test";

test("GlobalSQ Tabs", async ({ page }) => {
    test.slow()
    await page.goto("/");
    await page.getByRole('link',{name:/Demo Testing Site/i}).click();
    await expect(page).toHaveURL("https://www.globalsqa.com/demo-site/");
})




