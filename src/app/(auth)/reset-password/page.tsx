'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Shield, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-[#0B1F3A] to-[#0F172A] flex-col justify-center p-12">
        <Link href="/" className="flex items-center gap-3 mb-12">
          <Shield className="w-10 h-10 text-[#2563EB]" />
          <span className="text-2xl font-bold text-[#F9FAFB]">ThreatIQ</span>
        </Link>

        <h2 className="text-5xl font-bold text-[#F9FAFB] mb-6">
          Create a New Password
        </h2>
        <p className="text-lg text-[#9CA3AF]">
          Choose a strong password to protect your account and secure your access to ThreatIQ.
        </p>
      </div>

      <div className="w-full lg:w-1/2 bg-[#0F172A] flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-[#F9FAFB] mb-2">Reset Your Password</h1>
            <p className="text-[#9CA3AF]">Enter a new password for your account</p>
          </div>

          <form className="space-y-6">
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
              <div className="relative">
                <Input
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4B5563] hover:text-[#2563EB]"
                >
                  {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6">
              Reset Password
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-[#2563EB] hover:text-[#22D3EE] text-sm font-medium">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
