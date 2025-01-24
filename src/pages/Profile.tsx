import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, TrendingUp, Edit, FileText } from 'lucide-react';
import SkillProgressChart from '../components/charts/SkillProgressChart';
import JobTrendsChart from '../components/charts/JobTrendsChart';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileStats from '../components/profile/ProfileStats';
import ProfileSkills from '../components/profile/ProfileSkills';
import ProfileEducation from '../components/profile/ProfileEducation';
import ProfileCertifications from '../components/profile/ProfileCertifications';
import ProfileProgressBar from '../components/profile/ProfileProgressBar';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Dummy user profile data
  const userProfile = {
    name: 'Kshitij',
    title: 'Senior Full Stack Developer',
    email: 'kshitij.rat@example.com',
    phone: '+91 98765 43210',
    location: 'Bhopal, India',
    about:
      'Highly motivated full-stack developer with over 6 years of experience designing and implementing scalable, efficient, and user-friendly web applications. Passionate about React, Node.js, and building solutions with cloud technologies.',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60',
  };

  const handleEditClick = () => {
    window.location.href = '/complete-profile';
  };

  // Correctly defining the handleResumeBuild function
  const handleResumeBuild = () => {
    window.location.href = '/resume-builder'; // Redirects to the Resume Builder page
  };

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="relative">
        <ProfileHeader profile={userProfile} />

        <button
          onClick={handleEditClick}
          className="absolute top-4 right-4 flex items-center bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          <Edit className="h-4 w-4 mr-2" /> Edit Profile
        </button>
      </div>

      {/* Small "Build Resume" Button Below Stats */}
      <button
        onClick={handleResumeBuild}
        className="flex items-center bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition duration-300 w-auto text-sm"
      >
        <FileText className="h-4 w-4 mr-2" /> Build Resume
      </button>
      
      {/* Profile Progress Bar */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Profile Completion</h3>
        <ProfileProgressBar completed={70} /> {/* Example: 70% completion */}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="md:col-span-2 space-y-8">
          {/* Profile Stats */}
          <ProfileStats />

          {/* Skill Progress */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
              <TrendingUp className="h-6 w-6 text-blue-600 mr-2" />
              Skill Progress
            </h2>
            <SkillProgressChart />
          </div>

          {/* Job Trends */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
              <Briefcase className="h-6 w-6 text-green-600 mr-2" />
              Career Growth
            </h2>
            <JobTrendsChart />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Skills */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <Award className="h-6 w-6 text-indigo-600 mr-2" />
              Skills
            </h2>
            <ProfileSkills />
          </div>

          {/* Education */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <GraduationCap className="h-6 w-6 text-red-600 mr-2" />
              Education
            </h2>
            <ProfileEducation />
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-gray-800">
              <Award className="h-6 w-6 text-yellow-500 mr-2" />
              Certifications
            </h2>
            <ProfileCertifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
