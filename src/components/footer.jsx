import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-container top">
                    <ul className="footer-links-list">
                        <li><Link to="/" className="footer-link">About</Link></li>
                        <li><Link to="/" className="footer-link">Community</Link></li>
                        <li><Link to="/" className="footer-link">Support</Link></li>
                        <li><Link to="/" className="footer-link">Resources</Link></li>
                    </ul>
                    <ul className="footer-links-list social">
                        <li>
                            <Link to="/" className="footer-link insta"><i className="fa-brands fa-instagram fa-2xl"></i></Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-link fb"><i className="fa-brands fa-facebook-square fa-2xl"></i></Link>
                        </li>
                        <li>
                            <Link to="/" className="footer-link email"><i className="fa-solid fa-envelope fa-2xl"></i></Link>
                        </li>
                        <li>
                            <a href="https://github.com/angelafrancisco/bookapp-fe" className="footer-link github"><i className="fa-brands fa-github-square fa-2xl"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-container bottom">
                    <Link to="/" className="footer-logo"><img src="img/favicon.ico" alt="Logo" />.readME</Link>
                    <p className="footer-text">&#169; .readME 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;