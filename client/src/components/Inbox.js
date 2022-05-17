import './App.css';
import Header from "./Header";
import Footer from "./Footer";

function Inbox() {
    return (
        <div>
            <Header></Header>
            <input className="message-input"></input>
            <Footer></Footer>
        </div>
    );
}

export default Inbox;