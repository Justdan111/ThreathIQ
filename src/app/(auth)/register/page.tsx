'use client';

import React from "react"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Link from 'next/link';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const ROLES = [
  { id: 'resident', label: 'Resident', desc: 'Report threats in your area' },
  { id: 'leader', label: 'Community Leader', desc: 'Coordinate neighborhood safety' },
  { id: 'analyst', label: 'Analyst', desc: 'Analyze local threat patterns' },
  { id: 'admin', label: 'Admin', desc: 'Manage platform operations' }
];

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState('resident');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    role: 'resident'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration attempt:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-[#0B1F3A] to-[#0F172A] flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <Shield className="w-10 h-10 text-[#2563EB]" />
          <span className="text-2xl font-bold text-[#F9FAFB]">ThreatIQ</span>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-[#F9FAFB] mb-6">
            Empower Your Community Against Threats
          </h2>
          <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
            Create your account and join a growing network of vigilant community members. Report incidents, track threats on a live map, and help keep your neighborhood safe.
          </p>

          <div className="space-y-6">
            {[
              { num: '10,000+', label: 'Communities Protected' },
              { num: '250K+', label: 'Incidents Reported' },
              { num: '95%', label: 'Faster Response Times' }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#2563EB]/20 flex items-center justify-center shrink-0">
                  <span className="text-[#2563EB] font-bold">{stat.num[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-[#F9FAFB]">{stat.num}</div>
                  <div className="text-sm text-[#9CA3AF]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 bg-[#0F172A] flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#F9FAFB] mb-2">Create Your Account</h1>
            <p className="text-[#9CA3AF]">Join ThreatIQ and help protect your community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#F9FAFB]">Full Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pl-4"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#F9FAFB]">Email Address</label>
              <Input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pl-4"
              />
            </div>

            {/* Community / Organization */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#F9FAFB]">Community / Organization</label>
              <Input
                type="text"
                name="company"
                placeholder="Your community or organization"
                value={formData.company}
                onChange={handleChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pl-4"
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#F9FAFB]">Select Your Role</label>
              <div className="grid grid-cols-2 gap-2">
                {ROLES.map(role => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => {
                      setSelectedRole(role.id);
                      setFormData(prev => ({ ...prev, role: role.id }));
                    }}
                    className={`p-3 rounded-lg border-2 text-left transition-all ${
                      selectedRole === role.id
                        ? 'border-[#2563EB] bg-[#2563EB]/10'
                        : 'border-[#2D3A4F] bg-transparent hover:border-[#2563EB]/50'
                    }`}
                  >
                    <div className="font-semibold text-sm text-[#F9FAFB]">{role.label}</div>
                    <div className="text-xs text-[#9CA3AF]">{role.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#F9FAFB]">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
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
              <p className="text-xs text-[#4B5563]">
                Minimum 12 characters with uppercase, numbers, and special characters
              </p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#F9FAFB]">Confirm Password</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#2563EB]"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6 text-base font-semibold">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-[#2D3A4F]"></div>
            <span className="text-xs text-[#4B5563]">ALREADY REGISTERED?</span>
            <div className="flex-1 h-px bg-[#2D3A4F]"></div>
          </div>

          {/* Login Link */}
          <p className="text-center text-[#9CA3AF]">
            Already have an account?{' '}
            <Link href="/login" className="text-[#2563EB] hover:text-[#22D3EE] font-medium">
              Sign In
            </Link>
          </p>

          {/* Terms Notice */}
          <div className="mt-6 p-4 bg-[#1A2332]/50 border border-[#2D3A4F] rounded-lg">
            <p className="text-xs text-[#9CA3AF] text-center">
              By creating an account, you agree to our{' '}
              <Link href="#" className="text-[#2563EB] hover:text-[#22D3EE]">Terms of Service</Link>
              {' '}and{' '}
              <Link href="#" className="text-[#2563EB] hover:text-[#22D3EE]">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
