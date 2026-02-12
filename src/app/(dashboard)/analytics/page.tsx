'use client';

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Download, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const THREAT_TRENDS = [
  { date: 'Jan 1', threats: 120, verified: 108, resolved: 95 },
  { date: 'Jan 8', threats: 145, verified: 128, resolved: 110 },
  { date: 'Jan 15', threats: 162, verified: 145, resolved: 128 },
  { date: 'Jan 22', threats: 178, verified: 158, resolved: 142 },
  { date: 'Jan 29', threats: 195, verified: 172, resolved: 155 },
  { date: 'Feb 5', threats: 218, verified: 192, resolved: 172 },
  { date: 'Feb 12', threats: 245, verified: 215, resolved: 195 },
];

const THREAT_BY_REGION = [
  { region: 'West Africa', threats: 340, resolved: 310 },
  { region: 'East Africa', threats: 280, resolved: 250 },
  { region: 'South Africa', threats: 220, resolved: 205 },
  { region: 'North Africa', threats: 180, resolved: 165 },
  { region: 'Central Africa', threats: 95, resolved: 85 },
];

const THREAT_TYPES = [
  { name: 'Malware', value: 42, color: '#E63946' },
  { name: 'Phishing', value: 28, color: '#F59E0B' },
  { name: 'Credentials', value: 18, color: '#2563EB' },
  { name: 'DDoS', value: 12, color: '#22D3EE' },
];

const RESPONSE_TIMES = [
  { severity: 'Critical', avgTime: '12m', p95: '45m', p99: '2h' },
  { severity: 'High', avgTime: '45m', p95: '2h', p99: '8h' },
  { severity: 'Medium', avgTime: '4h', p95: '12h', p99: '24h' },
  { severity: 'Low', avgTime: '24h', p95: '48h', p99: '72h' },
];

const COMMUNITY_STATS = [
  { label: 'Total Reporters', value: '2,847', trend: '+8.1%' },
  { label: 'Avg Reports/Day', value: '1,245', trend: '+5.3%' },
  { label: 'Verification Rate', value: '94.2%', trend: '+2.1%' },
  { label: 'Response Time', value: '2.4h', trend: '-12.5%' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#F9FAFB]">Analytics & Insights</h1>
          <p className="text-[#9CA3AF] mt-2">Platform-wide threat intelligence and community metrics</p>
        </div>
        <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </Button>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {COMMUNITY_STATS.map((stat, idx) => (
          <div key={idx} className="kpi-card">
            <p className="text-[#9CA3AF] text-sm mb-2">{stat.label}</p>
            <h3 className="text-2xl font-bold text-[#F9FAFB] mb-3">{stat.value}</h3>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-xs text-green-400">{stat.trend}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Threat Trends */}
      <div className="glass-card p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB] mb-2">Threat Trends Over Time</h2>
          <p className="text-[#9CA3AF] text-sm">Last 42 days - Total, Verified, and Resolved threats</p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={THREAT_TRENDS}>
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
            <Legend />
            <Line
              type="monotone"
              dataKey="threats"
              stroke="#E63946"
              strokeWidth={2}
              dot={{ fill: '#E63946', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="verified"
              stroke="#10B981"
              strokeWidth={2}
              dot={{ fill: '#10B981', r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="resolved"
              stroke="#2563EB"
              strokeWidth={2}
              dot={{ fill: '#2563EB', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Regional & Type Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Regional Heatmap */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB] mb-6">Threats by Region</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={THREAT_BY_REGION}>
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
              <Legend />
              <Bar dataKey="threats" fill="#E63946" radius={[8, 8, 0, 0]} />
              <Bar dataKey="resolved" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Type Distribution */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB] mb-6">Threat Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={THREAT_TYPES}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {THREAT_TYPES.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1A2332',
                  border: '1px solid #2D3A4F',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-6 space-y-2">
            {THREAT_TYPES.map((threat, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: threat.color }}
                  ></div>
                  <span className="text-[#9CA3AF]">{threat.name}</span>
                </div>
                <span className="text-[#F9FAFB] font-semibold">{threat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Response Time Analysis */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-[#F9FAFB] mb-6">Response Time Analysis</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2D3A4F]">
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">Severity</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">Avg Response</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">P95 Response</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">P99 Response</th>
              </tr>
            </thead>
            <tbody>
              {RESPONSE_TIMES.map((row, idx) => (
                <tr key={idx} className="border-b border-[#1A2332] hover:bg-[#1A2332]/50 transition">
                  <td className="py-4 px-4 font-medium text-[#F9FAFB]">{row.severity}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-[#F9FAFB]">{row.avgTime}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-[#F9FAFB]">{row.p95}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-[#F9FAFB]">{row.p99}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* AI Prediction Panel */}
      <div className="glass-card p-6 border-l-4 border-blue-500">
        <h2 className="text-xl font-semibold text-[#F9FAFB] mb-4">AI Risk Prediction</h2>
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[#9CA3AF]">Predicted threat surge (next 7 days)</span>
              <span className="text-[#2563EB] font-semibold">+23%</span>
            </div>
            <div className="w-full bg-[#1A2332] rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
          <p className="text-sm text-[#9CA3AF]">
            Based on historical patterns and current attack surface analysis, we predict a 23% increase in threat activity next week, primarily driven by APT campaigns targeting financial sectors.
          </p>
        </div>
      </div>
    </div>
  );
}
