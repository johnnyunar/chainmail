import './App.css';

import {getWalletInfo} from "../utils/wallet";
import {ethers} from "ethers";
import {useNavigate} from "react-router-dom";

const ConnectWalletButton = () => {
    let navigate = useNavigate();

    const connectWalletHandler = async (event) => {
        event.preventDefault();
        const {ethereum} = window;

        if (!ethereum) {
            alert("Please Install MetaMask!")
        }

        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await getWalletInfo(provider).then(navigate("/app", {replace: true}));
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <button onClick={connectWalletHandler} className='cta-button center connect-wallet-button'>
            Connect Wallet
        </button>
    )
}

export default ConnectWalletButton;