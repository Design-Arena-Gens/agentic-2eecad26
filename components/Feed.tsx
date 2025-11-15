"use client";

import Post from "./Post";

export default function Feed() {
  const posts = [
    {
      id: 1,
      username: "travel_enthusiast",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=800&fit=crop",
      likes: 1234,
      caption: "Sunset views from Santorini 🌅 #travel #greece",
      comments: 45,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      username: "food_lover",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop",
      likes: 892,
      caption: "Homemade pasta night 🍝 Recipe in bio!",
      comments: 23,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      username: "fitness_journey",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=800&fit=crop",
      likes: 2156,
      caption: "Morning workout done! 💪 #fitness #motivation",
      comments: 67,
      timestamp: "8 hours ago",
    },
    {
      id: 4,
      username: "nature_photographer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=800&fit=crop",
      likes: 3421,
      caption: "Lost in the forest 🌲 #nature #photography",
      comments: 89,
      timestamp: "12 hours ago",
    },
  ];

  return (
    <div className="space-y-6 pb-20 md:pb-6">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
