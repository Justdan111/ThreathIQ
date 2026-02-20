'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, CheckCircle } from 'lucide-react';

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-foreground">ThreatIQ</span>
          </Link>

          <div className="w-16 h-16 rounded-lg bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-2">Email Verified</h1>
          <p className="text-muted-foreground">Your email has been successfully verified. You can now access your dashboard.</p>
        </div>

        <Link href="/dashboard" className="w-full">
          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6">
            Go to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}
