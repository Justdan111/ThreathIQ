'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin, TrendingUp } from 'lucide-react';

const THREAT_HOTSPOTS = [
  {
    id: 1,
    name: 'Downtown - Main St Intersection',
    incidents: 12,
    severity: 'CRITICAL',
    description: 'Major traffic accident - 3 vehicles involved',
    coordinates: { x: '35%', y: '62%' }
  },
  {
    id: 2,
    name: 'Central Park Area',
    incidents: 8,
    severity: 'HIGH',
    description: 'Suspicious activity reported near playground',
    coordinates: { x: '58%', y: '55%' }
  },
  {
    id: 3,
    name: 'Oak Street',
    incidents: 4,
    severity: 'MEDIUM',
    description: 'Road closure due to utility work',
    coordinates: { x: '55%', y: '78%' }
  },
  {
    id: 4,
    name: 'Riverside Shopping Area',
    incidents: 3,
    severity: 'MEDIUM',
    description: 'Increased police presence',
    coordinates: { x: '62%', y: '35%' }
  },
];

const REGIONAL_STATS = [
  { region: 'Downtown', incidents: 28, trend: '+12%' },
  { region: 'Midtown', incidents: 18, trend: '+5%' },
  { region: 'Uptown', incidents: 14, trend: '-3%' },
  { region: 'Suburbs', incidents: 12, trend: '+8%' },
  { region: 'Outskirts', incidents: 8, trend: '+2%' },
];

const getSeverityColor = (severity: string) => {
  const colors: { [key: string]: string } = {
    CRITICAL: '#E63946',
    HIGH: '#F59E0B',
    MEDIUM: '#F59E0B',
    LOW: '#22D3EE',
  };
  return colors[severity] || '#22D3EE';
};

export default function MapPage() {
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [timeRange, setTimeRange] = useState('24h');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#F9FAFB]">Map Intelligence</h1>
        <p className="text-[#9CA3AF] mt-2">Real-time incident heatmap and geographic risk visualization</p>
      </div>

      {/* Controls */}
      <div className="glass-card p-6 flex flex-col md:flex-row gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
            Time Range
          </label>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-full md:w-48 bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#1A2332] border-[#2D3A4F]">
              <SelectItem value="24h">Last 24 Hours</SelectItem>
              <SelectItem value="7d">Last 7 Days</SelectItem>
              <SelectItem value="30d">Last 30 Days</SelectItem>
              <SelectItem value="all">All Time</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" className="border-[#2D3A4F] text-[#2563EB] hover:bg-[#2563EB]/10 bg-transparent">
            Layer: Network
          </Button>
          <Button variant="outline" className="border-[#2D3A4F] text-[#2563EB] hover:bg-[#2563EB]/10 bg-transparent">
            Layer: Physical
          </Button>
        </div>
      </div>

      {/* Main Map */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-[#F9FAFB] mb-4">Regional Threat Heatmap - Africa</h2>

        <div className="relative w-full h-96 bg-linear-to-br from-[#0B1F3A] to-[#1A2332] rounded-lg border border-[#2D3A4F] overflow-hidden">
          {/* Placeholder Map */}
          <div className="w-full h-full flex items-center justify-center text-[#4B5563]">
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p>Interactive map visualization would load here</p>
            </div>
          </div>

          {/* Threat Hotspots Overlay */}
          {THREAT_HOTSPOTS.map(hotspot => (
            <div
              key={hotspot.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
              style={{ left: hotspot.coordinates.x, top: hotspot.coordinates.y }}
              onClick={() => setSelectedHotspot(hotspot.id)}
            >
              {/* Pulse Ring */}
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: getSeverityColor(hotspot.severity),
                  opacity: 0.2,
                  left: '-20px',
                  top: '-20px'
                }}
              ></div>

              {/* Main Marker */}
              <div
                className="w-4 h-4 rounded-full border-2 border-white"
                style={{ backgroundColor: getSeverityColor(hotspot.severity) }}
              ></div>

              {/* Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-[#0F172A] border border-[#2D3A4F] text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {hotspot.name}
              </div>
            </div>
          ))}
        </div>

        {/* Map Legend */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Critical Zone', color: '#E63946' },
            { label: 'High Traffic', color: '#F59E0B' },
            { label: 'Node Stable', color: '#10B981' },
            { label: 'Low Activity', color: '#22D3EE' },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-[#9CA3AF]">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Hotspot Details */}
      {selectedHotspot && (
        <div className="glass-card p-6 border-l-4 border-blue-500">
          {THREAT_HOTSPOTS.filter(h => h.id === selectedHotspot).map(hotspot => (
            <div key={hotspot.id}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#F9FAFB]">{hotspot.name}</h3>
                  <p className="text-[#9CA3AF] text-sm mt-1">{hotspot.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold threat-${hotspot.severity.toLowerCase()}`}>
                  {hotspot.severity}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 rounded-lg bg-[#1A2332]/50">
                <div>
                  <p className="text-[#9CA3AF] text-xs mb-1">Active Threats</p>
                  <p className="text-2xl font-bold text-[#F9FAFB]">{hotspot.incidents}</p>
                </div>
                <div>
                  <p className="text-[#9CA3AF] text-xs mb-1">Response Time</p>
                  <p className="text-2xl font-bold text-[#F9FAFB]">2.4h</p>
                </div>
                <div>
                  <p className="text-[#9CA3AF] text-xs mb-1">Confidence</p>
                  <p className="text-2xl font-bold text-green-400">98%</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full mt-4 border-[#2D3A4F] text-[#2563EB] hover:bg-[#2563EB]/10 bg-transparent"
              >
                View Detailed Analysis
              </Button>
            </div>
          ))}
        </div>
      )}

      {/* Regional Statistics */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-[#F9FAFB] mb-6">Threats by Region</h2>

        <div className="space-y-4">
          {REGIONAL_STATS.map((stat, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-lg bg-[#1A2332]/50 hover:bg-[#1A2332] transition">
              <div className="flex-1">
                <h3 className="font-semibold text-[#F9FAFB] mb-2">{stat.region}</h3>
                <div className="w-full bg-[#0F172A] rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: `${(stat.incidents / 160) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="ml-6 text-right">
                <div className="text-xl font-bold text-[#F9FAFB]">{stat.incidents}</div>
                <div className="flex items-center gap-1 text-xs text-green-400">
                  <TrendingUp className="w-3 h-3" />
                  <span>{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
