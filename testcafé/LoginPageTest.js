import {ClientFunction, Selector} from 'testcafe';
import GetBackendEndpoint from "../src/config.js";

fixture("testing the login page").page(GetBackendEndpoint())

const loginclick = Selector('#btnLogin')
const emailinput = Selector('#username')
const passwordinput = Selector('#password')
const registerclick = Selector('register')

test("testing input fields to see if they are writable", async t =>{

    await t
        .typeText(emailinput, 'test')
        .expect(emailinput.value).eql('test')
})

test("clicking the login button with existing account details, and checking if the page redirects to /overview", async t =>{

    await t
        .typeText(emailinput, 'tcggmeister@gmail.com')
        .typeText(passwordinput, 'goodpassword123')
        .setNativeDialogHandler(() => true)
        .click(loginclick)
        const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql(GetBackendEndpoint() + '/overview')

})

test("clicking the login button with wrong password to see if wrong login popup appears", async t =>{

    await t
        .typeText(emailinput, 'tcggmeister@gmail.com')
        .typeText(passwordinput, 'a')
        .setNativeDialogHandler(() => true)
        .setNativeDialogHandler(()=> true)
        .click(loginclick)

    const dialoghistory = await t.getNativeDialogHistory();

    await t
        .expect(dialoghistory[0].type).eql('alert')
        .expect(dialoghistory[0].text).eql('Invalid email and password combination. Did you make a spelling mistake?')

})

test("clicking the register button and checking if the page redirects to /register", async t =>{

    await t
        .setNativeDialogHandler(() => true)
        .click(registerclick)
    const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql(GetBackendEndpoint() + '/register')

})