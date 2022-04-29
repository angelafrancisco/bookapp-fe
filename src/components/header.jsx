import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    return (
        <nav>
            <div className="nav-container left">
                <Link to="/" className="nav-logo"><img src="favicon.ico" alt="Logo" />.readME</Link>
                {props.isLoggedIn ?
                    <ul className="nav-links-list">
                        <li><Link to="/books" className="nav-link">My Books</Link></li>
                        <li><Link to="/books" className="nav-link">Search</Link></li>
                    </ul>
                :
                    <ul className="nav-links-list">
                        <li><Link to="/" className="nav-link">About</Link></li>
                        <li><Link to="/" className="nav-link">Features</Link></li>
                        <li><Link to="/login" className="nav-link">Search</Link></li>
                    </ul>
                }
            </div>
            <div className="nav-container right">
                <div onClick={toggleShowing} className="nav-hamburger-container">
                    <div className="nav-hamburger bar1"></div>
                    <div className="nav-hamburger bar2"></div>
                    <div className="nav-hamburger bar3"></div>
                </div>
                {props.isLoggedIn ?
                    <ul className="nav-links-list">
                        <li><Link to="/books" className="outline-btn account">Account</Link></li>
                        <li><Link to="/" className="logout"><button onClick={() => props.setIsLoggedIn(false)} className="solid-btn">Logout</button></Link></li>
                    </ul>
                :
                <ul className="nav-links-list">
                        <li><Link to="/login" className="outline-btn">Login</Link></li>
                        <li><Link to="/register" className="solid-btn">Register</Link></li>
                    </ul>
                }
            </div>
        </nav >
    )
}

export default Header;