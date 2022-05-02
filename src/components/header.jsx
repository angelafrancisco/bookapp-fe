import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => {
        setShowing(!showing)
    }
    return (
        <nav className={showing ? "open" : ""}>
            {props.isLoggedIn ? 
            <>
                <div className="nav-container left">
                    <Link to="/" className="nav-logo"><img src="favicon.ico" alt="Logo" />.readME</Link>
                    <ul className={`nav-links-list ${showing ? "open" : ""}`}>
                        <li><Link to="/books" className="nav-link">My Books</Link></li>
                        <li><Link to="/books" className="nav-link">Search</Link></li>
                    </ul>
                </div>
                <div className="nav-container right">
                    <ul className={`nav-links-list ${showing ? "open" : ""}`}>
                        <li><Link to="/books" className="outline-btn account">Account</Link></li>
                        <li><Link to="/" className="logout"><button onClick={() => props.setIsLoggedIn(false)} className="solid-btn">Logout</button></Link></li>
                    </ul>
                </div>
                <div className="mobile-menu">
                    <div onClick={toggleShowing} className={`nav-hamburger-container ${showing ? "move" : ""}`}>
                        <div className="nav-hamburger bar1"></div>
                        <div className="nav-hamburger bar2"></div>
                        <div className="nav-hamburger bar3"></div>
                    </div>
                    <ul className={`nav-links-list ${showing ? "open-mobile" : ""}`}>
                        <li onClick={toggleShowing}><Link to="/books" className="nav-link">My Books</Link></li>
                        <li onClick={toggleShowing}><Link to="/books" className="nav-link">Search</Link></li>
                    </ul>
                    <ul className={`nav-links-list btns ${showing ? "open-mobile" : ""}`}>
                        <li onClick={toggleShowing}><Link to="/books" className="outline-btn account">Account</Link></li>
                        <li onClick={toggleShowing}><Link to="/" className="logout solid-btn" onClick={() => props.setIsLoggedIn(false)}>Logout</Link></li>
                    </ul>
                </div>
            </>
            :
            <>
                <div className="nav-container left">
                    <Link to="/" className="nav-logo"><img src="favicon.ico" alt="Logo" />.readME</Link>
                    <ul className={`nav-links-list ${showing ? "open" : ""}`}>
                        <li><Link to="/" className="nav-link">About</Link></li>
                        <li><Link to="/" className="nav-link">Features</Link></li>
                        <li><Link to="/login" className="nav-link">Search</Link></li>
                    </ul>
                </div>
                <div className="nav-container right">
                    <ul className={`nav-links-list ${showing ? "open" : ""}`}>
                        <li><Link to="/login" className="outline-btn">Login</Link></li>
                        <li><Link to="/register" className="solid-btn">Register</Link></li>
                    </ul>
                </div>
                <div className="mobile-menu">
                        <div onClick={toggleShowing} className={`nav-hamburger-container ${showing ? "move" : ""}`}>
                        <div className="nav-hamburger bar1"></div>
                        <div className="nav-hamburger bar2"></div>
                        <div className="nav-hamburger bar3"></div>
                    </div>
                    <ul className={`nav-links-list ${showing ? "open-mobile" : ""}`}>
                        <li onClick={toggleShowing}><Link to="/" className="nav-link">About</Link></li>
                        <li onClick={toggleShowing}><Link to="/" className="nav-link">Features</Link></li>
                        <li onClick={toggleShowing}><Link to="/login" className="nav-link">Search</Link></li>
                    </ul>
                    <ul className={`nav-links-list btns ${showing ? "open-mobile" : ""}`}>
                        <li onClick={toggleShowing} className="mobile-nav-btn"><Link to="/login" className="outline-btn">Login</Link></li>
                        <li onClick={toggleShowing} className="mobile-nav-btn"><Link to="/register" className="solid-btn">Register</Link></li>
                    </ul>
                </div>
            </>
            }
        </nav>
    )
}

export default Header;