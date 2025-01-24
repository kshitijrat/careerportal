import React from 'react';
import { Award } from 'lucide-react';

const ProfileCertifications = () => {
  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2022",
    },
    {
      name: "React Advanced Concepts",
      issuer: "Meta",
      date: "2022",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Award className="h-6 w-6 mr-2 text-indigo-600" />
        Certifications
      </h2>
      <div className="space-y-4">
        {certifications.map((cert, index) => (
          <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
            <h3 className="font-medium">{cert.name}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
            <p className="text-sm text-gray-500">{cert.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCertifications;
