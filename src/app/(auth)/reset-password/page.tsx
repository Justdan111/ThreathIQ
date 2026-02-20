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
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-sidebar to-background flex-col justify-center p-12">
        <Link href="/" className="flex items-center gap-3 mb-12">
          <Shield className="w-10 h-10 text-primary" />
          <span className="text-2xl font-bold text-foreground">ThreatIQ</span>
        </Link>

        <h2 className="text-5xl font-bold text-foreground mb-6">
          Create a New Password
        </h2>
        <p className="text-lg text-muted-foreground">
          Choose a strong password to protect your account and secure your access to ThreatIQ.
        </p>
      </div>

      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Reset Your Password</h1>
            <p className="text-muted-foreground">Enter a new password for your account</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                New Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
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

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Input
                  type={showConfirm ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="bg-card border-border text-foreground placeholder:text-muted-foreground pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/70 hover:text-primary"
                >
                  {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
              Reset Password
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/login" className="text-primary hover:text-accent text-sm font-medium">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
