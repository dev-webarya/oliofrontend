import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { loginUser } from "./redux/features/users/userThunk";
import { setToken } from "./utils/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // localStorage.setItem("token", JSON.stringify({ accessToken: "testtoken" }))
        let payload = {
            username: email,
            password: password
        }
        dispatch(loginUser(payload)).unwrap()
            .then((res) => {
                if (res) {
                    setToken(JSON.stringify(res))
                    navigate("/home");

                }
            });


    }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input

                            className="form-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <p className="register-link">
                    Don't have an account? <Link to="/register">Register here</Link>
                    <Link to="/resetpassword">Reset Password</Link>


                </p>
            </div>
        </div>
    );
};

export default Login;