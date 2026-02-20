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
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-sidebar to-background flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <Shield className="w-10 h-10 text-primary" />
          <span className="text-2xl font-bold text-foreground">ThreatIQ</span>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Empower Your Community Against Threats
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Create your account and join a growing network of vigilant community members. Report incidents, track threats on a live map, and help keep your neighborhood safe.
          </p>

          <div className="space-y-6">
            {[
              { num: '10,000+', label: 'Communities Protected' },
              { num: '250K+', label: 'Incidents Reported' },
              { num: '95%', label: 'Faster Response Times' }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-primary font-bold">{stat.num[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{stat.num}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Create Your Account</h1>
            <p className="text-muted-foreground">Join ThreatIQ and help protect your community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Full Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground pl-4"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Email Address</label>
              <Input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground pl-4"
              />
            </div>

            {/* Community / Organization */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Community / Organization</label>
              <Input
                type="text"
                name="company"
                placeholder="Your community or organization"
                value={formData.company}
                onChange={handleChange}
                className="bg-card border-border text-foreground placeholder:text-muted-foreground pl-4"
              />
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Select Your Role</label>
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
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-transparent hover:border-primary/50'
                    }`}
                  >
                    <div className="font-semibold text-sm text-foreground">{role.label}</div>
                    <div className="text-xs text-muted-foreground">{role.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-primary"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <p className="text-xs text-muted-foreground/70">
                Minimum 12 characters with uppercase, numbers, and special characters
              </p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Confirm Password</label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-primary"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold">
              Create Account
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-xs text-muted-foreground/70">ALREADY REGISTERED?</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Login Link */}
          <p className="text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href="/login" className="text-primary hover:text-accent font-medium">
              Sign In
            </Link>
          </p>

          {/* Terms Notice */}
          <div className="mt-6 p-4 bg-card/50 border border-border rounded-lg">
            <p className="text-xs text-muted-foreground text-center">
              By creating an account, you agree to our{' '}
              <Link href="#" className="text-primary hover:text-accent">Terms of Service</Link>
              {' '}and{' '}
              <Link href="#" className="text-primary hover:text-accent">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
