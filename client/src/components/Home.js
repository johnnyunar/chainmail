import './App.css';
import armor3d from '../assets/armor3d.png';
import Header from "./Header";
import Footer from "./Footer";
import ConnectWalletButton from "./ConnectWalletButton";

function Home() {
    return (
        <div>
            <Header/>
            <section className="hero bg-blur">
                <div className="hero-content">
                    <img className="hero-image" src={armor3d} alt="Chainmail Armor"/>
                    <h1>Chainmail</h1>
                    <h3>The Web3 mailing solution you have been waiting for.</h3>
                    {ConnectWalletButton()}
                </div>
            </section>
            <section id="about" className="about">
                <div className="text">
                    <h2>About</h2>
                    <p>Chainmail is the secure solution to today's outdated email protocol.</p>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;