'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  Clock,
  MapPin,
  Eye,
} from 'lucide-react';

type IncidentStatus = 'pending' | 'approved' | 'rejected';

interface PendingIncident {
  id: string;
  title: string;
  description: string;
  location: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  category: string;
  reportedBy: string;
  time: string;
  status: IncidentStatus;
}

const INITIAL_INCIDENTS: PendingIncident[] = [
  {
    id: 'INC-89455',
    title: 'Armed Robbery - Garki, Abuja',
    description: 'Multiple reports of armed robbery near Area 11 junction. Eyewitnesses report at least 3 suspects.',
    location: 'Garki, Area 11, Abuja',
    severity: 'critical',
    category: 'Theft/Crime',
    reportedBy: 'Chinedu O.',
    time: '5 mins ago',
    status: 'pending',
  },
  {
    id: 'INC-89453',
    title: 'Suspicious Package - Adeola Odeku, Lagos',
    description: 'Unattended bag spotted near bank entrance on Adeola Odeku Street, Victoria Island.',
    location: 'Victoria Island, Lagos',
    severity: 'high',
    category: 'Suspicious Activity',
    reportedBy: 'Bola A.',
    time: '18 mins ago',
    status: 'pending',
  },
  {
    id: 'INC-89450',
    title: 'Road Flooding - Aba Road, Port Harcourt',
    description: 'Heavy flooding on Aba Road making passage difficult. Several vehicles stuck.',
    location: 'Aba Road, Port Harcourt',
    severity: 'medium',
    category: 'Environmental Hazard',
    reportedBy: 'Emeka I.',
    time: '32 mins ago',
    status: 'pending',
  },
  {
    id: 'INC-89447',
    title: 'Gas Leak - Sabon Gari, Kano',
    description: 'Strong gas smell reported near Sabon Gari Market. Residents evacuating the area.',
    location: 'Sabon Gari, Kano',
    severity: 'high',
    category: 'Environmental Hazard',
    reportedBy: 'Musa D.',
    time: '45 mins ago',
    status: 'pending',
  },
  {
    id: 'INC-89443',
    title: 'Traffic Gridlock - Third Mainland Bridge, Lagos',
    description: 'Severe traffic buildup on Third Mainland Bridge due to broken-down tanker.',
    location: 'Third Mainland Bridge, Lagos',
    severity: 'low',
    category: 'Traffic',
    reportedBy: 'Kemi F.',
    time: '1 hour ago',
    status: 'pending',
  },
];

const severityConfig = {
  critical: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/40' },
  high: { bg: 'bg-orange-500/20', text: 'text-orange-400', border: 'border-orange-500/40' },
  medium: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/40' },
  low: { bg: 'bg-cyan-500/20', text: 'text-cyan-400', border: 'border-cyan-500/40' },
};

export default function AdminPage() {
  const [incidents, setIncidents] = useState<PendingIncident[]>(INITIAL_INCIDENTS);
  const [filter, setFilter] = useState<'all' | IncidentStatus>('pending');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleAction = (id: string, action: 'approved' | 'rejected') => {
    setIncidents(prev =>
      prev.map(inc => (inc.id === id ? { ...inc, status: action } : inc))
    );
  };

  const counts = {
    pending: incidents.filter(i => i.status === 'pending').length,
    approved: incidents.filter(i => i.status === 'approved').length,
    rejected: incidents.filter(i => i.status === 'rejected').length,
  };

  const filtered = filter === 'all' ? incidents : incidents.filter(i => i.status === filter);

  return (
    <div className="max-w-4xl space-y-6 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Approvals</h1>
        <p className="text-muted-foreground mt-1">Review and approve community-reported incidents</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="glass-card p-4 border border-border rounded-lg text-center">
          <Clock className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
          <p className="text-2xl font-bold text-foreground">{counts.pending}</p>
          <p className="text-xs text-muted-foreground">Pending</p>
        </div>
        <div className="glass-card p-4 border border-border rounded-lg text-center">
          <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <p className="text-2xl font-bold text-foreground">{counts.approved}</p>
          <p className="text-xs text-muted-foreground">Approved</p>
        </div>
        <div className="glass-card p-4 border border-border rounded-lg text-center">
          <XCircle className="w-5 h-5 text-red-400 mx-auto mb-1" />
          <p className="text-2xl font-bold text-foreground">{counts.rejected}</p>
          <p className="text-xs text-muted-foreground">Rejected</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 border-b border-border">
        {(['pending', 'approved', 'rejected', 'all'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-3 text-sm font-medium border-b-2 transition capitalize ${
              filter === tab
                ? 'border-primary text-primary'
                : 'border-transparent text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab}
            {tab === 'pending' && counts.pending > 0 && (
              <span className="ml-2 px-1.5 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold">
                {counts.pending}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Incident List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <ShieldCheck className="w-12 h-12 text-muted-foreground/70 mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground">No incidents in this category</p>
          </div>
        ) : (
          filtered.map(incident => {
            const sev = severityConfig[incident.severity];
            const isExpanded = expandedId === incident.id;

            return (
              <div
                key={incident.id}
                className={`glass-card p-5 border rounded-lg transition-all ${
                  incident.status === 'pending'
                    ? 'border-border'
                    : incident.status === 'approved'
                    ? 'border-green-500/30 opacity-80'
                    : 'border-red-500/30 opacity-60'
                }`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${sev.bg} ${sev.text}`}>
                        {incident.severity}
                      </span>
                      <span className="text-xs text-muted-foreground/70 font-mono">{incident.id}</span>
                      <span className="text-xs text-muted-foreground/70">{incident.category}</span>

                      {incident.status === 'approved' && (
                        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-green-500/20 text-green-400">
                          Approved
                        </span>
                      )}
                      {incident.status === 'rejected' && (
                        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-red-500/20 text-red-400">
                          Rejected
                        </span>
                      )}
                    </div>
                    <h3 className="text-foreground font-semibold">{incident.title}</h3>
                  </div>
                  <span className="text-xs text-muted-foreground/70 whitespace-nowrap">{incident.time}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>{incident.location}</span>
                </div>

                {/* Expand / collapse */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : incident.id)}
                  className="mt-3 flex items-center gap-1 text-xs text-primary hover:text-accent font-medium transition"
                >
                  <Eye className="w-3.5 h-3.5" />
                  {isExpanded ? 'Hide Details' : 'Show Details'}
                </button>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-border space-y-2">
                    <p className="text-sm text-muted-foreground">{incident.description}</p>
                    <p className="text-xs text-muted-foreground/70">Reported by: {incident.reportedBy}</p>
                  </div>
                )}

                {/* Action buttons (only for pending) */}
                {incident.status === 'pending' && (
                  <div className="flex gap-3 mt-4 pt-3 border-t border-border">
                    <Button
                      onClick={() => handleAction(incident.id, 'approved')}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </Button>
                    <Button
                      onClick={() => handleAction(incident.id, 'rejected')}
                      className="flex-1 bg-transparent border border-red-500/50 text-red-400 hover:bg-red-500/10 gap-2"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject
                    </Button>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
