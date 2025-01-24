import React from 'react';
import { Trophy, Target, Users, BookOpen } from 'lucide-react';
import StatCard from '../cards/StatCard';

const ProfileStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <StatCard
        icon={<Trophy className="h-8 w-8 text-yellow-500" />}
        title="Experience"
        value="5+ years"
        description="Professional experience"
      />
      <StatCard
        icon={<Target className="h-8 w-8 text-green-500" />}
        title="Projects"
        value="48"
        description="Completed projects"
      />
      <StatCard
        icon={<Users className="h-8 w-8 text-blue-500" />}
        title="Network"
        value="500+"
        description="Professional connections"
      />
      <StatCard
        icon={<BookOpen className="h-8 w-8 text-purple-500" />}
        title="Learning"
        value="12"
        description="Courses completed"
      />
    </div>
  );
};

export default ProfileStats;
