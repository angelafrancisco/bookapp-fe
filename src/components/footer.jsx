import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-container top">
                    <Link to="/" className="footer-logo"><img src="favicon.ico" alt="Logo" />.readME</Link>
                    <div className="footer-links-section">
                        <ul className="footer-links-list left">
                            <li className="footer-link"><Link to="/" className="footer-link">Mobile app</Link></li>
                            <li className="footer-text">Features</li>
                            <li className="footer-text">Live read</li>
                        </ul>
                        <ul className="footer-links-list mid">
                            <li className="footer-link"><Link to="/" className="footer-link">Community</Link></li>
                            <li className="footer-text">Reviews</li>
                            <li className="footer-text">Local events</li>
                        </ul>
                        <ul className="footer-links-list right">
                            <li className="footer-link"><Link to="/" className="footer-link">Company</Link></li>
                            <li className="footer-text">About</li>
                            <li className="footer-text">Contact</li>
                        </ul>
                    </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="footer-container bottom">
                    <ul className="footer-links-list social">
                        <li>
                            <Link to="/" className="footer-link"><i className="fa-solid fa-envelope fa-2xl fa-inverse"></i></Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-link"><i className="fa-brands fa-instagram fa-2xl fa-inverse"></i></Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-link"><i className="fa-brands fa-facebook-square fa-2xl fa-inverse"></i></Link>
                        </li>
                        <li>
                            <Link to="https://github.com/angelafrancisco/bookapp-fe" className="footer-link"><i className="fa-brands fa-github-square fa-2xl fa-inverse"></i></Link>
                        </li>
                    </ul>
                    <p className="footer-text">.readME &#169; 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;