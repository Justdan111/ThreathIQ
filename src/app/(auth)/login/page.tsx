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
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-sidebar to-background flex-col justify-between p-12">
        <div className="flex items-center gap-3">
          <Shield className="w-10 h-10 text-primary" />
          <span className="text-2xl font-bold text-foreground">ThreatIQ</span>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Stay Informed. Stay Safe. Protect Your Community.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Access your ThreatIQ dashboard to monitor real-time threat reports, view incidents on the live map, and collaborate with your community to keep your neighborhood secure.
          </p>

          <div className="space-y-6">
            {[
              { num: '50,000+', label: 'Community Members' },
              { num: '1.2M+', label: 'Threats Reported & Resolved' },
              { num: '99.9%', label: 'Uptime & Reliability' }
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

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to monitor threats and protect your community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Email Address</label>
              <div className="relative">
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground pl-4"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">Password</label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" className="border-border" />
                <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                  Remember this device for 30 days
                </label>
              </div>
            </div>

            {/* Sign In Button */}
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base font-semibold">
              Sign In to Dashboard
            </Button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-primary hover:text-accent text-sm font-medium">
              Forgot password?
            </Link>
          </div>

          {/* Divider */}
          <div className="my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-border"></div>
            <span className="text-xs text-muted-foreground/70">OR</span>
            <div className="flex-1 h-px bg-border"></div>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-muted-foreground">
            Don&apos;t have an account yet?{' '}
            <Link href="/register" className="text-primary hover:text-accent font-medium">
              Create Account
            </Link>
          </p>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-card/50 border border-border rounded-lg">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <div className="text-xs text-muted-foreground">
                Your connection is secured with end-to-end encryption. All threat data is verified by community moderators.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
