"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Stories from "@/components/Stories";
import Feed from "@/components/Feed";
import Suggestions from "@/components/Suggestions";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-64">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Stories />
              <Feed />
            </div>

            <div className="hidden lg:block">
              <Suggestions />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
