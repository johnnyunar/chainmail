import {getCurrentAccount, setBalance, setBlock, setCurrentAccount, setInboxMessages, setSentMessages} from "./Store";
import {ethers} from "ethers";
import {databaseAbi, databaseAddress} from "./constants";


export const loadInboxMessages = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const databaseContract = new ethers.Contract(databaseAddress, databaseAbi, provider);
    let signer = await provider.getSigner();
    const contractWithSigner = databaseContract.connect(signer);

    let messages = await contractWithSigner.readInboxMessages(signer.getAddress());
    setInboxMessages(messages);
    return messages;
}

const loadSentMessages = async (provider) => {
    const databaseContract = new ethers.Contract(databaseAddress, databaseAbi, provider);
    let signer = await provider.getSigner();
    const contractWithSigner = databaseContract.connect(signer);

    let messages = await contractWithSigner.readInboxMessages();
    setSentMessages(messages);
    return messages;
}

export const getWalletInfo = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const balance = await provider.getBalance(accounts[0]);
    const balanceInEther = ethers.utils.formatEther(balance);
    const block = await provider.getBlockNumber();

    setBlock(block);
    setBalance(balanceInEther);

    setCurrentAccount(accounts[0]);

    await loadInboxMessages(provider);
}

export const checkWalletIsConnected = async () => {
    const {ethereum} = window;

    if (!ethereum) {
        alert("Make sure you have MetaMask installed!");
        return;
    } else {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        try {
            await signer.getAddress();
            await getWalletInfo(provider);
        } catch (e) {
            if (getCurrentAccount()) {
                setCurrentAccount("");
            }

        }

    }
}