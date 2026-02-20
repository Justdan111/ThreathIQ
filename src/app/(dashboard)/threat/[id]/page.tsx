'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, Share2, CheckCircle, Flag, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ACTIVITY_DATA = [
  { time: '10:00', reports: 1 },
  { time: '11:00', reports: 3 },
  { time: '12:00', reports: 8 },
  { time: '13:00', reports: 15 },
  { time: '14:00', reports: 28 },
  { time: '15:00', reports: 42 },
];

export default function IncidentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Header */}
      <div className="glass-card p-8 border-l-4 border-red-500">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-red-500/20">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 mb-2">
                CRITICAL
              </span>
              <h1 className="text-3xl font-bold text-foreground">
                Major Traffic Accident - Downtown
              </h1>
              <p className="text-muted-foreground mt-2">ID: #INC-89422</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-border text-primary hover:bg-primary/10 bg-transparent">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent">
              <Flag className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-card/50 rounded-lg">
          <div>
            <p className="text-muted-foreground text-xs mb-1">AI Confidence</p>
            <p className="text-xl font-bold text-foreground">98%</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Community Reports</p>
            <p className="text-xl font-bold text-foreground">42</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">Affected Assets</p>
            <p className="text-xl font-bold text-foreground">1,240</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xs mb-1">First Seen</p>
            <p className="text-xl font-bold text-foreground">2 hrs ago</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">Threat Overview</h2>
        <p className="text-muted-foreground leading-relaxed">
          Global coordination detected across financial sector endpoints. Targeted exploitation of zero-day vulnerabilities in supply chain software. Multiple nation-state indicators observed. This is a sophisticated campaign with indicators matching previous APT activities.
        </p>
      </div>

      {/* Verification Status */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Verification Status</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">AI Analysis verified • 98% Probability Score</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">Human Verified • Reviewed by Senior Analyst &apos;Oracle&apos;</span>
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">Report Activity Timeline</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={ACTIVITY_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2D3A4F" />
            <XAxis stroke="#4B5563" style={{ fontSize: '12px' }} />
            <YAxis stroke="#4B5563" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1A2332',
                border: '1px solid #2D3A4F',
                borderRadius: '8px'
              }}
            />
            <Line
              type="monotone"
              dataKey="reports"
              stroke="#E63946"
              strokeWidth={2}
              dot={{ fill: '#E63946', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Technical Indicators */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Technical Indicators</h2>
        <div className="space-y-3 font-mono text-sm">
          <div className="p-3 rounded bg-card border border-border">
            <p className="text-muted-foreground/70">Hash (SHA256)</p>
            <p className="text-primary break-all">a7f8c3d9e2b1f4a6c8d1e3f5a7b9c1d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a1</p>
          </div>
          <div className="p-3 rounded bg-card border border-border">
            <p className="text-muted-foreground/70">Command & Control Domains</p>
            <p className="text-destructive">malicious-c2.example.com, command.threat.net</p>
          </div>
          <div className="p-3 rounded bg-card border border-border">
            <p className="text-muted-foreground/70">MITRE ATT&CK Framework</p>
            <p className="text-cyan-400">T1547.001, T1543.004, T1588.002</p>
          </div>
        </div>
      </div>

      {/* Community Discussion */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Community Intel (42 Reports)
        </h2>
        <div className="space-y-4">
          {[
            {
              author: '@CyberGuard_88',
              comment: 'I\'ve seen identical C2 callbacks in our network logs. Can confirm this is active.',
              verified: true
            },
            {
              author: '@NetAdmin_Mike',
              comment: 'Firewall logs show connection attempts from these IPs at 2023-11-24 14:02:11',
              verified: true
            },
          ].map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-card/50 border border-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-semibold text-foreground">{item.author}</span>
                {item.verified && (
                  <CheckCircle className="w-4 h-4 text-green-400" />
                )}
              </div>
              <p className="text-muted-foreground">{item.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button className="flex-1 bg-green-500/20 text-green-400 hover:bg-green-500 hover:text-white border border-green-500/30">
          Confirm Threat
        </Button>
        <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
          Add to Blocklist
        </Button>
        <Button variant="outline" className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10 bg-transparent">
          Report False Alert
        </Button>
      </div>
    </div>
  );
}
