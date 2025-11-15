"use client";

import { Home, Search, Compass, Film, MessageCircle, Heart, PlusSquare, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("home");

  const menuItems = [
    { icon: Home, label: "Home", id: "home" },
    { icon: Search, label: "Search", id: "search" },
    { icon: Compass, label: "Explore", id: "explore" },
    { icon: Film, label: "Reels", id: "reels" },
    { icon: MessageCircle, label: "Messages", id: "messages" },
    { icon: Heart, label: "Notifications", id: "notifications" },
    { icon: PlusSquare, label: "Create", id: "create" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex-col p-6 z-50">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Instagram</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-gray-100 font-semibold"
                    : "hover:bg-gray-50"
                }`}
              >
                <Icon className={activeTab === item.id ? "stroke-2" : "stroke-1"} size={24} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button className="flex items-center space-x-4 px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors">
          <Menu size={24} />
          <span>More</span>
        </button>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex justify-around items-center h-16">
          {[
            { icon: Home, id: "home" },
            { icon: Search, id: "search" },
            { icon: PlusSquare, id: "create" },
            { icon: Film, id: "reels" },
            { icon: Heart, id: "notifications" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="p-2"
              >
                <Icon
                  className={activeTab === item.id ? "stroke-2" : "stroke-1"}
                  size={24}
                />
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
