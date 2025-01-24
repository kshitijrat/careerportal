import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call for login)
    console.log('Logging in with:', { email, password });
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
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold"
        >
          Login
        </button>

        <div className="mt-4 text-center">
          <p className="text-sm">
            Don't have an account?{' '}
            <a href="/signup" className="text-blue-500 hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
