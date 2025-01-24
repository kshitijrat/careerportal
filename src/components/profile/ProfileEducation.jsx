import React from 'react';
import { GraduationCap } from 'lucide-react';

const ProfileEducation = () => {
  const education = [
    {
      degree: "Master's in Computer Science",
      school: "Stanford University",
      year: "2018-2020",
    },
    {
      degree: "Bachelor's in Software Engineering",
      school: "MIT",
      year: "2014-2018",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <GraduationCap className="h-6 w-6 mr-2 text-indigo-600" />
        Education
      </h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <h3 className="font-medium">{edu.degree}</h3>
            <p className="text-gray-600">{edu.school}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileEducation;
