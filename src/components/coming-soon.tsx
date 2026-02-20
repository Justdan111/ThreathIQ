import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ComingSoonProps {
  title: string;
  description?: string;
  phase?: number;
}

export default function ComingSoon({ title, description, phase = 2 }: ComingSoonProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <div className="w-16 h-16 rounded-2xl bg-[#2563EB]/20 flex items-center justify-center mb-6">
        <Shield className="w-8 h-8 text-[#2563EB]" />
      </div>
      <h1 className="text-3xl font-bold text-[#F9FAFB] mb-3">{title}</h1>
      <p className="text-[#9CA3AF] max-w-md mb-2">
        {description || 'This feature is under development and will be available soon.'}
      </p>
      <span className="inline-block px-3 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold mb-8">
        Phase {phase}
      </span>
      <Link
        href="/dashboard"
        className="flex items-center gap-2 text-sm text-[#2563EB] hover:text-[#22D3EE] font-medium transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>
    </div>
  );
}
