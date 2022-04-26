import { Link } from "react-router-dom";
import Features from "./features";

const Home = () => {
    return (
        <div className="Home">
            <div className="content-wrapper">
                <div className="content-container">
                    <div className="left-text-box">
                        <h1 className="heading">.readME is a book community for all book lovers!</h1>
                        <Link to="/register" className="solid-btn">Join Today</Link>
                    </div>
                </div>
                <Features/>
            </div>
        </div>
    )
}

export default Home;