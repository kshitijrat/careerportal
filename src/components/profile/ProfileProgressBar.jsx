import React from 'react';

const ProfileProgressBar = ({ completed }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
        style={{ width: `${completed}%` }}
      ></div>
      <div className="text-sm text-gray-700 mt-2">
        {completed}% completed. Complete your profile for better opportunities.
      </div>
    </div>
  );
};

export default ProfileProgressBar;
