import React from 'react';

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

export default StatCard;
