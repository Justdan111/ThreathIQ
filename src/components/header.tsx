'use client';


import { Menu, X, Bell } from 'lucide-react';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="border-b border-[#2D3A4F] bg-[#0F172A] sticky top-0 z-30">
      <div className="px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2 hover:bg-[#1A2332] rounded-lg transition"
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <div className="flex-1 px-4 hidden md:block">
          <input
            type="text"
            placeholder="Search threats, IPs, hashes..."
            className="w-full max-w-md px-4 py-2 rounded-lg bg-[#1A2332] border border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] focus:outline-none focus:border-[#2563EB]"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#1A2332] rounded-lg transition relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#E63946] rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#22D3EE] flex items-center justify-center font-semibold">
            SA
          </div>
        </div>
      </div>
    </header>
  );
}