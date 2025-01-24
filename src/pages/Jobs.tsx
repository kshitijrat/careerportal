import React from 'react';
import { MapPin, Building, Calendar } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120k - $150k',
    posted: '2 days ago',
    description: 'We are looking for a Senior Frontend Developer with expertise in React and TypeScript...',
    requirements: ['5+ years of experience', 'React', 'TypeScript', 'REST APIs'],
  },
  {
    id: 2,
    title: 'Full Stack Engineer',
    company: 'StartupX',
    location: 'Remote',
    type: 'Full-time',
    salary: '$100k - $130k',
    posted: '1 week ago',
    description: 'Join our fast-growing startup as a Full Stack Engineer...',
    requirements: ['3+ years of experience', 'Node.js', 'React', 'MongoDB'],
  },
];

const Jobs = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Job Opportunities</h1>
      
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <div className="flex items-center text-gray-600 space-x-4">
                  <span className="flex items-center">
                    <Building className="h-4 w-4 mr-1" />
                    {job.company}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {job.posted}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-indigo-600">{job.salary}</span>
                <p className="text-sm text-gray-500">{job.type}</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{job.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {job.requirements.map((req, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {req}
                </span>
              ))}
            </div>
            
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;