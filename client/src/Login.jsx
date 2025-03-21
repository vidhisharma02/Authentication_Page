import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/login", { email, password });
            console.log("Server Response:", response.data);

            if (response.data === "Success") {
                navigate("/home");
            } else {
                alert("Invalid email or password");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="container-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label><strong>Email</strong></label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label><strong>Password</strong></label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn-success">
                    Login
                </button>
            </form>
            <p className="text-center">Don't have an account?</p>
            <Link to="/register" className="btn-light">
                Register
            </Link>
        </div>
    );
}

export default Login;
