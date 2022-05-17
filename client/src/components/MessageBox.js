import './App.css';
import {useCurrentMessageIndex, useInboxMessages} from "../utils/Store";
import SanitizeHTML from "./SanitizeHTML";


/**
 * The Message Box Component - used in the app inbox.
 * @returns {JSX.Element}
 */
const MessageBox = () => {

    let message = useInboxMessages()[useCurrentMessageIndex()];
    if (message) {
        return (
            <div className="MessageBox mailbox">
                <h2>Subject: {message.subject}</h2>
                <h3>From: {message.sender}</h3>
                <SanitizeHTML html={message.msg}/>
            </div>
        );
    }
}

export default MessageBox;