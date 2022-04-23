import { Link } from "react-router-dom";
import Features from "./features";

const Home = () => {
    return (
        <div className="Home">
            <div className="home-container">
                <div className="left-text-box">
                    <h1 className="home-heading">.readME is a book community for all book lovers!</h1>
                    <Link to="/register" className="solid-btn">Join Today</Link>
                </div>
                <img src="./img/home.jpg" alt="Books Background" className="home-img" />
            </div>
            <Features/>
        </div>
    )
}

export default Home;