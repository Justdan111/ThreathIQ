'use client';

import React from "react"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Shield, Mail } from 'lucide-react';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#0B1F3A] to-[#0F172A] flex-col justify-center p-12">
        <Link href="/" className="flex items-center gap-3 mb-12">
          <Shield className="w-10 h-10 text-[#2563EB]" />
          <span className="text-2xl font-bold text-[#F9FAFB]">ThreatIQ</span>
        </Link>

        <div>
          <h2 className="text-5xl font-bold text-[#F9FAFB] mb-6">
            Secure Password Recovery
          </h2>
          <p className="text-lg text-[#9CA3AF]">
            We'll send you instructions to reset your password securely. Your account remains protected throughout the process.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-[#0F172A] flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {!submitted ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#F9FAFB] mb-2">Forgot Password?</h1>
                <p className="text-[#9CA3AF]">No problem. Tell us your email and we'll send recovery instructions.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
                  />
                </div>

                <Button className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-6">
                  Send Recovery Link
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/login" className="text-[#2563EB] hover:text-[#22D3EE] text-sm font-medium">
                  Back to Login
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-400" />
              </div>

              <h2 className="text-2xl font-bold text-[#F9FAFB] mb-2">Check Your Email</h2>
              <p className="text-[#9CA3AF] mb-6">
                We've sent a password recovery link to <strong>{email}</strong>
              </p>

              <div className="p-4 rounded-lg bg-[#1A2332] border border-[#2D3A4F] mb-6">
                <p className="text-sm text-[#9CA3AF]">
                  The link expires in 1 hour. If you don't receive it, check your spam folder or try again.
                </p>
              </div>

              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="w-full border-[#2D3A4F] text-[#2563EB] hover:bg-[#2563EB]/10"
              >
                Try Another Email
              </Button>

              <div className="mt-4">
                <Link href="/login" className="text-[#2563EB] hover:text-[#22D3EE] text-sm font-medium">
                  Back to Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
