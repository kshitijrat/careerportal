import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { dracula } from '@uiw/codemirror-theme-dracula';
import axios from 'axios';

const CodeCompiler = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('java');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await axios.post('https://api.jdoodle.com/execute', {
        script: code,
        language: language,
        versionIndex: '0', // Use proper versions per language
        clientId: 'YOUR_JDOODLE_CLIENT_ID',
        clientSecret: 'YOUR_JDOODLE_CLIENT_SECRET',
      });

      setOutput(response.data.output);
    } catch (error) {
      console.error('Error running code:', error);
      setOutput('Error executing code.');
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        {/* Language Selector */}
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="python3">Python</option>
          <option value="nodejs">JavaScript</option>
        </select>
        <button
          onClick={handleRunCode}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Run Code
        </button>
      </div>

      {/* Code Editor */}
      <CodeMirror
        value={code}
        height="300px"
        theme={dracula}
        onChange={(value) => setCode(value)}
      />

      {/* Output */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Output:</h3>
        <pre className="bg-gray-100 p-2 rounded text-sm">{output}</pre>
      </div>
    </div>
  );
};

export default CodeCompiler;
