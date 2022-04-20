import { Link } from "react-router-dom";

const Login = (props) => {
    return (
        <div className="login-container">
            <div className="user-form login">
                <h3>Sign in to your account</h3>
                <form>
                    <label for="username">Username: </label>
                    <input type="text" name="username" />
                    <label for="password">Password: </label>
                    <input type="password" name="password" />
                    {/* temporary link here until user route backend finished */}
                    <Link to="/dashboard" className="register-btn"><button onClick={() => props.setIsLoggedIn(true)} className="solid-btn">Login!</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login;