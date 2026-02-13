'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  Home,
  Activity,
  Map,
  AlertCircle,
  Users,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Shield,
  HelpCircle,
} from 'lucide-react';

const SIDEBAR_ITEMS = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Activity, label: 'Threat Feed', href: '/threats' },
  { icon: Map, label: 'Map Intelligence', href: '/map' },
  { icon: AlertCircle, label: 'Report Threat', href: '/threats/report' },
  { icon: Users, label: 'Community', href: '/community' },
  { icon: BarChart3, label: 'Analytics', href: '/analytics' },
  { icon: Bell, label: 'Notifications', href: '/notifications' },
];

const ADMIN_ITEMS = [
  { icon: Shield, label: 'Moderation', href: '/admin' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: AlertCircle, label: 'Threats', href: '/admin/threats' },
];

const BOTTOM_ITEMS = [
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help', href: '#' },
];

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

export default function Sidebar({ 
  sidebarOpen, 
  setSidebarOpen, 
  isCollapsed, 
  setIsCollapsed 
}: SidebarProps) {
  const [isAdmin] = useState(true); // TODO: Get from auth context
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-[#0B1F3A] border-r border-[#2D3A4F] transform transition-all duration-300 md:relative md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } ${isCollapsed ? 'md:w-20' : 'md:w-64'} w-64`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-6 border-b border-[#2D3A4F]">
            <Shield className="w-8 h-8 text-[#2563EB] shrink-0" />
            {!isCollapsed && <span className="text-xl font-bold">ThreatIQ</span>}
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {/* Collapse Toggle Button (Desktop only) */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex items-center justify-center w-full px-3 py-2 mb-4 rounded-lg text-[#9CA3AF] hover:bg-[#1A2332] hover:text-[#F9FAFB] transition-all"
              title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              {isCollapsed ? (
                <Menu className="w-5 h-5" />
              ) : (
                <div className="flex items-center gap-2 w-full">
                  <X className="w-5 h-5" />
                  <span className="text-sm font-medium">Collapse</span>
                </div>
              )}
            </button>

            {/* Main Items */}
            <div>
              {!isCollapsed && (
                <p className="px-3 py-2 text-xs font-semibold text-[#4B5563] uppercase tracking-wider">
                  Main
                </p>
              )}
              {SIDEBAR_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                    isActive(item.href)
                      ? 'bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/50'
                      : 'text-[#9CA3AF] hover:bg-[#1A2332] hover:text-[#F9FAFB]'
                  } ${isCollapsed ? 'justify-center' : ''}`}
                  title={isCollapsed ? item.label : ''}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                </Link>
              ))}
            </div>

            {/* Admin Section */}
            {isAdmin && (
              <div>
                {!isCollapsed && (
                  <p className="px-3 py-2 text-xs font-semibold text-[#4B5563] uppercase tracking-wider mt-6">
                    Administration
                  </p>
                )}
                {isCollapsed && <div className="border-t border-[#2D3A4F] my-4"></div>}
                {ADMIN_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                      isActive(item.href)
                        ? 'bg-[#E63946]/20 text-[#E63946] border border-[#E63946]/50'
                        : 'text-[#9CA3AF] hover:bg-[#1A2332] hover:text-[#F9FAFB]'
                    } ${isCollapsed ? 'justify-center' : ''}`}
                    title={isCollapsed ? item.label : ''}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                  </Link>
                ))}
              </div>
            )}
          </nav>

          {/* Bottom Items */}
          <div className="border-t border-[#2D3A4F] px-4 py-4 space-y-2">
            {BOTTOM_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[#9CA3AF] hover:bg-[#1A2332] hover:text-[#F9FAFB] transition-all ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                title={isCollapsed ? item.label : ''}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
              </Link>
            ))}
          </div>

          {/* User Profile */}
          <div className="border-t border-[#2D3A4F] px-4 py-4">
            <button 
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-[#E63946] hover:bg-[#E63946]/10 transition-all ${
                isCollapsed ? 'justify-center' : ''
              }`}
              title={isCollapsed ? 'Logout' : ''}
            >
              <LogOut className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span className="text-sm font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}