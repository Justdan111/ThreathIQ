'use client';


import { Menu, X, Bell } from 'lucide-react';
import { ModeToggle } from './mode-toogle';

interface HeaderProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  return (
    <header className="border-b border-border bg-background sticky top-0 z-30">
      <div className="px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition"
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
            placeholder="Search incidents, locations, or reporters..."
            className="w-full max-w-md px-4 py-2 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
        </div>

        <div className="flex items-center gap-4">
          <ModeToggle/>
          <button className="p-2 hover:bg-muted rounded-lg transition relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center font-semibold">
            JD
          </div>
        </div>
      </div>
    </header>
  );
}