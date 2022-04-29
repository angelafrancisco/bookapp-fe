import { Link } from "react-router-dom";
import Features from "./features";

const Home = () => {
    return (
            <div className="content-wrapper">
                <div className="content-container home">
                    <div className="content-box home">
                        <h1 className="heading">.readME is a book community<br/>for all book enthusiasts!</h1>
                        <Link to="/register" className="solid-btn">Join Today</Link>
                    </div>
                </div>
                <Features/>
            </div>
    )
}

export default Home;