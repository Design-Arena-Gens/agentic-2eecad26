"use client";

export default function Suggestions() {
  const currentUser = {
    username: "currentuser",
    name: "Current User",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
  };

  const suggestions = [
    {
      id: 1,
      username: "photographer_pro",
      name: "Alex Photography",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      mutual: "Followed by jane_smith + 3 more",
    },
    {
      id: 2,
      username: "designstudio",
      name: "Design Studio",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      mutual: "Followed by john_doe + 5 more",
    },
    {
      id: 3,
      username: "artcollective",
      name: "Art Collective",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
      mutual: "Followed by mike_wilson + 2 more",
    },
    {
      id: 4,
      username: "tech_reviews",
      name: "Tech Reviews",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
      mutual: "Followed by sarah_jones",
    },
    {
      id: 5,
      username: "travel_daily",
      name: "Travel Daily",
      avatar: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=150&h=150&fit=crop",
      mutual: "Followed by alex_brown + 4 more",
    },
  ];

  return (
    <div className="fixed w-80">
      {/* Current User */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <img
            src={currentUser.avatar}
            alt={currentUser.username}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{currentUser.username}</p>
            <p className="text-sm text-gray-500">{currentUser.name}</p>
          </div>
        </div>
        <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-sm text-gray-500">Suggestions For You</p>
        <button className="text-xs font-semibold hover:text-gray-500">
          See All
        </button>
      </div>

      {/* Suggestions List */}
      <div className="space-y-4">
        {suggestions.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{user.username}</p>
                <p className="text-xs text-gray-500">{user.mutual}</p>
              </div>
            </div>
            <button className="text-xs font-semibold text-blue-500 hover:text-blue-700">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-400 space-y-2">
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:underline">About</a>
          <span>·</span>
          <a href="#" className="hover:underline">Help</a>
          <span>·</span>
          <a href="#" className="hover:underline">Press</a>
          <span>·</span>
          <a href="#" className="hover:underline">API</a>
          <span>·</span>
          <a href="#" className="hover:underline">Jobs</a>
          <span>·</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:underline">Terms</a>
        </div>
        <p className="text-gray-400">© 2025 INSTAGRAM FROM META</p>
      </div>
    </div>
  );
}
