import './App.css';
import {useState} from "react";
import {ethers} from "ethers";
import {databaseAbi, databaseAddress} from "../utils/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


/**
 * The Message Box Component - used in the app inbox.
 * @returns {JSX.Element}
 */
const MessageBox = (props) => {
    const [address, setAddress] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const sendMessage = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const databaseContract = new ethers.Contract(databaseAddress, databaseAbi, provider);
        let signer = await provider.getSigner();
        const contractWithSigner = databaseContract.connect(signer);

        await contractWithSigner.sendMessage(address, subject, body).then(() => {
            setAddress("");
            setSubject("");
            setBody("");
        });
    }

    return (
        <div id="ComposeBox" className="ComposeBox mailbox">
            <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Recipient Address"
                   className="address-input"/>
            <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject"
                   className="subject-input"/>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body goes here."/>

            <button className="text-glow" onClick={() => sendMessage()}><FontAwesomeIcon icon="paper-plane"/>
            </button>

        </div>
    );
}

export default MessageBox;