import './App.css';

import {connectWalletHandler} from "../utils/wallet";

const ConnectWalletButton = () => {
    return (
        <button onClick={connectWalletHandler} className='cta-button center connect-wallet-button'>
            Connect Wallet
        </button>
    )
}

export default ConnectWalletButton;