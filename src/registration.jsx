import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { RegisterUser } from "./redux/features/users/userThunk";
import { setToken } from "./utils/auth";


const Register = () => {
    const [username, setUsername] = useState({ role: "USER" });
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [otpPageshow, setOtpPageShow] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.firstName && username.lastName && username.username && username.password && username.role) {
            dispatch(RegisterUser(username)).unwrap()
                .then((res) => {
                    if (res) {
                        setOtpPageShow(true)
                    }
                });
        } else {
            console.log("Please fill all fields")
        }
    }
    const handleChange = (e) => {
        setUsername(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <>
            {
                otpPageshow ?
                    <>
                        <div className="login-container">
                            <div className="login-card">
                                <h2 className="login-title">Verify OTP</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Enter OTP</label>
                                        <div className="otp-input-group">
                                            <input
                                                type="text"
                                                className="form-input otp-input"
                                                value={username.otp || ''}
                                                name="otp"
                                                onChange={handleChange}
                                                placeholder="Enter 6-digit OTP"
                                                maxLength="6"
                                                pattern="\d*"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="login-button">
                                        Verify OTP
                                    </button>
                                    <button
                                        type="button"
                                        className="resend-button"
                                        onClick={() => dispatch(RegisterUser(username))}
                                    >
                                        Resend OTP
                                    </button>
                                </form>
                            </div>
                        </div>
                    </> :
                    <div className="login-container">
                        <div className="login-card">
                            <h2 className="login-title">Register</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        value={username.firstName}
                                        name="firstName"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        value={username.lastName}
                                        name="lastName"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        className="form-input"
                                        value={username.username}
                                        name="username"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>


                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-input"
                                        value={username.password}
                                        name="password"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="login-button">
                                    Register
                                </button>
                            </form>
                            <p className="register-link">
                                Already have an account? <Link to="/login">Login here</Link>
                            </p>
                        </div>
                    </div>
            }
        </>
    );
};

export default Register;