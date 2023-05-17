import {ClientFunction, Selector} from 'testcafe';
import {useParams} from "react-router-dom";

//need to make sure it loads some test users collections and that it has the assigned collectionid

fixture("testing the create collectible page").page("http://localhost:3000/6/add")


const btncreateclick = await Selector('btncreate')
const attributenameinput = await Selector('Attributename')
const imageurlinput = await Selector('image')

test("testing input fields to see if they are writable", async t =>{

    await t
        .typeText(attributenameinput, 'test')
        .typeText(imageurlinput, 'ahh')
        .expect(attributenameinput.value).eql('test')
        .expect(imageurlinput.value).eql('ahh')
})

//need to fix adding collectibles

/*
test("clicking the add collection button", async t =>{
    await t
        .click(btncreateclick)
    const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql('http://localhost:3000/collection/'++'/add')
})
 */