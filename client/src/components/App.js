import './App.css';
import {useEffect, useState} from 'react';
import Home from "./Home";

import {useAutoRefresh, useBalance, useCurrentAccount, useInboxMessages} from "../utils/Store";
import {checkWalletIsConnected} from "../utils/wallet";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faEnvelope, faHandPeace, faPaperPlane, faPencil, faUser} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import Tooltip from "./Tooltip";
import logo from "../assets/armor250.png";
import InboxRow from "./InboxRow";
import Greeter from "./Greeter";
import MessageBox from "./MessageBox";
import ComposeBox from "./ComposeBox";

library.add(faBars, faUser, faEnvelope, faPaperPlane, faHandPeace, faPencil);

const App = () => {
    const currentAccount = useCurrentAccount();
    const balance = useBalance();
    const inboxMessages = useInboxMessages();
    const autoRefresh = useAutoRefresh();
    const [currentView, setCurrentView] = useState("inbox");

    useEffect(() => async () => {
        let interval;
        if (autoRefresh) {
            interval = setInterval(() => {
                checkWalletIsConnected();
            }, 5000);
        }

        return () => clearInterval(interval);
    }, [autoRefresh, currentAccount])


    if (!currentAccount) {
        return (
            <Home/>
        )
    }

    return (
        <div className="App">
            <div className="sidemenu">
                <img width="75px" className="sidemenu-logo" src={logo} alt="Chainmail Logo"/>
                <ul className="sidemenu-list">
                    <Tooltip content={currentAccount + " (" + balance + " ETH)"} direction="right">
                        <li className="sidemenu-item">
                            <FontAwesomeIcon icon="user"/>
                            &nbsp;{currentAccount.slice(0, 5)}...{currentAccount.slice(35)}
                        </li>
                    </Tooltip>
                    <li onClick={() => setCurrentView("inbox")} className="sidemenu-item">
                        <FontAwesomeIcon icon="envelope"/>&nbsp;Inbox
                    </li>
                    <li onClick={() => setCurrentView("sent")} className="sidemenu-item">
                        <FontAwesomeIcon icon="paper-plane"/>&nbsp;Sent (soon)
                    </li>
                    <li onClick={() => setCurrentView("compose")} className="sidemenu-item">
                        <FontAwesomeIcon icon="pencil"/>&nbsp;Compose
                    </li>
                    <li onClick={() => setCurrentView("greetings")} className="sidemenu-item">
                        <FontAwesomeIcon icon="hand-peace"/>&nbsp;Greetings
                    </li>
                </ul>
            </div>
            <div className="main">
                <div className="inbox">
                    Inbox
                    <hr/>
                    <ul>
                        <InboxRow inboxMessages={inboxMessages}/>
                    </ul>
                </div>
                <div className="AppContent">
                    {currentView === 'inbox' && <MessageBox/>}
                    {currentView === 'sent' && <MessageBox/>}
                    {currentView === 'compose' && <ComposeBox/>}
                    {currentView === 'greetings' && <Greeter/>}
                </div>
            </div>
        </div>
    );
}

export default App;