import './App.css';
import Tooltip from "./Tooltip";
import {setCurrentMessageIndex} from "../utils/Store";


/**
 * The Inbox Row Component - used in the app inbox.
 * @returns {JSX.Element}
 */
const InboxRow = (props) => {
    if (props.inboxMessages) {
        return props.inboxMessages.map(function (msg, i) {
            return (
                <li key={i} onClick={() => setCurrentMessageIndex(i)}>
                    <Tooltip content={"From " + msg.sender} direction="right">
                        {msg[2].slice(0, 20)}
                    </Tooltip>
                </li>
            )
        });
    }
}

export default InboxRow;