import React from 'react';
import { User, Mail, Phone, MapPin, Briefcase } from 'lucide-react';

const ProfileHeader = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <Briefcase className="h-5 w-5 mr-2" />
            {profile.title}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
            <div className="flex items-center text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              {profile.email}
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              {profile.phone}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              {profile.location}
            </div>
          </div>
          <p className="text-gray-600">{profile.about}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
