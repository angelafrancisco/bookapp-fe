import { Link } from "react-router-dom";

const Register = (props) => {
    return (
            <div className="content-wrapper register">
                <div className="content-container">
                    <div className="content-box register">
                        <h1 className="heading">Find your next book with .readME</h1>
                        <div className="user-form register">
                            <h3>Sign up for a free account</h3>
                            <form>
                                <div className="form-split">
                                    <label htmlFor="firstName" className="sr-only">First Name</label>
                                    <input type="text" name="firstName" placeholder="First Name"/>
                                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                                    <input type="text" name="lastName" placeholder="Last Name"/>
                                </div>
                                <div className="form-wide">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input type="text" name="email" placeholder="Email"/>
                                </div>
                                <div className="form-wide">
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input type="password" name="password" placeholder="Create Password"/>
                                </div>
                                {/* temporary link here until user route backend finished */}
                                <Link to="/books" className="user-form-btn"><button onClick={() => props.setIsLoggedIn(true)} className="solid-btn">Register!</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Register;