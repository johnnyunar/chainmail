import './App.css';

import {useEffect, useState} from "react";
import {ethers} from "ethers";
import {greeterAbi, greeterAddress} from "../utils/constants";
import {useAutoRefresh, useBalance, useBlock} from "../utils/Store";


/**
 * The Header Component - currently shows up at the HP.
 * @returns {JSX.Element}
 */

export const greetMe = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const greeterContract = new ethers.Contract(greeterAddress, greeterAbi, provider);
    return await greeterContract.greet();
}

const Greeter = () => {
    const [greeting, setGreeting] = useState("");
    const [newGreetings, setNewGreetings] = useState("");

    const autoRefresh = useAutoRefresh();
    const block = useBlock();
    const balance = useBalance();

    useEffect(() => {
        let interval;

        async function updateGreeting() {
            const greetMsg = await greetMe();
            setGreeting(greetMsg);
        }

        if (!greeting) {
            updateGreeting();
        }

        if (autoRefresh) {
            interval = setInterval(() => {
                updateGreeting();
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [autoRefresh, greeting])

    const updateGreets = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const greeterContract = new ethers.Contract(greeterAddress, greeterAbi, provider);
        const contractWithSigner = greeterContract.connect(await provider.getSigner());

        await contractWithSigner.setGreeting(newGreetings)
            .then(document.getElementById("greetingsInput").value = "");
    }

    return (
        <div className="Greeter mailbox">
            <h1>Set a greeting for others here!</h1>
            <h2>
                Current Greetings:&nbsp;
                <b>{greeting}</b>
            </h2>
            <p>Your ETH Balance is: <b>{balance}</b></p>
            <p>Current ETH Block is: {block}</p>
            <input id="greetingsInput" placeholder="New greetings" type="text"
                   onChange={(e) => setNewGreetings(e.target.value)}
            />
            <button className="update-greetings-button" onClick={() => updateGreets()}>
                Update Greetings
            </button>
        </div>
    )
}

export default Greeter;