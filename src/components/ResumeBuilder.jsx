import React, { useState } from 'react';

const ResumeBuilder = () => {
  const [category, setCategory] = useState('Beginner');
  const [template, setTemplate] = useState('Template 1');
  const [isPremium, setIsPremium] = useState(false);
  const [formData, setFormData] = useState({
    personalInfo: { name: '', email: '', phone: '' },
    education: [{ degree: '', school: '', year: '' }],
    experience: [{ jobTitle: '', company: '', duration: '' }],
    skills: '',
    projects: [{ title: '', description: '' }],
  });

  const templates = [
    { id: 1, name: 'Template 1', premium: false },
    { id: 2, name: 'Template 2', premium: false },
    { id: 3, name: 'Template 3', premium: false },
    { id: 4, name: 'Template 4', premium: false },
    { id: 5, name: 'Template 5', premium: false },
    { id: 6, name: 'Template 6', premium: true },
    { id: 7, name: 'Template 7', premium: true },
  ];

  const handleChange = (e, section, index, field) => {
    if (section === 'personalInfo' || section === 'skills') {
      setFormData({ ...formData, [section]: { ...formData[section], [field]: e.target.value } });
    } else {
      const updatedSection = formData[section].map((item, idx) =>
        idx === index ? { ...item, [field]: e.target.value } : item
      );
      setFormData({ ...formData, [section]: updatedSection });
    }
  };

  const addField = (section) => {
    const newField =
      section === 'education'
        ? { degree: '', school: '', year: '' }
        : section === 'experience'
        ? { jobTitle: '', company: '', duration: '' }
        : { title: '', description: '' };

    setFormData({ ...formData, [section]: [...formData[section], newField] });
  };

  const handleTemplateChange = (selectedTemplate) => {
    if (selectedTemplate.premium) {
      setIsPremium(true);
    } else {
      setIsPremium(false);
    }
    setTemplate(selectedTemplate.name);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Automatic Resume Builder</h1>

      {/* Category Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold">Select Resume Category</h2>
        <div className="flex space-x-4 mt-2">
          {['Beginner', 'Intermediate', 'Advanced'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded ${
                category === cat ? 'bg-indigo-600 text-white' : 'bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Input Sections */}
      <div className="space-y-6 mb-6">
        <InputSection title="Personal Information">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.personalInfo.name}
            onChange={(e) => handleChange(e, 'personalInfo', null, 'name')}
            className="input-field"
          />
          
          <input
            type="email"
            placeholder="Email"
            value={formData.personalInfo.email}
            onChange={(e) => handleChange(e, 'personalInfo', null, 'email')}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={formData.personalInfo.phone}
            onChange={(e) => handleChange(e, 'personalInfo', null, 'phone')}
            className="input-field"
          />
        </InputSection>

        {['education', 'experience', 'projects'].map((section) => (
          <InputSection key={section} title={section.charAt(0).toUpperCase() + section.slice(1)}>
            {formData[section].map((item, index) => (
              <div key={index} className="space-y-2">
                {Object.keys(item).map((field) => (
                  <input
                    key={field}
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={item[field]}
                    onChange={(e) => handleChange(e, section, index, field)}
                    className="input-field"
                  />
                ))}
              </div>
            ))}
            <button onClick={() => addField(section)} className="text-blue-500 underline mt-2">
              + Add More
            </button>
          </InputSection>
        ))}

        <InputSection title="Skills">
          <textarea
            placeholder="Enter skills (comma separated)"
            value={formData.skills}
            onChange={(e) => handleChange(e, 'skills', null, 'skills')}
            className="input-field"
          />
        </InputSection>
      </div>

      {/* Template Selection */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Select Resume Template</h2>
        <div className="flex flex-wrap space-x-4">
          {templates.map((temp) => (
            <div
              key={temp.id}
              onClick={() => handleTemplateChange(temp)}
              className={`cursor-pointer p-4 border rounded-lg ${
                template === temp.name ? 'border-indigo-600' : 'border-gray-300'
              } ${temp.premium ? 'opacity-75' : ''}`}
            >
              <p>{temp.name}</p>
              {temp.premium && <span className="text-yellow-500 text-sm">Premium</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Resume Preview */}
      <div className="p-6 bg-gray-100 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Resume Preview</h2>
        <p>Category: {category}</p>
        <p>Template: {template}</p>
        {isPremium && <p className="text-red-500 mt-2">Premium templates require a subscription!</p>}
      </div>
    </div>
  );
};

const InputSection = ({ title, children }) => (
  <div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

export default ResumeBuilder;
