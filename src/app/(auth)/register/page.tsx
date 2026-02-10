'use client';

import React from "react"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import Link from 'next/link';
import { Shield } from 'lucide-react';
import { useState } from 'react';

const ROLES = [
  { id: 'resident', label: 'Resident', desc: 'Individual community member' },
  { id: 'leader', label: 'Community Leader', desc: 'Organization representative' },
  { id: 'analyst', label: 'Analyst', desc: 'Security professional' },
  { id: 'admin', label: 'Admin', desc: 'System administrator' }
];

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState('resident');
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
    <div className="min-h-screen bg-[#0F172A] py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-8 hover:opacity-80 transition">
            <Shield className="w-8 h-8 text-[#2563EB]" />
            <span className="text-xl font-bold text-[#F9FAFB]">ThreatIQ</span>
          </Link>
          <h1 className="text-4xl font-bold text-[#F9FAFB] mb-2">Create Your Account</h1>
          <p className="text-lg text-[#9CA3AF]">Join our community-driven security intelligence platform</p>
        </div>

        {/* Registration Form */}
        <div className="glass-card p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
                Full Name
              </label>
              <Input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
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
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
                Company / Organization
              </label>
              <Input
                type="text"
                name="company"
                placeholder="Your organization name"
                value={formData.company}
                onChange={handleChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-[#F9FAFB] mb-3">
                Select Your Role
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ROLES.map(role => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => {
                      setSelectedRole(role.id);
                      setFormData(prev => ({ ...prev, role: role.id }));
                    }}
                    className={`p-4 rounded-lg border-2 text-left transition-all ${
                      selectedRole === role.id
                        ? 'border-[#2563EB] bg-[#2563EB]/10'
                        : 'border-[#2D3A4F] bg-transparent hover:border-[#2563EB]/50'
                    }`}
                  >
                    <div className="font-semibold text-[#F9FAFB]">{role.label}</div>
                    <div className="text-sm text-[#9CA3AF]">{role.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
                Password
              </label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
              />
              <p className="text-xs text-[#4B5563] mt-2">
                Minimum 12 characters with uppercase, numbers, and special characters
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
              />
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6 text-base font-semibold">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
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
        </div>

        {/* Terms Notice */}
        <div className="mt-8 text-center text-sm text-[#9CA3AF]">
          By creating an account, you agree to our{' '}
          <Link href="#" className="text-[#2563EB] hover:text-[#22D3EE]">
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link href="#" className="text-[#2563EB] hover:text-[#22D3EE]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
