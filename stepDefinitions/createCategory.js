import { Before, Given, Then, When } from "@wdio/cucumber-framework";
import categoryPage from "../pageObjects/categoryPage.js";
import dashboardPage from "../pageObjects/dashboardPage.js";
import utils from "../helper/utils.js";
import loginPage from "../pageObjects/loginPage.js";
import Page from "../pageObjects/page.js";

const page = new Page();

Before(async () => {
    await page.open();
    utils.pause(1);

        // Cek apakah pengguna sudah login sebelumnya
        const isLoggedIn = await dashboardPage.isLoggedIn();
    
        if (!isLoggedIn) {
            // Jika belum login, lakukan login
            await loginPage.login('abcd@gmail.com', '12345678');
            await loginPage.clickLoginBtn();
        }

});

Given('I am on the admin dashboard', async () => {
    await dashboardPage.getHaiText()
});

When('I click on the "kategori" menu item', async () => {
    await dashboardPage.clickKategoriBtn();
});

When('I click on the "tambah" button on the category page', async () => {
    await categoryPage.clickTambahBtn();
});

When('I input nama as {string} and deskripsi as {string}', async (nama, deskripsi) => {
    await categoryPage.simpan(nama, deskripsi);
});

When('I click on the "simpan" button', async () => {
    await categoryPage.clickSimpanBtn();
});

Then('I should see a success alert', async () => {
    await categoryPage.getSuccessMsg();
});

Then('I should see an error message for the "nama" field', async () => {
    await categoryPage.getErrMsgEmptyName();
});

