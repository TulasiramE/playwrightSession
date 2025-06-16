import { test, expect } from '@playwright/test'; 

test("using switch condition",async({page,browserName})=>{

    switch(browserName){
        case "chromium":{
            await page.goto("https://www.flipkart.com/");
            await page.close();
            break;
        }
        case "firefox":{
            await page.goto("https://www.amazon.in/");
            await page.close();
            break;
        }
        default:{
            console.log("false")
        }
    }
})
