import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="nav-logo"><img src="favicon.ico" alt="Logo" />.readME</Link>
            </div>
            <div className="nav-container">
                {/* mobile hamburger nav */}
                <div onClick={toggleShowing} className="nav-hamburger-container">
                    <div className="nav-hamburger bar1"></div>
                    <div className="nav-hamburger bar2"></div>
                    <div className="nav-hamburger bar3"></div>
                </div>
                {props.isLoggedIn ?
                    <ul className="nav-links-list isloggedin">
                        <li><Link to="/books" className="nav-link">Home</Link></li>
                        <li><Link to="/books" className="nav-link">My Books</Link></li>
                        <li><Link to="/books" className="nav-link">Search</Link></li>
                        <li><Link to="/" className="logout"><button onClick={() => props.setIsLoggedIn(false)} className="solid-btn">Logout</button></Link></li>
                    </ul>
                    :
                    <ul className="nav-links-list guest">
                        <li><Link to="/" className="nav-link">About</Link></li>
                        <li><Link to="/login" className="nav-link">Search</Link></li>
                        <li><Link to="/login" className="outline-btn">Login</Link></li>
                        <li><Link to="/register" className="solid-btn">Register</Link></li>
                    </ul>
                }
            </div>
        </nav >
    )
}

export default Header;