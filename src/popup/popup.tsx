import React from "react";
import './popup.css'
import {useExtensionLogin} from '@multiversx/sdk-dapp/hooks'
import { ExtensionProvider } from "@multiversx/sdk-extension-provider";

const Popup = () => {
    const provider = ExtensionProvider.getInstance()
    const connectWallet = async () => {
        await provider.init();
        const address = await provider.login();
        console.log(address);
        console.log(provider.account);
    }
   
    return (
        <div>
            <h1 className="text-4xl text-green-500">Hello World</h1>
             <button className="py-2 px-4 rounded-lg my-3 bg-purple-500" onClick={() => connectWallet()}>connct wallet</button>
        </div>
    )
};

export default Popup;