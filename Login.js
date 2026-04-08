import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/users/login",
      formData
    );

    localStorage.setItem("token", res.data.token);
    alert("Login Successful");
    navigate("/dashboard");
  };

  return (
    <div 
  className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100"
  style={{ background: "#5d1084" }}>
  <h1 className="mb-4 text-white fw-bold">
    Portfolio Builder
  </h1>

  <div className="card shadow-lg p-4 text-white" style={{ width: "400px", backgroundColor: "#1e293b" }}>
      
        <h3 className="text-center mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <input
            className="form-control mb-3"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <button className="btn btn-success w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
