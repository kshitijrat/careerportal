import React from 'react';
import { Award, CheckCircle, Star, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    id: 1,
    name: 'Technical Skills',
    skills: [
      { name: 'React', level: 80, certified: true },
      { name: 'TypeScript', level: 75, certified: true },
      { name: 'Node.js', level: 70, certified: false },
    ],
  },
  {
    id: 2,
    name: 'Soft Skills',
    skills: [
      { name: 'Communication', level: 85, certified: true },
      { name: 'Leadership', level: 70, certified: false },
      { name: 'Problem Solving', level: 90, certified: true },
    ],
  },
];

const Skills = () => {
  const totalProgress = skillCategories
    .flatMap((cat) => cat.skills)
    .reduce((acc, skill) => acc + skill.level, 0);
  const avgProgress = Math.round(totalProgress / 6);

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Skills Assessment</h1>
        <div className="space-x-4">
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            onClick={() => window.location.href = '/assessment'}
          >
            Take Assessment
          </button>
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            onClick={() => window.location.href = '/cyclomatic-test'}
          >
            Cyclomatic Test
          </button>
        </div>
      </div>

      {/* Skill Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="h-6 w-6 mr-2 text-indigo-600" />
              {category.name}
            </h2>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-medium">{skill.name}</span>
                      {skill.certified && (
                        <CheckCircle className="h-4 w-4 ml-2 text-green-500" />
                      )}
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-indigo-600 rounded-full h-2"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Progress */}
      <div className="mt-8 p-6 bg-gray-100 rounded-lg flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Overall Skill Progress</h3>
          <p className="text-gray-600">Average progress across all categories</p>
        </div>
        <div className="flex items-center">
          <TrendingUp className="h-8 w-8 text-indigo-600 mr-2" />
          <span className="text-2xl font-bold text-indigo-600">{avgProgress}%</span>
        </div>
      </div>

      {/* Cyclomatic Test Button */}
      <div className="mt-8 text-center">
        <button
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 text-lg font-medium"
          onClick={() => window.location.href = '/cyclomatic-test'}
        >
          Analyze Skills with Cyclomatic Test
        </button>
      </div>
    </div>
  );
};

export default Skills;
