import React from 'react';
import { Users, MessageSquare, Calendar, UserPlus } from 'lucide-react';

const discussions = [
  {
    id: 1,
    title: 'Tips for Remote Work Success',
    author: 'Sarah Johnson',
    replies: 24,
    lastActive: '2 hours ago',
    tags: ['remote-work', 'productivity'],
  },
  {
    id: 2,
    title: 'Breaking into Tech: A Guide',
    author: 'Michael Chen',
    replies: 45,
    lastActive: '1 day ago',
    tags: ['career-change', 'beginners'],
  },
];

const events = [
  {
    id: 1,
    title: 'Tech Career Fair 2024',
    date: 'March 15, 2024',
    attendees: 156,
    type: 'Virtual',
  },
  {
    id: 2,
    title: 'Web Development Workshop',
    date: 'March 20, 2024',
    attendees: 89,
    type: 'Online',
  },
];

const Community = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Community</h1>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Create Post
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <MessageSquare className="h-6 w-6 mr-2 text-indigo-600" />
              Recent Discussions
            </h2>
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div
                  key={discussion.id}
                  className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                >
                  <h3 className="font-medium hover:text-indigo-600 cursor-pointer">
                    {discussion.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mt-2 space-x-4">
                    <span>By {discussion.author}</span>
                    <span>{discussion.replies} replies</span>
                    <span>{discussion.lastActive}</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="h-6 w-6 mr-2 text-indigo-600" />
              Upcoming Events
            </h2>
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                >
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    <p>{event.date}</p>
                    <p className="flex items-center mt-1">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees} attending
                    </p>
                  </div>
                  <button className="mt-2 text-indigo-600 text-sm font-medium hover:text-indigo-700">
                    Join Event
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <UserPlus className="h-6 w-6 mr-2 text-indigo-600" />
              Suggested Connections
            </h2>
            <div className="space-y-4">
              {['Jane Smith', 'Alex Wong', 'Maria Garcia'].map((name) => (
                <div key={name} className="flex items-center justify-between">
                  <span>{name}</span>
                  <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;