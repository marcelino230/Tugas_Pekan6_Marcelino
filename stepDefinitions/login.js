import { Given, Then, When } from "@wdio/cucumber-framework"

import Page from "../pageObjects/page.js";
import loginPage from "../pageObjects/loginPage.js";
import dashboardPage from "../pageObjects/dashboardPage.js";
import utils from "../helper/utils.js";

const page = new Page();

Given('I am on the login page', async () => {
    await page.open()
    utils.pause(1)
})

When('I input email as {string} and password as {string}', async (email, password) => {
    await loginPage.login(email,password)
})

When('I click on button login', async () => {
    await loginPage.clickLoginBtn()
})

Then('I must navigate to dashboard page', async () => {
    await dashboardPage.getHaiText()
})

Then('I must remain on login page displaying a message', async () => {
    await loginPage.getErrMsgIncorrectPass()
})