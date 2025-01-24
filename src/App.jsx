import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Learning from './pages/Learning';
import Jobs from './pages/Jobs';
import Skills from './pages/Skills';
import Community from './pages/Community';
import Insights from './pages/Insights';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Assessment from './pages/Assessment';
import CyclomaticTest from './pages/CyclomaticTest';
import DSAQuestions from './pages/DSAQestions';
import ResumeBuilder from './components/ResumeBuilder';
import Chatbot from './components/Chatbot';
import Login from './pages/Login';
import Signup from './pages/SignUp';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/community" element={<Community />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/cyclomatic-test" element={<CyclomaticTest />} />
            <Route path="/dsa-practice" element={<DSAQuestions />} />
            <Route path="/resume-builder" element={<ResumeBuilder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
        <Footer />
        {/* Chatbot Icon */}
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
