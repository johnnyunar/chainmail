import './App.css';
import Home from "./Home";
import {faBars, faEnvelope, faHandPeace, faPaperPlane, faPencil, faUser} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MailClient from "./MailClient";
import HttpsRedirect from 'react-https-redirect';

library.add(faBars, faUser, faEnvelope, faPaperPlane, faHandPeace, faPencil);

const App = () => {
    return (
        <HttpsRedirect>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="app" element={<MailClient/>}/>
                </Routes>
            </BrowserRouter>
        </HttpsRedirect>
    );
}

export default App;