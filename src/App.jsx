import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import PublicNavbar from "./components/PublicNavbar"; // Add a simple navbar
import Dashboard from "./pages/Dashboard";
import Learning from "./pages/Learning";
import Jobs from "./pages/Jobs";
import Skills from "./pages/Skills";
import Community from "./pages/Community";
import Insights from "./pages/Insights";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";
import Assessment from "./pages/Assessment";
import CyclomaticTest from "./pages/CyclomaticTest";
import DSAQuestions from "./pages/DSAQestions";
import ResumeBuilder from "./components/ResumeBuilder";
import Chatbot from "./components/Chatbot";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import LandingPage from "./components/LandingPage";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider, AuthContext } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AuthContext.Consumer>
          {({ isAuthenticated }) => (
            <div className="min-h-screen bg-gray-50">
              {/* Conditional Navbar */}
              {isAuthenticated ? <Navigation /> : <PublicNavbar />}
              <main className="max-w-7xl mx-auto px-4 py-8">
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />

                  {/* Protected Routes */}
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/learning"
                    element={
                      <PrivateRoute>
                        <Learning />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/jobs"
                    element={
                      <PrivateRoute>
                        <Jobs />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/skills"
                    element={
                      <PrivateRoute>
                        <Skills />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/community"
                    element={
                      <PrivateRoute>
                        <Community />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/insights"
                    element={
                      <PrivateRoute>
                        <Insights />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/profile"
                    element={
                      <PrivateRoute>
                        <Profile />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/assessment"
                    element={
                      <PrivateRoute>
                        <Assessment />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/cyclomatic-test"
                    element={
                      <PrivateRoute>
                        <CyclomaticTest />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/dsa-practice"
                    element={
                      <PrivateRoute>
                        <DSAQuestions />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/resume-builder"
                    element={
                      <PrivateRoute>
                        <ResumeBuilder />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </main>
              <Footer />
              <Chatbot />
            </div>
          )}
        </AuthContext.Consumer>
      </Router>
    </AuthProvider>
  );
};

export default App;
