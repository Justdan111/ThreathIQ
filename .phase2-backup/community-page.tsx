'use client';

import { Users, Trophy, MessageSquare, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TOP_CONTRIBUTORS = [
  {
    rank: 1,
    name: 'CyberGuard_88',
    reports: 342,
    verified: 320,
    badge: 'Elite Analyst',
    avatar: 'CG'
  },
  {
    rank: 2,
    name: 'NetAdmin_Mike',
    reports: 287,
    verified: 268,
    badge: 'Senior Analyst',
    avatar: 'NM'
  },
  {
    rank: 3,
    name: 'SecureOps_Sarah',
    reports: 245,
    verified: 228,
    badge: 'Senior Analyst',
    avatar: 'SO'
  },
  {
    rank: 4,
    name: 'DefenseTeam_Kim',
    reports: 198,
    verified: 185,
    badge: 'Analyst',
    avatar: 'DT'
  },
  {
    rank: 5,
    name: 'ThreatWatch_Alex',
    reports: 156,
    verified: 142,
    badge: 'Analyst',
    avatar: 'TW'
  },
];

const COMMUNITY_LEADERS = [
  {
    name: 'SafariBank Security Team',
    members: 1240,
    verified: '98.5%',
    icon: '🏦'
  },
  {
    name: 'Tech-Hub Community',
    members: 892,
    verified: '96.2%',
    icon: '💻'
  },
  {
    name: 'Connect-Africa Alliance',
    members: 645,
    verified: '95.8%',
    icon: '🌍'
  },
  {
    name: 'SecureOps Collective',
    members: 523,
    verified: '97.3%',
    icon: '🔒'
  },
];

const RECENT_DISCUSSIONS = [
  {
    title: 'New APT Group Detected in Financial Sector',
    author: 'CyberGuard_88',
    replies: 45,
    likes: 128,
    category: 'APT Analysis'
  },
  {
    title: 'Best Practices for Regional Infrastructure Hardening',
    author: 'NetAdmin_Mike',
    replies: 32,
    likes: 89,
    category: 'Security Tips'
  },
  {
    title: 'Phishing Campaign Alert - Banking Sector',
    author: 'SecureOps_Sarah',
    replies: 28,
    likes: 76,
    category: 'Threat Alert'
  },
  {
    title: 'DDoS Mitigation Strategies for Small Enterprises',
    author: 'DefenseTeam_Kim',
    replies: 19,
    likes: 54,
    category: 'Defense'
  },
];

export default function CommunityPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[#F9FAFB]">Community</h1>
        <p className="text-[#9CA3AF] mt-2">Connect with security professionals and share threat intelligence</p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Active Members', value: '2,847', icon: Users },
          { label: 'Verified Reports', value: '8,920', icon: Trophy },
          { label: 'Discussions', value: '1,245', icon: MessageSquare },
          { label: 'Community Score', value: '98.2%', icon: Heart },
        ].map((stat, idx) => (
          <div key={idx} className="kpi-card">
            <div className="p-3 rounded-lg bg-[#1A2332] w-fit mb-4">
              <stat.icon className="w-6 h-6 text-[#2563EB]" />
            </div>
            <p className="text-[#9CA3AF] text-sm mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-[#F9FAFB]">{stat.value}</h3>
          </div>
        ))}
      </div>

      {/* Top Contributors */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB]">Top Contributors</h2>
          <Button variant="outline" className="border-[#2D3A4F] text-[#2563EB] hover:bg-[#2563EB]/10 bg-transparent">
            View All
          </Button>
        </div>

        <div className="space-y-3">
          {TOP_CONTRIBUTORS.map(contributor => (
            <div key={contributor.rank} className="flex items-center gap-4 p-4 rounded-lg bg-[#1A2332]/50 hover:bg-[#1A2332] transition">
              {/* Rank */}
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                contributor.rank === 1 ? 'bg-yellow-500/20 text-yellow-400' :
                contributor.rank === 2 ? 'bg-gray-400/20 text-gray-400' :
                contributor.rank === 3 ? 'bg-orange-500/20 text-orange-400' :
                'bg-[#2D3A4F] text-[#9CA3AF]'
              }`}>
                {contributor.rank}
              </div>

              {/* Avatar */}
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#2563EB] to-[#22D3EE] flex items-center justify-center font-semibold text-sm">
                {contributor.avatar}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="font-semibold text-[#F9FAFB]">{contributor.name}</div>
                <div className="text-xs text-[#9CA3AF]">{contributor.badge}</div>
              </div>

              {/* Stats */}
              <div className="flex gap-6">
                <div className="text-center">
                  <div className="text-sm font-semibold text-[#F9FAFB]">{contributor.reports}</div>
                  <div className="text-xs text-[#4B5563]">Reports</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-green-400">{contributor.verified}</div>
                  <div className="text-xs text-[#4B5563]">Verified</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Leaders */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-semibold text-[#F9FAFB] mb-6">Community Leader Organizations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {COMMUNITY_LEADERS.map((leader, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#1A2332]/50 hover:bg-[#1A2332] transition border border-[#2D3A4F] hover:border-[#2563EB]">
              <div className="flex items-start justify-between mb-3">
                <div className="text-2xl">{leader.icon}</div>
                <span className="px-2 py-1 rounded text-xs font-semibold bg-[#2563EB]/20 text-[#2563EB]">
                  Leader
                </span>
              </div>
              <h3 className="font-semibold text-[#F9FAFB] mb-2">{leader.name}</h3>
              <div className="flex justify-between text-sm">
                <div>
                  <div className="text-[#9CA3AF] text-xs">Members</div>
                  <div className="text-[#F9FAFB] font-semibold">{leader.members}</div>
                </div>
                <div>
                  <div className="text-[#9CA3AF] text-xs">Verified Rate</div>
                  <div className="text-green-400 font-semibold">{leader.verified}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Discussions */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-[#F9FAFB]">Recent Discussions</h2>
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
            Start Discussion
          </Button>
        </div>

        <div className="space-y-3">
          {RECENT_DISCUSSIONS.map((discussion, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-[#1A2332]/50 hover:bg-[#1A2332] transition cursor-pointer border border-[#2D3A4F] hover:border-[#2563EB]">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h3 className="font-semibold text-[#F9FAFB] mb-1">{discussion.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
                    <span>By {discussion.author}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#2563EB]">
                      {discussion.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-1 text-[#9CA3AF] hover:text-[#F9FAFB] transition">
                  <MessageSquare className="w-4 h-4" />
                  <span>{discussion.replies}</span>
                </div>
                <div className="flex items-center gap-1 text-[#9CA3AF] hover:text-[#F9FAFB] transition">
                  <Heart className="w-4 h-4" />
                  <span>{discussion.likes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safety Tips */}
      <div className="glass-card p-6 border-l-4 border-green-500">
        <h2 className="text-xl font-semibold text-[#F9FAFB] mb-4">Community Safety Tips</h2>
        <ul className="space-y-3 text-[#9CA3AF]">
          <li className="flex gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>Always verify threats through multiple sources before reporting</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>Include specific technical indicators and timestamps in your reports</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>Respect community guidelines and maintain professional conduct</span>
          </li>
          <li className="flex gap-3">
            <span className="text-green-400 font-bold">•</span>
            <span>Share learnings openly to help strengthen the entire ecosystem</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
