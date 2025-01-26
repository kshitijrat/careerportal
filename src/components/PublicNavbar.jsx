import { Link, useNavigate } from 'react-router-dom';

export default function PublicNavbar() {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token'); // Check authentication

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    navigate('/'); // Redirect to Landing Page
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <div>
          {!isAuthenticated ? (
            <>
              <Link to="/login" className="mx-2 hover:underline">Login</Link>
              <Link to="/signup" className="mx-2 hover:underline">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="mx-2 hover:underline">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="ml-4 bg-red-500 px-4 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
