import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !password) {
            setError("All fields are required!");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post("http://localhost:3001/register", { name, email, password });

            if (response.data.success) {
                navigate("/login");
            } else {
                setError(response.data.message || "Registration failed.");
            }
        } catch (err) {
            console.error("Registration Error:", err);
            setError("Registration failed. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white p-4 rounded shadow" style={{ width: "400px" }}>
                <h3 className="text-center">Register</h3>

                {error && <p className="text-danger text-center">{error}</p>}

                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="mb-3">
                        <label><strong>Name</strong></label>
                        <input 
                            type="text" className="form-control" placeholder="Enter Name"
                            value={name} onChange={(e) => setName(e.target.value)} required 
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-3">
                        <label><strong>Email</strong></label>
                        <input 
                            type="email" className="form-control" placeholder="Enter Email"
                            value={email} onChange={(e) => setEmail(e.target.value)} required 
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-3">
                        <label><strong>Password</strong></label>
                        <input 
                            type="password" className="form-control" placeholder="Enter Password"
                            value={password} onChange={(e) => setPassword(e.target.value)} required 
                        />
                    </div>

                    {/* Register Button */}
                    <button type="submit" className="btn btn-success w-100" disabled={loading}>
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center mt-3">Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Signup;
