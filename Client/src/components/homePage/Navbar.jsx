import React from 'react';
import { FaHeadSideVirus } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaHeadSideVirus className="w-6 h-6 text-[#e6fb04]" />
          <span className="text-xl font-semibold">noCode.web</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-white hover:text-[#e6fb04] transition-colors">
            Login
          </button>
          <button className="px-4 py-2 text-sm font-medium bg-[#e6fb04] text-black rounded-md hover:bg-[#d3e600] transition-colors">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}


