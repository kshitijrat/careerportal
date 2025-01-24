import React, { useState } from 'react';

const questions = [
  { id: 1, question: "How proficient are you with React?", options: [1, 2, 3, 4, 5] },
  { id: 2, question: "How comfortable are you with TypeScript?", options: [1, 2, 3, 4, 5] },
  { id: 3, question: "How would you rate your problem-solving skills?", options: [1, 2, 3, 4, 5] },
];

const Assessment = () => {
  const [responses, setResponses] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    console.log('Assessment Responses:', responses);
  };

  const handleResponseChange = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Skill Assessment</h1>
      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p className="text-lg font-semibold mb-2">{q.question}</p>
          <div className="flex space-x-2">
            {q.options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleResponseChange(q.id, opt)}
                className={`px-3 py-1 rounded-md border ${responses[q.id] === opt ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 text-white px-4 py-2 mt-6 rounded-md hover:bg-indigo-700"
      >
        Submit Assessment
      </button>

      {submitted && (
        <div className="mt-8">
          <p className="text-gray-700 mb-4">
            Want to further analyze your skills and get a personalized learning path?
          </p>
          <button
            onClick={() => window.location.href = '/cyclomatic-test'}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Go to Cyclomatic Test
          </button>
        </div>
      )}

    </div>
  );
};

export default Assessment;
