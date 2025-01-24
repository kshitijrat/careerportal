import React, { useState } from 'react';
import CodeCompiler from './CodeCompiler';

const DSAQuestions = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  // Mock questions data
  const questions = [
    {
      id: 1,
      title: 'Two Sum',
      difficulty: 'Easy',
      source: 'LeetCode',
      description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
      input: 'nums = [2,7,11,15], target = 9',
      output: '[0, 1]',
    },
    {
      id: 2,
      title: 'Reverse Linked List',
      difficulty: 'Medium',
      source: 'GFG',
      description: 'Reverse a singly linked list.',
      input: '1 -> 2 -> 3 -> 4 -> 5',
      output: '5 -> 4 -> 3 -> 2 -> 1',
    },
    {
      id: 3,
      title: 'Binary Search',
      difficulty: 'Easy',
      source: 'LeetCode',
      description: 'Search for a target element in a sorted array.',
      input: 'nums = [-1,0,3,5,9,12], target = 9',
      output: '4',
    },
    {
      id: 4,
      title: 'Kth Largest Element',
      difficulty: 'Hard',
      source: 'GFG',
      description: 'Find the kth largest element in an unsorted array.',
      input: 'nums = [3,2,3,1,2,4,5,5,6], k = 4',
      output: '4',
    },
  ];

  const [filter, setFilter] = useState('All');

  // Filter questions based on difficulty
  const filteredQuestions = questions.filter(
    (q) => filter === 'All' || q.difficulty === filter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">DSA Practice</h1>

      {/* Filter Section */}
      <div className="mb-4 flex space-x-4">
        {['All', 'Easy', 'Medium', 'Hard'].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level)}
            className={`px-4 py-2 rounded ${
              filter === level ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Questions List */}
      <div>
        {filteredQuestions.map((question) => (
          <div
            key={question.id}
            onClick={() => setSelectedQuestion(question)}
            className="p-4 mb-2 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-100"
          >
            <h3 className="font-semibold">{question.title}</h3>
            <p className="text-gray-500">
              {question.difficulty} | {question.source}
            </p>
          </div>
        ))}
      </div>

      {/* Question Details and Code Compiler */}
      {selectedQuestion && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">{selectedQuestion.title}</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow">
            <p className="mb-2"><strong>Description:</strong> {selectedQuestion.description}</p>
            <p className="mb-2"><strong>Input:</strong> {selectedQuestion.input}</p>
            <p><strong>Output:</strong> {selectedQuestion.output}</p>
          </div>
          <CodeCompiler />
        </div>
      )}
    </div>
  );
};

export default DSAQuestions;
