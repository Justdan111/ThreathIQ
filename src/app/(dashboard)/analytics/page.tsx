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
  { date: 'Jan 1', incidents: 24, verified: 22, resolved: 19 },
  { date: 'Jan 8', incidents: 32, verified: 28, resolved: 24 },
  { date: 'Jan 15', incidents: 41, verified: 37, resolved: 32 },
  { date: 'Jan 22', incidents: 48, verified: 43, resolved: 38 },
  { date: 'Jan 29', incidents: 55, verified: 49, resolved: 42 },
  { date: 'Feb 5', incidents: 62, verified: 56, resolved: 48 },
  { date: 'Feb 12', incidents: 71, verified: 64, resolved: 55 },
];

const THREAT_BY_REGION = [
  { region: 'Downtown', incidents: 45, resolved: 38 },
  { region: 'Midtown', incidents: 38, resolved: 32 },
  { region: 'Uptown', incidents: 31, resolved: 26 },
  { region: 'Suburbs', incidents: 28, resolved: 24 },
  { region: 'Outskirts', incidents: 15, resolved: 12 },
];

const THREAT_TYPES = [
  { name: 'Accidents', value: 35, color: '#E63946' },
  { name: 'Suspicious Activity', value: 28, color: '#F59E0B' },
  { name: 'Crime Reports', value: 22, color: '#2563EB' },
  { name: 'Hazards', value: 15, color: '#22D3EE' },
];

const RESPONSE_TIMES = [
  { severity: 'Critical', avgTime: '8m', p95: '25m', p99: '1h' },
  { severity: 'High', avgTime: '25m', p95: '1h', p99: '4h' },
  { severity: 'Medium', avgTime: '2h', p95: '6h', p99: '12h' },
  { severity: 'Low', avgTime: '12h', p95: '24h', p99: '48h' },
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
          <p className="text-[#9CA3AF] mt-2">Community safety trends and regional incident analysis</p>
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

      {/* Incident Trends */}
      <div className="glass-card p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB] mb-2">Incident Trends Over Time</h2>
          <p className="text-[#9CA3AF] text-sm">Last 42 days - Total, Verified, and Resolved incidents</p>
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
              dataKey="incidents"
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
          <h2 className="text-xl font-semibold text-[#F9FAFB] mb-6">Incidents by Area</h2>
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
              <Bar dataKey="incidents" fill="#E63946" radius={[8, 8, 0, 0]} />
              <Bar dataKey="resolved" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Incident Type Distribution */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB] mb-6">Incident Type Distribution</h2>
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
