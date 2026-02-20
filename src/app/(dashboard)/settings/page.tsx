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
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-1">Manage your profile and account security</p>
      </div>

      {/* Profile Section */}
      <form onSubmit={handleSaveProfile} className="glass-card p-6 md:p-8 space-y-6 border border-border rounded-lg">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <User className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Profile Information</h2>
        </div>

        {/* Avatar placeholder */}
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-primary-foreground">
            {profile.fullName
              .split(' ')
              .map(n => n[0])
              .join('')
              .slice(0, 2)}
          </div>
          <div>
            <p className="text-foreground font-medium">{profile.fullName}</p>
            <p className="text-sm text-muted-foreground">{profile.role}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Full Name</label>
            <Input
              name="fullName"
              value={profile.fullName}
              onChange={handleProfileChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Email Address</label>
            <Input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Phone Number</label>
            <Input
              name="phone"
              value={profile.phone}
              onChange={handleProfileChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Organization</label>
            <Input
              name="organization"
              value={profile.organization}
              onChange={handleProfileChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
            Save Changes
          </Button>
          {profileSaved && (
            <span className="text-sm text-green-400 font-medium">Profile updated!</span>
          )}
        </div>
      </form>

      {/* Password Section */}
      <form onSubmit={handleChangePassword} className="glass-card p-6 md:p-8 space-y-6 border border-border rounded-lg">
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <Lock className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Change Password</h2>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Current Password</label>
            <div className="relative">
              <Input
                name="current"
                type={showCurrentPassword ? 'text' : 'password'}
                placeholder="Enter current password"
                value={passwords.current}
                onChange={handlePasswordChange}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground pr-10"
              />
              <button
                type="button"
                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-primary"
              >
                {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">New Password</label>
            <div className="relative">
              <Input
                name="newPassword"
                type={showNewPassword ? 'text' : 'password'}
                placeholder="Enter new password"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground pr-10"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-primary"
              >
                {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            <p className="text-xs text-muted-foreground/70">Minimum 12 characters with uppercase, number, and special character</p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">Confirm New Password</label>
            <Input
              name="confirm"
              type="password"
              placeholder="Re-enter new password"
              value={passwords.confirm}
              onChange={handlePasswordChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          </Button>
          {passwordSaved && (
            <span className="text-sm text-green-400 font-medium">Password updated!</span>
          )}
        </div>
      </form>

      {/* Danger Zone */}
      <div className="glass-card p-6 md:p-8 space-y-4 border border-red-500/30 rounded-lg">
        <h2 className="text-lg font-semibold text-red-400">Danger Zone</h2>
        <p className="text-sm text-muted-foreground">
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
