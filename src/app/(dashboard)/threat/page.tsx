'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Grid, List } from 'lucide-react';

const THREATS = [
  {
    id: '#INC-89422',
    title: 'Traffic Accident on Ahmadu Bello Way',
    description: 'Multi-vehicle collision reported on Ahmadu Bello Way near Wuse Market, Abuja. Emergency services on scene. Avoid area.',
    location: 'Abuja - Ahmadu Bello Way, Wuse',
    severity: 'CRITICAL',
    type: 'ACCIDENT',
    verified: true,
    reports: 12,
    confidence: '98%',
    time: '2 mins ago'
  },
  {
    id: '#INC-89419',
    title: 'Suspicious Activity in Lekki',
    description: 'Multiple reports of suspicious individuals near Lekki Phase 1 waterfront, Lagos. Police dispatched.',
    location: 'Lagos - Lekki Phase 1',
    severity: 'HIGH',
    type: 'SUSPICIOUS',
    verified: true,
    reports: 8,
    confidence: '89%',
    time: '14 mins ago'
  },
  {
    id: '#INC-89415',
    title: 'Road Closure on Old Aba Road',
    description: 'Old Aba Road in Port Harcourt closed for bridge maintenance. Use Ikwerre Road as alternate route.',
    location: 'Port Harcourt - Old Aba Road',
    severity: 'MEDIUM',
    type: 'CLOSURE',
    verified: true,
    reports: 5,
    confidence: '95%',
    time: '42 mins ago'
  },
  {
    id: '#INC-89410',
    title: 'Robbery Alert in Maitama',
    description: 'Armed robbery attempt reported along Aguiyi Ironsi Street, Maitama, Abuja. Security forces on patrol.',
    location: 'Abuja - Maitama District',
    severity: 'HIGH',
    type: 'CRIME',
    verified: true,
    reports: 24,
    confidence: '96%',
    time: '1 hour ago'
  },
  {
    id: '#INC-89405',
    title: 'Flooding on Kano-Zaria Road',
    description: 'Heavy flooding on Kano-Zaria expressway after overnight rains. Motorists warned to use alternate routes.',
    location: 'Kano - Kano-Zaria Expressway',
    severity: 'MEDIUM',
    type: 'HAZARD',
    verified: true,
    reports: 31,
    confidence: '92%',
    time: '2 hours ago'
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

export default function ThreatFeedPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedSeverity, setSelectedSeverity] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredThreats = THREATS.filter(threat => {
    const matchesSeverity = selectedSeverity === 'all' || threat.severity === selectedSeverity;
    const matchesSearch = threat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         threat.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSeverity && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#F9FAFB]">Incident Feed</h1>
        <p className="text-[#9CA3AF] mt-2">Real-time stream of community-reported safety incidents and alerts</p>
      </div>

      {/* Filters */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          {/* Search */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Search Incidents
            </label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4B5563]" />
              <Input
                placeholder="Search by title, description, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB] placeholder-[#4B5563]"
              />
            </div>
          </div>

          {/* Severity Filter */}
          <div className="w-full md:w-48">
            <label className="block text-sm font-medium text-[#F9FAFB] mb-2">
              Severity Level
            </label>
            <Select value={selectedSeverity} onValueChange={setSelectedSeverity}>
              <SelectTrigger className="bg-[#1A2332] border-[#2D3A4F] text-[#F9FAFB]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-[#1A2332] border-[#2D3A4F]">
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="CRITICAL">Critical</SelectItem>
                <SelectItem value="HIGH">High</SelectItem>
                <SelectItem value="MEDIUM">Medium</SelectItem>
                <SelectItem value="LOW">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 border border-[#2D3A4F] rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-all ${
                viewMode === 'grid'
                  ? 'bg-[#2563EB] text-[#F9FAFB]'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-all ${
                viewMode === 'list'
                  ? 'bg-[#2563EB] text-[#F9FAFB]'
                  : 'text-[#9CA3AF] hover:text-[#F9FAFB]'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Threats Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredThreats.map(threat => (
            <div key={threat.id} className="glass-card p-6 hover:border-[#2563EB]/50 transition-all cursor-pointer group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={getSeverityColor(threat.severity)}>
                      {threat.severity}
                    </span>
                    {threat.verified && (
                      <span className="px-2 py-1 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                        Verified
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-[#F9FAFB] group-hover:text-[#2563EB] transition">
                    {threat.title}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#4B5563]">{threat.time}</div>
                  <div className="text-[#2563EB] font-mono text-sm">{threat.id}</div>
                </div>
              </div>

              <p className="text-[#9CA3AF] text-sm mb-4 line-clamp-2">
                {threat.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-[#4B5563] mb-1">Location</p>
                  <p className="text-sm text-[#F9FAFB]">{threat.location}</p>
                </div>
                <div>
                  <p className="text-xs text-[#4B5563] mb-1">Confidence</p>
                  <p className="text-sm text-[#F9FAFB]">{threat.confidence}</p>
                </div>
                <div>
                  <p className="text-xs text-[#4B5563] mb-1">Type</p>
                  <p className="text-sm text-[#F9FAFB]">{threat.type}</p>
                </div>
                <div>
                  <p className="text-xs text-[#4B5563] mb-1">Community Reports</p>
                  <p className="text-sm text-[#F9FAFB]">{threat.reports} reports</p>
                </div>
              </div>

              <Button className="w-full bg-[#2563EB]/20 hover:bg-[#2563EB] text-[#2563EB] hover:text-white border border-[#2563EB]/50">
                View Details
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2D3A4F]">
                <th className="text-left py-4 px-6 text-xs font-semibold text-[#4B5563] uppercase">Threat</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-[#4B5563] uppercase">Type</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-[#4B5563] uppercase">Location</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-[#4B5563] uppercase">Severity</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-[#4B5563] uppercase">Confidence</th>
                <th className="text-left py-4 px-6 text-xs font-semibold text-[#4B5563] uppercase">Reports</th>
              </tr>
            </thead>
            <tbody>
              {filteredThreats.map(threat => (
                <tr
                  key={threat.id}
                  className="border-b border-[#1A2332] hover:bg-[#1A2332]/50 transition cursor-pointer"
                >
                  <td className="py-4 px-6">
                    <div>
                      <div className="text-[#2563EB] font-mono text-xs">{threat.id}</div>
                      <div className="text-sm text-[#F9FAFB] font-medium">{threat.title}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-[#9CA3AF]">{threat.type}</td>
                  <td className="py-4 px-6 text-sm text-[#9CA3AF]">{threat.location}</td>
                  <td className="py-4 px-6">
                    <span className={getSeverityColor(threat.severity)}>
                      {threat.severity}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-[#F9FAFB]">{threat.confidence}</td>
                  <td className="py-4 px-6 text-sm text-[#F9FAFB]">{threat.reports}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
