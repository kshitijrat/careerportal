import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Home, BookOpen, Code, Briefcase, Award, Users, BarChart, LogIn, User, LogOut } from "lucide-react"; // Icons

const Navigation = ({ isMenuOpen, toggleMenu }) => {
  const location = useLocation();

  return (
    <nav className="bg-indigo-600 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Menu Toggle Button */}
            <button
              className="md:hidden mr-4 focus:outline-none"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="font-bold text-xl">
              CareerBoost
            </Link>
          </div>

          {/* Desktop Links */}
          <div className={`md:flex space-x-8 hidden`}>
            <NavLink
              to="/"
              icon={<Home className="h-5 w-5" />}
              text="Dashboard"
              active={location.pathname === "/"}
            />
            <NavLink
              to="/learning"
              icon={<BookOpen className="h-5 w-5" />}
              text="Learning"
              active={location.pathname === "/learning"}
            />
            <NavLink
              to="/dsa-practice"
              icon={<Code className="h-5 w-5" />}
              text="Practice"
              active={location.pathname === "/dsa-practice"}
            />
            <NavLink
              to="/jobs"
              icon={<Briefcase className="h-5 w-5" />}
              text="Jobs"
              active={location.pathname === "/jobs"}
            />
            <NavLink
              to="/skills"
              icon={<Award className="h-5 w-5" />}
              text="Skills"
              active={location.pathname === "/skills"}
            />
            <NavLink
              to="/community"
              icon={<Users className="h-5 w-5" />}
              text="Community"
              active={location.pathname === "/community"}
            />
            <NavLink
              to="/insights"
              icon={<BarChart className="h-5 w-5" />}
              text="Insights"
              active={location.pathname === "/insights"}
            />
            <NavLink
              to="/login"
              icon={<LogIn className="h-5 w-5" />}
              text="Login"
              active={location.pathname === "/login"}
            />
            <Link
              to="/profile"
              className="hover:text-indigo-200"
              title="Profile"
            >
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-indigo-700 text-white py-4 space-y-4">
            <NavLink
              to="/"
              icon={<Home className="h-5 w-5" />}
              text="Dashboard"
              active={location.pathname === "/"}
            />
            <NavLink
              to="/learning"
              icon={<BookOpen className="h-5 w-5" />}
              text="Learning"
              active={location.pathname === "/learning"}
            />
            <NavLink
              to="/dsa-practice"
              icon={<Code className="h-5 w-5" />}
              text="Practice"
              active={location.pathname === "/dsa-practice"}
            />
            <NavLink
              to="/jobs"
              icon={<Briefcase className="h-5 w-5" />}
              text="Jobs"
              active={location.pathname === "/jobs"}
            />
            <NavLink
              to="/skills"
              icon={<Award className="h-5 w-5" />}
              text="Skills"
              active={location.pathname === "/skills"}
            />
            <NavLink
              to="/community"
              icon={<Users className="h-5 w-5" />}
              text="Community"
              active={location.pathname === "/community"}
            />
            <NavLink
              to="/insights"
              icon={<BarChart className="h-5 w-5" />}
              text="Insights"
              active={location.pathname === "/insights"}
            />
            <NavLink
              to="/login"
              icon={<LogIn className="h-5 w-5" />}
              text="Login"
              active={location.pathname === "/login"}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ icon, text, to, active }) => (
  <Link
    to={to}
    className={`flex items-center space-x-2 hover:text-indigo-200 ${
      active ? "text-indigo-200" : ""
    } px-4 py-2`}
    title={text}
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navigation;
