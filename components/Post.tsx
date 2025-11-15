"use client";

import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from "lucide-react";
import { useState } from "react";

interface PostProps {
  post: {
    id: number;
    username: string;
    avatar: string;
    image: string;
    likes: number;
    caption: string;
    comments: number;
    timestamp: string;
  };
}

export default function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <article className="bg-white border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.avatar}
            alt={post.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{post.username}</p>
            <p className="text-xs text-gray-500">{post.timestamp}</p>
          </div>
        </div>
        <button className="hover:text-gray-500">
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Image */}
      <div className="w-full aspect-square bg-gray-100">
        <img
          src={post.image}
          alt="Post"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <button onClick={handleLike} className="hover:text-gray-500 transition-colors">
              <Heart
                size={24}
                className={liked ? "fill-red-500 text-red-500" : ""}
              />
            </button>
            <button className="hover:text-gray-500">
              <MessageCircle size={24} />
            </button>
            <button className="hover:text-gray-500">
              <Send size={24} />
            </button>
          </div>
          <button onClick={() => setSaved(!saved)} className="hover:text-gray-500">
            <Bookmark size={24} className={saved ? "fill-black" : ""} />
          </button>
        </div>

        {/* Likes */}
        <p className="font-semibold text-sm mb-2">{likes.toLocaleString()} likes</p>

        {/* Caption */}
        <p className="text-sm">
          <span className="font-semibold mr-2">{post.username}</span>
          {post.caption}
        </p>

        {/* Comments */}
        {post.comments > 0 && (
          <button className="text-sm text-gray-500 mt-2 hover:text-gray-700">
            View all {post.comments} comments
          </button>
        )}

        {/* Add Comment */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full text-sm outline-none"
          />
        </div>
      </div>
    </article>
  );
}
