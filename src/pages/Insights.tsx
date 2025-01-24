import React from 'react';
import { TrendingUp, DollarSign, Briefcase, Target } from 'lucide-react';

const marketTrends = [
  {
    skill: 'Machine Learning',
    growth: '+15%',
    demand: 'High',
    avgSalary: '$120k',
  },
  {
    skill: 'Cloud Computing',
    growth: '+12%',
    demand: 'Very High',
    avgSalary: '$115k',
  },
  {
    skill: 'DevOps',
    growth: '+10%',
    demand: 'High',
    avgSalary: '$125k',
  },
];

const Insights = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Market Insights</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-indigo-600" />
            Trending Skills
          </h2>
          <div className="space-y-4">
            {marketTrends.map((trend) => (
              <div
                key={trend.skill}
                className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{trend.skill}</h3>
                    <p className="text-sm text-gray-500">Growth: {trend.growth}</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {trend.demand}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Average Salary: {trend.avgSalary}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Target className="h-6 w-6 mr-2 text-indigo-600" />
            Career Recommendations
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-medium text-indigo-900">Based on your profile</h3>
              <p className="text-sm text-indigo-700 mt-1">
                Your skills align well with Full Stack Development roles.
                Consider focusing on:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-indigo-700">
                <li>• Advanced React Patterns</li>
                <li>• System Design</li>
                <li>• Cloud Architecture</li>
              </ul>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <h3 className="font-medium mb-2">Suggested Career Paths</h3>
              <div className="space-y-2">
                {[
                  'Senior Full Stack Developer',
                  'Technical Lead',
                  'Solutions Architect',
                ].map((path) => (
                  <div
                    key={path}
                    className="flex items-center text-gray-700 hover:text-indigo-600 cursor-pointer"
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    {path}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="h-6 w-6 mr-2 text-indigo-600" />
            Salary Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { role: 'Frontend Developer', range: '$80k - $120k' },
              { role: 'Backend Developer', range: '$90k - $130k' },
              { role: 'Full Stack Developer', range: '$100k - $150k' },
            ].map((salary) => (
              <div
                key={salary.role}
                className="bg-gray-50 p-4 rounded-lg"
              >
                <h3 className="font-medium">{salary.role}</h3>
                <p className="text-lg font-semibold text-indigo-600 mt-1">
                  {salary.range}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Average in your area
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;