import React, {useEffect, useState} from 'react';
import * as propTypes from 'prop-types';
import {
    AnonymousCredential,
    RemoteMongoClient,
    Stitch
} from "mongodb-stitch-browser-sdk";
import Block from "./Block";
import WaveLoading from 'react-loadingg';

Weekly.propTypes = {
    images: propTypes.arrayOf(propTypes.object)
};

function Weekly(props) {
    const [images, setImages] = useState(0);
    async function retrieve() {
        const appId = 'klasku-owyck';
        const client = Stitch.hasAppClient(appId)
            ? Stitch.getAppClient(appId)
            : Stitch.initializeAppClient(appId);
        if (!client.auth.isLoggedIn) {
            const credential = new AnonymousCredential();
            await client.auth.loginWithCredential(credential).catch(err => console.log(err));
        }
        const serviceClient = client.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas");
        const collection = serviceClient.db("hack").collection("all");
        const path = props.match.params.week;
        collection.find({path: path}).asArray().then(findings => {
            setImages(findings);
        }).catch(err => {
            setImages(1);
            console.log(err);
        });
    }
    useEffect(() => {
        retrieve()
    }, []);
    // Get
    // Retrieve from mongo
    if (Array.isArray(images)) {
        const feed = images.map((image, index) =>
            <Block
                image={image.mediaUrl}
                index={index}
                title={image.title}
                caption={image.caption}
                time={image.time}/>
        );
        return (
            <div className={"weekly"}>
                {feed}
            </div>
        );
    } else if (images === 0) {
        return <div className={"plain"}>
            Loading
        </div>
    }
    return <div>
        Sorry, we could not find this entry.
    </div>

}

export default Weekly;