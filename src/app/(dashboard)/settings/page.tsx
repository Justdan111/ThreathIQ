'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, User, Lock, Save } from 'lucide-react';

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const [profile, setProfile] = useState({
    fullName: 'Adamu Musa',
    email: 'adamu@example.com',
    phone: '+234 801 234 5678',
    organization: 'Wuse Community Watch',
    role: 'Resident',
  });

  const [passwords, setPasswords] = useState({
    current: '',
    newPassword: '',
    confirm: '',
  });

  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setProfileSaved(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswords(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setPasswordSaved(false);
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile saved:', profile);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 3000);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirm) {
      alert('Passwords do not match');
      return;
    }
    console.log('Password changed');
    setPasswords({ current: '', newPassword: '', confirm: '' });
    setPasswordSaved(true);
    setTimeout(() => setPasswordSaved(false), 3000);
  };

  return (
    <div className="max-w-3xl space-y-8 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#F9FAFB]">Settings</h1>
        <p className="text-[#9CA3AF] mt-1">Manage your profile and account security</p>
      </div>

      {/* Profile Section */}
      <form onSubmit={handleSaveProfile} className="glass-card p-6 md:p-8 space-y-6 border border-[#2D3A4F] rounded-lg">
        <div className="flex items-center gap-3 border-b border-[#2D3A4F] pb-4">
          <User className="w-5 h-5 text-[#2563EB]" />
          <h2 className="text-lg font-semibold text-[#F9FAFB]">Profile Information</h2>
        </div>

        {/* Avatar placeholder */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#2563EB] to-[#22D3EE] flex items-center justify-center text-xl font-bold text-white">
            {profile.fullName
              .split(' ')
              .map(n => n[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div>
            <p className="text-[#F9FAFB] font-medium">{profile.fullName}</p>
            <p className="text-sm text-[#9CA3AF]">{profile.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#F9FAFB]">Full Name</label>
            <Input
              name="fullName"
              value={profile.fullName}
              onChange={handleProfileChange}
              className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#F9FAFB]">Email Address</label>
            <Input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#F9FAFB]">Phone Number</label>
            <Input
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#F9FAFB]">Organization</label>
            <Input
              name="organization"
              value={profile.organization}
              onChange={handleProfileChange}
              className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white gap-2">
            <Save className="w-4 h-4" />
            Save Changes
          </Button>
          {profileSaved && (
            <span className="text-sm text-green-400 font-medium">Profile updated!</span>
          )}
        </div>
      </form>

      {/* Password Section */}
      <form onSubmit={handleChangePassword} className="glass-card p-6 md:p-8 space-y-6 border border-[#2D3A4F] rounded-lg">
        <div className="flex items-center gap-3 border-b border-[#2D3A4F] pb-4">
          <Lock className="w-5 h-5 text-[#2563EB]" />
          <h2 className="text-lg font-semibold text-[#F9FAFB]">Change Password</h2>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#F9FAFB]">Current Password</label>
            <div className="relative">
              <Input
                name="current"
                type={showCurrentPassword ? 'text' : 'password'}
                placeholder="Enter current password"
                value={passwords.current}
                onChange={handlePasswordChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#2563EB]"
              >
                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#F9FAFB]">New Password</label>
            <div className="relative">
              <Input
                name="newPassword"
                type={showNewPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#2563EB]"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-xs text-[#4B5563]">Minimum 12 characters with uppercase, number, and special character</p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#F9FAFB]">Confirm New Password</label>
            <Input
              name="confirm"
              type="password"
              placeholder="Re-enter new password"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white gap-2">
            <Lock className="w-4 h-4" />
            Update Password
          </Button>
          {passwordSaved && (
            <span className="text-sm text-green-400 font-medium">Password updated!</span>
          )}
        </div>
      </form>

      {/* Danger Zone */}
      <div className="glass-card p-6 md:p-8 space-y-4 border border-red-500/30 rounded-lg">
        <h2 className="text-lg font-semibold text-red-400">Danger Zone</h2>
        <p className="text-sm text-[#9CA3AF]">
          Permanently delete your account and all associated data. This action cannot be undone.
        </p>
        <Button
          type="button"
          className="bg-transparent border border-red-500/50 text-red-400 hover:bg-red-500/10"
        >
          Delete Account
        </Button>
      </div>
    </div>
  );
}
