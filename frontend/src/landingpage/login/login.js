import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../auth.css";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("https://nstocks.onrender.com/login", form, {
        withCredentials: true,
      });
      window.location.href = "https://main.d1gnotjl6qrlsb.amplifyapp.com";
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="auth_container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        {error && <p className="auth_error">{error}</p>}
        <button type="submit">Login</button>
        <span>
          New here? <Link to="/signup">Sign up</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;