import { Link } from "react-router-dom";

const Login = (props) => {
    return (
            <div className="content-wrapper login">
                <div className="content-container">
                    <div className="content-box login">
                        <h1 className="heading">Welcome back to .readME!</h1>
                        <div className="user-form login">
                            <h3>Sign in to your account</h3>
                            <form>
                                <div className="form-wide">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="text" name="email"  placeholder="Email"/>
                                </div>
                                <div className="form-wide">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password" name="password"  placeholder="Password"/>
                                </div>
                                {/* temporary link here until user route backend finished */}
                                <Link to="/books" className="user-form-btn"><button onClick={() => props.setIsLoggedIn(true)} className="solid-btn">Login!</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Login;