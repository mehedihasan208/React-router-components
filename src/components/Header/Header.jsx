import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
    <div>
        <h2>Navbar</h2>
        <nav>
    <Link to="/">Home</Link>
    <Link to="/user">User</Link>
    <Link to = "/post">Post</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact Us</Link>
        </nav>
    </div>
    );
};

export default Header;