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
      <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-sidebar to-background flex-col justify-center p-12">
        <Link href="/" className="flex items-center gap-3 mb-12">
          <Shield className="w-10 h-10 text-primary" />
          <span className="text-2xl font-bold text-foreground">ThreatIQ</span>
        </Link>

        <div>
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Secure Password Recovery
          </h2>
          <p className="text-lg text-muted-foreground">
            We&apos;ll send you instructions to reset your password securely. Your account remains protected throughout the process.
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {!submitted ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">Forgot Password?</h1>
                <p className="text-muted-foreground">No problem. Tell us your email and we&apos;ll send recovery instructions.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
                  Send Recovery Link
                </Button>
              </form>

              <div className="mt-6 text-center">
                <Link href="/login" className="text-primary hover:text-accent text-sm font-medium">
                  Back to Login
                </Link>
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-400" />
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-2">Check Your Email</h2>
              <p className="text-muted-foreground mb-6">
                We&apos;ve sent a password recovery link to <strong>{email}</strong>
              </p>

              <div className="p-4 rounded-lg bg-card border border-border mb-6">
                <p className="text-sm text-muted-foreground">
                  The link expires in 1 hour. If you don&apos;t receive it, check your spam folder or try again.
                </p>
              </div>

              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="w-full border-border text-primary hover:bg-primary/10"
              >
                Try Another Email
              </Button>

              <div className="mt-4">
                <Link href="/login" className="text-primary hover:text-accent text-sm font-medium">
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
