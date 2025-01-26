import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to My App</h1>
        <p className="text-lg mb-6">
          Discover our amazing platform! Sign up or log in to explore our features.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/signup"
            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}
