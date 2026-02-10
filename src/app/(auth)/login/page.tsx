'use client';

import React from "react"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0B1F3A] to-[#0F172A] flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <Shield className="w-10 h-10 text-[#2563EB]" />
          <span className="text-2xl font-bold text-[#F9FAFB]">ThreatIQ</span>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-[#F9FAFB] mb-6">
            Secure Access to Real-time Intelligence
          </h2>
          <p className="text-lg text-[#9CA3AF] mb-8 leading-relaxed">
            Join the global community-driven security intelligence platform. Monitor, analyze, and defend against emerging threats in real time.
          </p>

          <div className="space-y-6">
            {[
              { num: '50,000+', label: 'Active Security Nodes' },
              { num: '1.2M+', label: 'Threats Neutralized' },
              { num: '99.9%', label: 'Verified by Experts' }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#2563EB]/20 flex items-center justify-center flex-shrink-0">
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

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-[#0F172A] flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#F9FAFB] mb-2">Welcome Back</h1>
            <p className="text-[#9CA3AF]">Please enter your credentials to access your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#F9FAFB]">Email Address</label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pl-4"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[#F9FAFB]">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className="border-[#2D3A4F]" />
                <label htmlFor="remember" className="text-sm text-[#9CA3AF] cursor-pointer">
                  Remember this device for 30 days
                </label>
              </div>
            </div>

            {/* Sign In Button */}
            <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6 text-base font-semibold">
              Sign In to Dashboard
            </Button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-[#2563EB] hover:text-[#22D3EE] text-sm font-medium">
              Forgot password?
            </Link>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-[#2D3A4F]"></div>
            <span className="text-xs text-[#4B5563]">OR</span>
            <div className="flex-1 h-px bg-[#2D3A4F]"></div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-[#9CA3AF]">
            Don&apos;t have an account yet?{' '}
            <Link href="/register" className="text-[#2563EB] hover:text-[#22D3EE] font-medium">
              Create Account
            </Link>
          </p>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-[#1A2332]/50 border border-[#2D3A4F] rounded-lg">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#9CA3AF]">
                Your credentials are encrypted and verified by our real-time AI modules.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
