import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { RegisterUser } from "./redux/features/users/userThunk";
import { setToken } from "./utils/auth";



const Register = () => {
    const [username, setUsername] = useState({role:"USER"});
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.firstName && username.lastName && username.username && username.password && username.role) {
            dispatch(RegisterUser(username)).unwrap()
                .then((res) => {
                    // localStorage.setItem("token", res);
                    if (res) {
                        setToken(JSON.stringify(res))
                        navigate("/login");
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
                    {/* <div className="form-group">
                        <label>Role</label>
                        <select
                            className="form-input"
                            value={username.role}
                            name="role"
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="ADMIN">Admin</option>
                            <option value="USER">User</option>
                        </select>
                    </div> */}
                    <button type="submit" className="login-button">
                        Register
                    </button>
                </form>
                <p className="register-link">
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;