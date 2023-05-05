    import './CreateCollectionPage.css';

import Navigation from "../Navigation.js";
    import {useState} from "react";
    import UserCollection from "../Component/UserCollection.js";
    import Contextmenutest from "../Component/Contextmenutest.js";

function CreateCollectionPage() {
    const [collectionname, setcollectionname] = useState("");
    const [description, setdescription] = useState("");
    const [imageid, setimageid] = useState("");

    const CreateCollection = async () => {
        const userID = Number(localStorage.getItem("UserID"));
        const getData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ flduserId: userID, fldCollectionName: collectionname, fldCollectionDescription: description, fldCollectionThumbnail: imageid })
        };

        fetch('http://10.176.129.17:5001/api/Collections/CreateCollection', getData)
            .then(response=>response.text())
            .then(data => {
                // Debug
                console.log(data);
            });
    }

    return (
        <div className="CreateCollectionPage">
            <Navigation />

            <input type="text" placeholder="Collection Name"  value={collectionname} onChange={(event) => setcollectionname(event.target.value)}/>
            <input type="text" placeholder="Description"  value={description} onChange={(event) => setdescription(event.target.value)}/>
            <input type="text" placeholder="Image url" value={imageid} onChange={(event) => setimageid(event.target.value)}/>

            <button id = "btncreate" onClick={CreateCollection}>Create</button>
        </div>
    );
}
export default CreateCollectionPage;