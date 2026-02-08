'use client';

import {
  AlertTriangle,
  MapPin,
  CheckCircle,
  Zap,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const KPI_DATA = [
  {
    icon: AlertTriangle,
    label: 'Active Threats',
    value: '1,284',
    change: '+12% vs last week',
    trend: 'up',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: MapPin,
    label: 'High-Risk Zones',
    value: '42',
    change: '-5.2% avg resolution 4h',
    trend: 'down',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10'
  },
  {
    icon: CheckCircle,
    label: 'Verified Reports',
    value: '8,920',
    change: '+8% this month',
    trend: 'up',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: Zap,
    label: 'Community Score',
    value: '98.2%',
    change: '+0.4% health increase',
    trend: 'up',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10'
  },
];

const THREAT_TIMELINE_DATA = [
  { name: 'Mon', threats: 145, verified: 128 },
  { name: 'Tue', threats: 158, verified: 142 },
  { name: 'Wed', threats: 172, verified: 156 },
  { name: 'Thu', threats: 164, verified: 148 },
  { name: 'Fri', threats: 189, verified: 171 },
  { name: 'Sat', threats: 201, verified: 185 },
  { name: 'Sun', threats: 158, verified: 142 },
];

const THREAT_DISTRIBUTION = [
  { name: 'Malware', value: 42, color: '#E63946' },
  { name: 'Phishing', value: 28, color: '#F59E0B' },
  { name: 'Credentials', value: 18, color: '#2563EB' },
  { name: 'DDoS', value: 12, color: '#22D3EE' },
];

const RECENT_THREATS = [
  {
    id: '#TR-89422',
    type: 'MALWARE C2',
    reporter: 'Alex Jensen',
    severity: 'CRITICAL',
    time: '2 mins ago',
    verified: true
  },
  {
    id: '#TR-89419',
    type: 'PHISHING',
    reporter: 'Sarah Miller',
    severity: 'HIGH',
    time: '14 mins ago',
    verified: true
  },
  {
    id: '#TR-89415',
    type: 'CREDENTIALS',
    reporter: 'Kevin Duong',
    severity: 'MEDIUM',
    time: '42 mins ago',
    verified: false
  },
];

const getSeverityColor = (severity: string) => {
  const colors: { [key: string]: string } = {
    CRITICAL: 'threat-critical',
    HIGH: 'threat-high',
    MEDIUM: 'threat-medium',
    LOW: 'threat-low',
  };
  return colors[severity] || 'threat-low';
};

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#F9FAFB]">Dashboard</h1>
        <p className="text-[#9CA3AF] mt-2">Real-time threat intelligence and community insights</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_DATA.map((kpi, idx) => (
          <div key={idx} className="kpi-card">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
              <div className="flex items-center gap-1">
                {kpi.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-green-400" />
                )}
                <span className="text-xs text-green-400">{kpi.change.split(' ')[0]}</span>
              </div>
            </div>
            <p className="text-[#9CA3AF] text-sm mb-1">{kpi.label}</p>
            <h3 className="text-2xl font-bold text-[#F9FAFB] mb-2">{kpi.value}</h3>
            <p className="text-xs text-[#4B5563]">{kpi.change}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Threat Timeline */}
        <div className="lg:col-span-2 glass-card p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-[#F9FAFB] mb-2">Threat Intelligence Trends</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-lg bg-[#2563EB]/20 text-[#2563EB] text-xs font-medium">
                7 Days
              </button>
              <button className="px-3 py-1 rounded-lg bg-[#1A2332] text-[#9CA3AF] text-xs font-medium hover:bg-[#2D3A4F]">
                30 Days
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={THREAT_TIMELINE_DATA}>
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
                dataKey="threats"
                stroke="#2563EB"
                strokeWidth={2}
                dot={{ fill: '#2563EB', r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="verified"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ fill: '#10B981', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Distribution */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB] mb-6">Threat Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={THREAT_DISTRIBUTION}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {THREAT_DISTRIBUTION.map((entry, index) => (
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
          <div className="mt-6 space-y-3">
            {THREAT_DISTRIBUTION.map((threat, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
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

      {/* Recent Threats Table */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB]">Recent Threat Reports</h2>
          <button className="text-[#2563EB] hover:text-[#22D3EE] text-sm font-medium">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2D3A4F]">
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">Threat ID</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">Reporter</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">Category</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">Severity</th>
                <th className="text-left py-4 px-4 text-xs font-semibold text-[#4B5563] uppercase">Time</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_THREATS.map((threat, idx) => (
                <tr key={idx} className="border-b border-[#1A2332] hover:bg-[#1A2332]/50 transition">
                  <td className="py-4 px-4 text-sm text-[#2563EB] font-mono">{threat.id}</td>
                  <td className="py-4 px-4 text-sm text-[#F9FAFB]">{threat.reporter}</td>
                  <td className="py-4 px-4 text-sm">
                    <span className="text-[#9CA3AF]">{threat.type}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={getSeverityColor(threat.severity)}>
                      {threat.severity}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-[#9CA3AF]">{threat.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
