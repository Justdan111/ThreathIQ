'use client';

import {
  AlertTriangle,
  MapPin,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Bell,
  HelpCircle,
  Search,
  RotateCcw,
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const KPI_DATA = [
  {
    icon: AlertTriangle,
    label: 'Active Incidents',
    value: '247',
    change: '+12%',
    changeText: 'vs last week',
    trend: 'up',
    color: 'text-blue-400',
    barColor: 'bg-blue-500',
  },
  {
    icon: MapPin,
    label: 'High-Risk Areas',
    value: '18',
    change: '-5%',
    changeText: 'avg resolution',
    trend: 'down',
    color: 'text-orange-400',
    barColor: 'bg-orange-500',
  },
  {
    icon: CheckCircle,
    label: 'Total Incidents',
    value: '8,920',
    change: '+8%',
    changeText: 'this month',
    trend: 'up',
    color: 'text-purple-400',
    barColor: 'bg-purple-500',
  },
  {
    icon: Bell,
    label: 'Community Reports',
    value: '312',
    change: '+15%',
    changeText: 'verified',
    trend: 'up',
    color: 'text-green-400',
    barColor: 'bg-green-500',
  },
];

const LIVE_FEED_INCIDENTS = [
  {
    id: '#INC-89422',
    severity: 'CRITICAL',
    title: 'Traffic Accident - Downtown',
    description: 'Multi-vehicle collision at Main St intersection. Emergency services on scene.',
    time: '2m ago',
    color: 'text-red-400',
    badgeBg: 'bg-red-500/20',
  },
  {
    id: '#INC-89419',
    severity: 'HIGH',
    title: 'Suspicious Activity - Park Area',
    description: 'Reports of suspicious individuals in Central Park near playground.',
    time: '12m ago',
    color: 'text-orange-400',
    badgeBg: 'bg-orange-500/20',
  },
  {
    id: '#INC-89415',
    severity: 'MEDIUM',
    title: 'Road Closure - Oak Street',
    description: 'Utility work closure between 3rd and 4th Ave. Use alternate routes.',
    time: '45m ago',
    color: 'text-yellow-400',
    badgeBg: 'bg-yellow-500/20',
  },
  {
    id: '#INC-89412',
    severity: 'MEDIUM',
    title: 'Air Quality Alert',
    description: 'Elevated air quality index in downtown area. Sensitive groups should avoid outdoor activities.',
    time: '1h ago',
    color: 'text-yellow-400',
    badgeBg: 'bg-yellow-500/20',
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-12">
      {/* Header with Search and Status */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="w-full md:w-96">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B5563]" />
            <Input
              placeholder="Search incidents, locations, or reporters..."
              className="pl-10 bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg border border-[#2D3A4F] hover:bg-[#1A2332] transition">
            <Bell className="w-5 h-5 text-[#9CA3AF]" />
          </button>
          <button className="p-2 rounded-lg border border-[#2D3A4F] hover:bg-[#1A2332] transition">
            <HelpCircle className="w-5 h-5 text-[#9CA3AF]" />
          </button>
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#2D3A4F] bg-[#1A2332]">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-medium text-green-400">Live System: Stable</span>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {KPI_DATA.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div key={idx} className="glass-card p-6 flex flex-col justify-between hover:border-[#3D4A5F] transition">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[#9CA3AF]">{kpi.label}</span>
                  <div className="flex items-center gap-1">
                    {kpi.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-400" />}
                    {kpi.trend === 'down' && <TrendingDown className="w-4 h-4 text-red-400" />}
                    <span className={kpi.trend === 'up' ? 'text-green-400' : 'text-red-400'} style={{fontSize: '0.75rem', fontWeight: '600'}}>
                      {kpi.change}
                    </span>
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#F9FAFB] mb-4">{kpi.value}</div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="h-1 bg-[#2D3A4F] rounded-full overflow-hidden">
                  <div className={`h-full ${kpi.barColor} rounded-full`} style={{width: `${60 + idx * 10}%`}}></div>
                </div>
                <p className="text-xs text-[#4B5563]">{kpi.changeText}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Map Section */}
        <div className="lg:col-span-2">
          <div className="glass-card overflow-hidden">
            {/* Map Header */}
            <div className="p-6 border-b border-[#2D3A4F] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-400" />
                <div>
                  <h2 className="text-lg font-semibold text-[#F9FAFB]">Regional Incident Heatmap - San Francisco</h2>
                  <p className="text-xs text-[#9CA3AF] mt-1">Real-time community incident distribution</p>
                </div>
              </div>
            </div>

            {/* Layer Controls */}
            <div className="px-6 py-4 border-b border-[#2D3A4F] flex items-center gap-3">
              <button className="px-3 py-1 rounded-lg bg-blue-500/20 text-blue-400 text-xs font-medium border border-blue-500/30 hover:bg-blue-500/30 transition">
                Layer: Incidents
              </button>
              <button className="px-3 py-1 rounded-lg bg-[#2D3A4F] text-[#9CA3AF] text-xs font-medium border border-[#3D4A5F] hover:bg-[#3D4A5F] transition">
                Layer: Risk Zones
              </button>
            </div>

            {/* Map Placeholder */}
            <div className="relative h-96 bg-[#0F172A] overflow-hidden">
              {/* Simple Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1A2332] to-[#0F172A]">
                {/* Map indicators */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-red-500 shadow-lg animate-pulse" title="Critical - Downtown Accident"></div>
                <div className="absolute top-2/3 left-2/3 w-2 h-2 rounded-full bg-orange-400 shadow-lg" title="High Risk Area"></div>
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-yellow-400 shadow-lg" title="Medium Priority"></div>
                
                {/* Legend */}
                <div className="absolute bottom-4 right-4 glass-card p-4">
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span className="text-[#F9FAFB]">Critical Zone</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <span className="text-[#F9FAFB]">High Risk Area</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <span className="text-[#F9FAFB]">Area Alert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Info Alert */}
            <div className="p-4 border-t border-[#2D3A4F] bg-red-500/10 border-l-4 border-l-red-500">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-red-400">ALERT: ACCIDENT - DOWNTOWN</h4>
                  <p className="text-xs text-[#9CA3AF] mt-1">Multi-vehicle collision detected at Main Street & 5th Avenue. Emergency response in progress.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Feed Sidebar */}
        <div className="glass-card p-6 flex flex-col h-fit max-h-[600px] overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-[#F9FAFB]">Live Incident Feed</h3>
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" title="Live"></div>
            </div>
            <button className="p-1 hover:bg-[#2D3A4F] rounded transition">
              <RotateCcw className="w-4 h-4 text-[#9CA3AF]" />
            </button>
          </div>

          {/* Feed Items */}
          <div className="space-y-4 overflow-y-auto flex-1 pr-2">
            {LIVE_FEED_INCIDENTS.map((incident) => (
              <div key={incident.id} className="border-l-2 border-l-[#2D3A4F] pl-4 py-2 hover:bg-[#0F172A] rounded transition">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className={`px-2 py-0.5 rounded-sm text-xs font-bold ${incident.badgeBg} ${incident.color}`}>
                    {incident.severity}
                  </span>
                  <span className="text-xs text-[#4B5563] whitespace-nowrap">{incident.time}</span>
                </div>
                <h4 className="text-sm font-semibold text-[#F9FAFB] mb-1">{incident.title}</h4>
                <p className="text-xs text-[#9CA3AF] line-clamp-2">{incident.description}</p>
                <div className="mt-2">
                  <a href={`/dashboard/threats/${incident.id}`} className="text-xs text-blue-400 hover:text-blue-300 font-medium">
                    View Details →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-[#2D3A4F]">
            <a href="/dashboard/threats" className="text-sm text-center block text-blue-400 hover:text-blue-300 font-medium">
              View Full Incident Log
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
