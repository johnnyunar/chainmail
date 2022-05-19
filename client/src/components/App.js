import './App.css';
import Home from "./Home";
import {faBars, faEnvelope, faHandPeace, faPaperPlane, faPencil, faUser} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MailClient from "./MailClient";
import Header from "./Header";

library.add(faBars, faUser, faEnvelope, faPaperPlane, faHandPeace, faPencil);

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="app" element={<MailClient/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;