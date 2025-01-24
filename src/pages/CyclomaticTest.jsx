import React from 'react';
import { Target, CheckCircle } from 'lucide-react';

const CyclomaticTest = () => {
  const recommendations = [
    { skill: 'React', priority: 'High' },
    { skill: 'Advanced TypeScript', priority: 'Medium' },
    { skill: 'System Design', priority: 'High' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Cyclomatic Skill Analysis</h1>
      <p className="text-gray-600 mb-4">
        Based on your responses, we’ve analyzed and identified key focus areas for your learning path.
      </p>
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="flex justify-between items-center p-4 bg-gray-100 rounded-md">
            <div className="flex items-center">
              <Target className="h-6 w-6 text-indigo-600 mr-2" />
              <span className="font-medium">{rec.skill}</span>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
              {rec.priority} Priority
            </span>
          </div>
        ))}
      </div>
      <button
        onClick={() => window.location.href = '/learning-path'}
        className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
      >
        Start Learning Path
      </button>
    </div>
  );
};

export default CyclomaticTest;
