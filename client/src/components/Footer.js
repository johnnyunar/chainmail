import './App.css';
import {getYear} from '../utils/functions';

/**
 * The Footer Component - currently shows up at the HP and in the inbox.
 * @returns {JSX.Element}
 */
const Footer = () => {
    return (
        <footer>
            &copy; Jan Unar {getYear()}
        </footer>
    );
}

export default Footer;