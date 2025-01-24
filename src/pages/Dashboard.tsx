import React from 'react';
import { Briefcase, TrendingUp, Award, Users } from 'lucide-react';
import StatCard from '../components/cards/StatCard';
import SkillProgressChart from '../components/charts/SkillProgressChart';
import JobTrendsChart from '../components/charts/JobTrendsChart';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Welcome back, Kshitij!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<Briefcase className="h-8 w-8 text-blue-500" />}
          title="Recommended Jobs"
          value="24"
          description="New matches today"
        />
        <StatCard
          icon={<TrendingUp className="h-8 w-8 text-green-500" />}
          title="Skills Progress"
          value="78%"
          description="Completion rate"
        />
        <StatCard
          icon={<Award className="h-8 w-8 text-purple-500" />}
          title="Certifications"
          value="5"
          description="Completed courses"
        />
        <StatCard
          icon={<Users className="h-8 w-8 text-orange-500" />}
          title="Network"
          value="156"
          description="Professional connections"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <SkillProgressChart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <JobTrendsChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;