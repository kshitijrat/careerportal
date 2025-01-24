import React from 'react';
import { Briefcase, TrendingUp, Award, Users } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome back, Kshitij!</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Briefcase className="h-8 w-8 text-blue-500" />}
          title="Recommended Jobs"
          value="28"
          description="New matches today"
        />
        <StatCard
          icon={<TrendingUp className="h-8 w-8 text-green-500" />}
          title="Skills Progress"
          value="82%"
          description="Completion rate"
        />
        <StatCard
          icon={<Award className="h-8 w-8 text-purple-500" />}
          title="Certifications"
          value="6"
          description="Completed courses"
        />
        <StatCard
          icon={<Users className="h-8 w-8 text-orange-500" />}
          title="Network"
          value="134"
          description="Professional connections"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SkillGapAnalysis />
        <MarketInsights />
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <div className="flex items-center justify-between mb-4">
      {icon}
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-3xl font-bold mb-2">{value}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const SkillGapAnalysis = () => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <h2 className="text-xl font-bold mb-4">Skill Gap Analysis</h2>
    <div className="space-y-4">
      {[
        { skill: 'React', current: 75, required: 90 },
        { skill: 'TypeScript', current: 60, required: 85 },
        { skill: 'Java', current: 70, required: 80 },
        { skill: 'Angular', current: 65, required: 85 },
      ].map((item) => (
        <div key={item.skill}>
          <div className="flex justify-between mb-1">
            <span>{item.skill}</span>
            <span>{item.current}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 rounded-full h-2"
              style={{ width: `${item.current}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const MarketInsights = () => (
  <div className="bg-white rounded-lg p-6 shadow-md">
    <h2 className="text-xl font-bold mb-4">Market Insights</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span>Most In-Demand Skills</span>
        <TrendingUp className="h-5 w-5 text-green-500" />
      </div>
      <ul className="space-y-2">
        <li className="flex items-center justify-between">
          <span>Machine Learning</span>
          <span className="text-green-500">+18%</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Cloud Computing</span>
          <span className="text-green-500">+14%</span>
        </li>
        <li className="flex items-center justify-between">
          <span>DevOps</span>
          <span className="text-green-500">+12%</span>
        </li>
        <li className="flex items-center justify-between">
          <span>Full-Stack Development</span>
          <span className="text-green-500">+10%</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Dashboard;
