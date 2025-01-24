import React from 'react';
import { BookOpen, Clock, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    description: 'Learn advanced React patterns and best practices',
    duration: '6 hours',
    level: 'Advanced',
    rating: 4.8,
    enrolled: 1234,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
  },
  {
    id: 2,
    title: 'TypeScript Fundamentals',
    description: 'Master TypeScript from basics to advanced concepts',
    duration: '8 hours',
    level: 'Intermediate',
    rating: 4.7,
    enrolled: 2345,
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60',
  },
];

const Learning = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Learning Path</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-yellow-400" />
                  {course.rating}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {course.enrolled} enrolled
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Start Learning
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;