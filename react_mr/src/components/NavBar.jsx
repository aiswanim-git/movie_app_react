import {Link} from 'react-router-dom';
import "../css/Navbar.css";
function NavBar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className="navbar-brand">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="navbar-link">Home</Link>
            <Link to="/fav" className="navbar-link">Favorites</Link>
        </div>
    </nav>
}

export default NavBar