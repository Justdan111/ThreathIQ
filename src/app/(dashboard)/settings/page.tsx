'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Bell, Lock, Eye, EyeOff, MapPin, Copy, Check } from 'lucide-react';

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);
  const [notifications, setNotifications] = useState({
    critical: true,
    high: true,
    medium: false,
    reports: true,
    community: true,
  });

  const handleCopyApiKey = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#F9FAFB]">Settings</h1>
        <p className="text-[#9CA3AF] mt-2">Manage your profile, security, and preferences</p>
      </div>

      {/* Profile Settings */}
      <div className="glass-card p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#2D3A4F] pb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#F9FAFB]">Profile Settings</h2>
            <p className="text-[#9CA3AF] mt-1">Manage your account information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Full Name
            </label>
            <Input
              type="text"
              placeholder="Security Analyst"
              className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="analyst@company.com"
              className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
              disabled
            />
          </div>

          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Company / Organization
            </label>
            <Input
              type="text"
              placeholder="Your Organization"
              className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              User Role
            </label>
            <Select defaultValue="analyst">
              <SelectTrigger className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB]" disabled>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A2332] border-[#2D3A4F]">
                <SelectItem value="resident">Resident</SelectItem>
                <SelectItem value="leader">Community Leader</SelectItem>
                <SelectItem value="analyst">Analyst</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
            Save Changes
          </Button>
          <Button variant="outline" className="border-[#2D3A4F] text-[#F9FAFB] hover:bg-[#1A2332] bg-transparent">
            Cancel
          </Button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="glass-card p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#2D3A4F] pb-6">
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-[#2563EB]" />
            <div>
              <h2 className="text-2xl font-semibold text-[#F9FAFB]">Security Settings</h2>
              <p className="text-[#9CA3AF] mt-1">Manage passwords and authentication</p>
            </div>
          </div>
        </div>

        {/* Change Password */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[#F9FAFB] mb-4">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="••••••••"
                    className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
                  New Password
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#2563EB]"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
                  Confirm Password
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
                />
              </div>

              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                Update Password
              </Button>
            </div>
          </div>

          {/* 2FA */}
          <div className="pt-6 border-t border-[#2D3A4F]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-[#F9FAFB]">Two-Factor Authentication</h3>
                <p className="text-sm text-[#9CA3AF] mt-1">Add an extra layer of security to your account</p>
              </div>
              <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                Enable 2FA
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="glass-card p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#2D3A4F] pb-6">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-[#2563EB]" />
            <div>
              <h2 className="text-2xl font-semibold text-[#F9FAFB]">Notification Preferences</h2>
              <p className="text-[#9CA3AF] mt-1">Choose what updates you want to receive</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { id: 'critical', label: 'Critical Threats', desc: 'Immediate alerts for critical severity threats' },
            { id: 'high', label: 'High Priority Threats', desc: 'Notifications for high severity incidents' },
            { id: 'medium', label: 'Medium Priority Threats', desc: 'Daily digest of medium severity threats' },
            { id: 'reports', label: 'Report Confirmations', desc: 'When your reports are verified or rejected' },
            { id: 'community', label: 'Community Updates', desc: 'New community features and announcements' },
          ].map(item => (
            <div key={item.id} className="flex items-start gap-4 p-4 rounded-lg bg-[#1A2332]/50 hover:bg-[#1A2332] transition">
              <Checkbox
                id={item.id}
                checked={notifications[item.id as keyof typeof notifications]}
                onCheckedChange={() => setNotifications(prev => ({
                  ...prev,
                  [item.id]: !prev[item.id as keyof typeof notifications]
                }))}
              />
              <label htmlFor={item.id} className="flex-1 cursor-pointer">
                <div className="font-medium text-[#F9FAFB]">{item.label}</div>
                <p className="text-sm text-[#9CA3AF] mt-1">{item.desc}</p>
              </label>
            </div>
          ))}
        </div>

        <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
          Save Preferences
        </Button>
      </div>

      {/* API Keys */}
      <div className="glass-card p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#2D3A4F] pb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#F9FAFB]">API Keys</h2>
            <p className="text-[#9CA3AF] mt-1">Manage API access for developers</p>
          </div>
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
            Generate New Key
          </Button>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-lg bg-[#1A2332] border border-[#2D3A4F]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#F9FAFB]">Production API Key</p>
                <p className="text-xs text-[#4B5563] mt-1">Created 30 days ago</p>
              </div>
              <button
                onClick={handleCopyApiKey}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#2D3A4F] transition"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-xs text-green-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs text-[#2563EB]">Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="mt-3 p-3 rounded bg-[#0F172A] font-mono text-sm text-[#2563EB]">
              tk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
        </div>
      </div>

      {/* Location Subscriptions */}
      <div className="glass-card p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-[#2D3A4F] pb-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#2563EB]" />
            <div>
              <h2 className="text-2xl font-semibold text-[#F9FAFB]">Location Subscriptions</h2>
              <p className="text-[#9CA3AF] mt-1">Get alerts for specific regions</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['West Africa', 'East Africa', 'South Africa', 'North Africa', 'Southern Africa', 'Central Africa'].map((region, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-[#1A2332]/50 hover:bg-[#1A2332] transition">
              <Checkbox id={`region-${idx}`} defaultChecked={idx < 3} />
              <label htmlFor={`region-${idx}`} className="font-medium text-[#F9FAFB] cursor-pointer">
                {region}
              </label>
            </div>
          ))}
        </div>

        <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
          Save Subscriptions
        </Button>
      </div>

      {/* Danger Zone */}
      <div className="glass-card p-8 border-l-4 border-red-500 space-y-6">
        <div className="border-b border-[#2D3A4F] pb-6">
          <h2 className="text-2xl font-semibold text-red-400">Danger Zone</h2>
          <p className="text-[#9CA3AF] mt-1">Irreversible actions</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-red-500/10 border border-red-500/30">
            <div>
              <p className="font-semibold text-[#F9FAFB]">Delete Account</p>
              <p className="text-sm text-[#9CA3AF] mt-1">Permanently delete your account and all associated data</p>
            </div>
            <Button variant="outline" className="border-red-500 text-red-400 hover:bg-red-500/10 bg-transparent">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
