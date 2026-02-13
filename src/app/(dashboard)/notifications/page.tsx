'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle, Info, Bell, Trash2 } from 'lucide-react';

const NOTIFICATIONS = [
  {
    id: 1,
    type: 'critical',
    title: 'Critical Threat Alert',
    description: 'Advanced Persistent Threat (SolarFlare) detected targeting financial sector endpoints globally.',
    time: '2 mins ago',
    read: false,
    icon: AlertTriangle
  },
  {
    id: 2,
    type: 'verified',
    title: 'Report Verified',
    description: 'Your threat report #TR-89405 has been verified by 3 senior analysts and added to the community database.',
    time: '15 mins ago',
    read: false,
    icon: CheckCircle
  },
  {
    id: 3,
    type: 'high',
    title: 'High-Risk Zone Detected',
    description: 'Unusual network activity detected in 3 high-risk zones within your subscribed regions.',
    time: '1 hour ago',
    read: true,
    icon: AlertTriangle
  },
  {
    id: 4,
    type: 'info',
    title: 'Community Update',
    description: 'New feature released: Advanced threat filtering and ML-powered anomaly detection now available.',
    time: '3 hours ago',
    read: true,
    icon: Info
  },
  {
    id: 5,
    type: 'medium',
    title: 'Medium Severity Incident',
    description: 'DDoS attack detected from 50+ nodes across multiple ISPs in West Africa region.',
    time: '5 hours ago',
    read: true,
    icon: AlertTriangle
  },
  {
    id: 6,
    type: 'verified',
    title: 'Community Confirmation',
    description: 'Your threat report received 15 community confirmations. Confidence score updated to 98.5%.',
    time: '8 hours ago',
    read: true,
    icon: CheckCircle
  },
  {
    id: 7,
    type: 'info',
    title: 'Scheduled Maintenance',
    description: 'System maintenance scheduled for Sunday 02:00 UTC. Expected duration: 30 minutes.',
    time: '1 day ago',
    read: true,
    icon: Info
  },
];

const getNotificationColor = (type: string) => {
  const colors: { [key: string]: { bg: string; border: string; icon: string } } = {
    critical: { bg: 'bg-red-500/10', border: 'border-red-500/30', icon: 'text-red-400' },
    high: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', icon: 'text-orange-400' },
    medium: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', icon: 'text-yellow-400' },
    verified: { bg: 'bg-green-500/10', border: 'border-green-500/30', icon: 'text-green-400' },
    info: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', icon: 'text-cyan-400' },
  };
  return colors[type] || colors.info;
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const [filter, setFilter] = useState('all');

  const filteredNotifications = filter === 'unread' 
    ? notifications.filter(n => !n.read)
    : notifications;

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#F9FAFB]">Notifications</h1>
          <p className="text-[#9CA3AF] mt-2">Stay updated with threat alerts and community activity</p>
        </div>
        {unreadCount > 0 && (
          <Button
            onClick={markAllAsRead}
            className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
          >
            Mark all as read
          </Button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-[#2D3A4F]">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-3 font-medium border-b-2 transition ${
            filter === 'all'
              ? 'border-[#2563EB] text-[#2563EB]'
              : 'border-transparent text-[#9CA3AF] hover:text-[#F9FAFB]'
          }`}
        >
          All Notifications
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={`px-4 py-3 font-medium border-b-2 transition flex items-center gap-2 ${
            filter === 'unread'
              ? 'border-[#2563EB] text-[#2563EB]'
              : 'border-transparent text-[#9CA3AF] hover:text-[#F9FAFB]'
          }`}
        >
          Unread
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-xs font-bold">
              {unreadCount}
            </span>
          )}
        </button>
      </div>

      {/* Notifications List */}
      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-12">
            <Bell className="w-12 h-12 text-[#4B5563] mx-auto mb-4 opacity-50" />
            <p className="text-[#9CA3AF]">No notifications</p>
          </div>
        ) : (
          filteredNotifications.map(notification => {
            const colors = getNotificationColor(notification.type);
            return (
              <div
                key={notification.id}
                className={`glass-card p-6 border-l-4 transition-all ${
                  notification.read
                    ? 'opacity-75 hover:opacity-100'
                    : 'border-blue-500'
                } ${colors.border}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-lg ${colors.bg} shrink-0`}>
                    <notification.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-1 ${
                          notification.read ? 'text-[#9CA3AF]' : 'text-[#F9FAFB]'
                        }`}>
                          {notification.title}
                        </h3>
                        <p className="text-[#9CA3AF] text-sm mb-2">
                          {notification.description}
                        </p>
                        <p className="text-xs text-[#4B5563]">
                          {notification.time}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => deleteNotification(notification.id)}
                          className="p-2 hover:bg-[#1A2332] rounded-lg transition text-[#9CA3AF] hover:text-[#E63946]"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Unread Indicator */}
                  {!notification.read && (
                    <div className="w-3 h-3 rounded-full bg-[#2563EB] shrink-0 mt-1"></div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Notification Preferences */}
      <div className="glass-card p-6 border-l-4 border-cyan-500">
        <h2 className="text-lg font-semibold text-[#F9FAFB] mb-3">Notification Preferences</h2>
        <p className="text-[#9CA3AF] text-sm mb-4">
          Customize which notifications you receive in your{' '}
          <a href="/dashboard/settings" className="text-[#2563EB] hover:text-[#22D3EE]">
            account settings
          </a>
        </p>
      </div>
    </div>
  );
}
