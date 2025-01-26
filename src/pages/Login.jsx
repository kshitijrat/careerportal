import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext); // Use login function from context
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST", // Ensure method is POST
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });     

      if (response.ok) {
        const data = await response.json();
        login(data.jwt); // Save token in context
        console.log("token: ",data.jwt);
        navigate("/dashboard");
      } else {
        console.error("Login failed!");
        const errorText = await response.text();
        console.error("Error response:", errorText); // Log unexpected HTML or error text
        throw new Error("Login failed");
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg p-6 shadow-md">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
