'use client';

import React from "react"

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
import { MapPin, Upload, Shield, CheckCircle } from 'lucide-react';

export default function ReportIncidentPage() {
  const [formData, setFormData] = useState({
    category: '',
    location: '',
    description: '',
    severity: 'medium',
  });
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileNames = Array.from(files).map(f => f.name);
      setUploadedFiles(prev => [...prev, ...fileNames]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Incident report submitted:', formData);
  };

  const getSeverityColor = (severity: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      low: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/30' },
      medium: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/30' },
      high: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
      critical: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/30' },
    };
    return colors[severity] || colors.low;
  };

  return (
    <div className="max-w-4xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Report an Incident</h1>
        <p className="text-muted-foreground mt-2">Share what you observed. Your report helps protect your community and is verified by other members.</p>
      </div>

      {/* AI Validation Indicator */}
      <div className="glass-card p-6 border-l-4 border-blue-500">
        <div className="flex items-start gap-4">
          <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">AI VALIDATION CONFIDENCE</h3>
            <div className="w-full bg-card rounded-full h-2 mb-2">
              <div className="bg-linear-to-r from-blue-500 to-cyan-400 h-2 rounded-full" style={{ width: '72%' }}></div>
            </div>
            <p className="text-sm text-muted-foreground">72% VALID - High semantic detail helps accelerate verification.</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Threat Category */}
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Threat Information</h2>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Incident Type
            </label>
            <Select value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
              <SelectTrigger className="bg-card border-border text-foreground">
                <SelectValue placeholder="Select incident type" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="accident">Traffic Accident</SelectItem>
                <SelectItem value="suspicious">Suspicious Activity</SelectItem>
                <SelectItem value="assault">Assault/Violence</SelectItem>
                <SelectItem value="theft">Theft/Crime</SelectItem>
                <SelectItem value="hazard">Environmental Hazard</SelectItem>
                <SelectItem value="closure">Road/Area Closure</SelectItem>
                <SelectItem value="natural">Natural Disaster</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Severity Slider */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-4">
              Severity Level
            </label>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="4"
                  value={['low', 'medium', 'high', 'critical'].indexOf(formData.severity) + 1}
                  onChange={(e) => {
                    const levels = ['low', 'medium', 'high', 'critical'];
                    handleSelectChange('severity', levels[parseInt(e.target.value) - 1]);
                  }}
                  className="flex-1 h-2 bg-card rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className={`px-4 py-2 rounded-lg font-semibold ${getSeverityColor(formData.severity).bg} ${getSeverityColor(formData.severity).text}`}>
                  {formData.severity.toUpperCase()}
                </div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground/70">
                <span>Low</span>
                <span>Moderate</span>
                <span>High</span>
                <span>Critical</span>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Incident Location
          </h2>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Location or Affected Region
            </label>
            <Input
              type="text"
              name="location"
              placeholder="e.g. Wuse Market, Abuja or Lekki Phase 1, Lagos"
              value={formData.location}
              onChange={handleInputChange}
              className="bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>

          <div className="h-48 bg-linear-to-br from-card to-background rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">Interactive map will load here</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Description of Incident</h2>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Detailed Description
            </label>
            <textarea
              name="description"
              placeholder="Describe the threat in detail. Mention specific targets, timestamps, and observed behaviors..."
              value={formData.description}
              onChange={handleInputChange}
              rows={6}
              className="w-full bg-card border border-border text-foreground placeholder:text-muted-foreground rounded-lg p-4 focus:outline-none focus:border-primary"
            />
            <p className="text-xs text-muted-foreground/70 mt-2">
              AI Analysis: High semantic detail helps accelerate verification.
            </p>
          </div>
        </div>

        {/* Evidence Upload Section */}
        <div className="glass-card p-6 space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Upload className="w-5 h-5" />
            Evidence Upload
          </h2>

          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition">
            <div className="flex flex-col items-center">
              <Upload className="w-12 h-12 text-muted-foreground/70 mb-4" />
              <p className="text-foreground font-medium mb-2">Drag & drop evidence files</p>
              <p className="text-muted-foreground text-sm mb-4">Supports logs, images, and telemetry data (max 50MB)</p>
              <label>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".log,.txt,.jpg,.png,.pcap,.json"
                />
                <span className="px-4 py-2 rounded-lg bg-primary text-primary-foreground cursor-pointer hover:bg-primary/90 transition inline-block">
                  Browse Files
                </span>
              </label>
            </div>
          </div>

          {/* Uploaded Files */}
          {uploadedFiles.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-foreground">Uploaded Files</p>
              {uploadedFiles.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-lg bg-card border border-border"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm text-foreground">{file}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== idx))}
                    className="text-destructive hover:text-red-400 text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Security Notice */}
        <div className="glass-card p-6 border-l-4 border-green-500 flex gap-4">
          <Shield className="w-6 h-6 text-green-400 shrink-0 mt-1" />
          <div>
            <p className="font-semibold text-foreground mb-1">End-to-end encrypted</p>
            <p className="text-sm text-muted-foreground">
              Your report is encrypted and verified by AI. Verification node 0x7F2... verified.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
          >
            Save as Draft
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
            Submit Verified Report
          </Button>
        </div>
      </form>
    </div>
  );
}
