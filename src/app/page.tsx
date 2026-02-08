'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Shield, AlertTriangle, Users, MapPin, Upload, Zap, Eye, TrendingUp, CheckCircle, ArrowRight, Activity, Clock, Lock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useMemo } from 'react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
};

// Animated section wrapper
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function LandingPage() {
  // Precompute random positions for animated circles (for CTA section)
  const animatedCircles = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none opacity-30" />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 border-b border-border/50 backdrop-blur-xl bg-background/80 z-50"
      >
        <motion.div 
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Shield className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold text-foreground">
            Threat<span className="text-primary">IQ</span>
          </span>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['How It Works', 'Features', 'Community', 'About'].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href="/login">
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary hover:bg-primary/10"
            >
              Login
            </Button>
          </Link>
          <Link href="/register">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Get Started
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-24 py-15 md:py-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Community-Driven Security Intelligence
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]"
            >
              Community security intelligence in{' '}
              <span className="text-primary">real time</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
            >
              Detect, verify, and respond to security threats before they escalate. 
              Powered by community reports, location intelligence, and AI analysis.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/dashboard">
                <motion.div
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-2xl shadow-primary/30 group">
                    Explore Dashboard
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-border text-foreground hover:bg-card px-8 py-6 text-lg backdrop-blur-xl group"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Problem Statement */}
            <motion.div 
              variants={fadeInUp}
              className="mt-12 p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm"
            >
              <p className="text-sm text-muted-foreground mb-2 font-semibold uppercase tracking-wide">The Problem</p>
              <p className="text-foreground leading-relaxed">
                Security info spreads through <span className="text-primary">unreliable sources</span>—too late, 
                hard to verify, fragmented. ThreatIQ centralizes and validates security data in real time.
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-accent/20 blur-3xl opacity-30" />
              
              {/* Dashboard mockup */}
              <motion.div 
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative rounded-2xl bg-card border border-border/50 p-6 backdrop-blur-xl shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Window controls */}
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-success" />
                </div>

                {/* Dashboard content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">THREAT MAP LIVE VIEW</span>
                    <div className="flex items-center gap-2 text-success">
                      <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                      <span>Active</span>
                    </div>
                  </div>

                  {/* Map placeholder with incident markers */}
                  <div className="h-64 rounded-lg bg-linear-to-br from-primary/5 to-accent/5 border border-border/30 relative overflow-hidden">
                    {/* Animated dots representing threat reports */}
                    {useMemo(() => [
                      { left: '20%', top: '30%', severity: 'low' },
                      { left: '60%', top: '20%', severity: 'high' },
                      { left: '45%', top: '60%', severity: 'medium' },
                      { left: '75%', top: '45%', severity: 'low' },
                      { left: '30%', top: '70%', severity: 'critical' },
                      { left: '85%', top: '35%', severity: 'medium' },
                      { left: '15%', top: '50%', severity: 'low' },
                      { left: '55%', top: '80%', severity: 'high' },
                    ].map((marker, i) => {
                      const colors = {
                        critical: 'bg-red-500',
                        high: 'bg-orange-500',
                        medium: 'bg-yellow-500',
                        low: 'bg-accent'
                      };
                      // Precompute random duration and delay for each marker
                      const duration = 2 + Math.random() * 2;
                      const delay = Math.random() * 2;
                      return (
                        <motion.div
                          key={i}
                          className={`absolute w-3 h-3 rounded-full ${colors[marker.severity as keyof typeof colors]}`}
                          style={{
                            left: marker.left,
                            top: marker.top,
                          }}
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration,
                            repeat: Infinity,
                            delay,
                          }}
                        />
                      );
                    }), [])}
                  </div>

                  {/* Recent reports */}
                  <div className="space-y-2">
                    {[
                      { type: 'Suspicious Activity', location: 'Victoria Island', time: '5 min ago', severity: 'medium' },
                      { type: 'Theft Reported', location: 'Ikeja', time: '12 min ago', severity: 'high' },
                      { type: 'All Clear', location: 'Lekki', time: '18 min ago', severity: 'low' }
                    ].map((report, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/30 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${
                            report.severity === 'high' ? 'bg-orange-500' :
                            report.severity === 'medium' ? 'bg-yellow-500' : 'bg-success'
                          }`} />
                          <div>
                            <div className="text-foreground font-medium">{report.type}</div>
                            <div className="text-muted-foreground">{report.location}</div>
                          </div>
                        </div>
                        <div className="text-muted-foreground">{report.time}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection>
        <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <motion.div variants={staggerContainer} initial="initial" animate="animate">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    label: 'Community Members', 
                    value: '50,000+', 
                    sublabel: 'Active security nodes',
                    icon: Users,
                    color: 'text-primary'
                  },
                  { 
                    label: 'Threats Verified', 
                    value: '1.2M+', 
                    sublabel: 'Community-validated reports',
                    icon: CheckCircle,
                    color: 'text-success'
                  },
                  { 
                    label: 'Accuracy Rate', 
                    value: '99.9%', 
                    sublabel: 'AI + Human verification',
                    icon: Activity,
                    color: 'text-accent'
                  }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="relative p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-xl">
                      <stat.icon className={`w-10 h-10 ${stat.color} mb-4`} />
                      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                        {stat.value}
                      </div>
                      <p className="text-foreground text-sm font-medium mb-1">{stat.label}</p>
                      <div className={`text-xs ${stat.color}`}>
                        {stat.sublabel}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection>
        <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                How ThreatIQ Works
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Four Steps to Safer Communities
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-24 h-1 bg-linear-to-r from-primary to-accent mx-auto" />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
            >
              {/* Connection line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-accent to-primary opacity-20" />

              {[
                {
                  num: '01',
                  title: 'Threat Reporting',
                  desc: 'Community members report incidents (suspicious activity, theft, violence, emergencies) with location, description, severity, and optional evidence.',
                  icon: Upload,
                  examples: ['Suspicious Activity', 'Theft/Robbery', 'Violence', 'Infrastructure Damage']
                },
                {
                  num: '02',
                  title: 'AI-Powered Analysis',
                  desc: 'AI checks for duplicates, assigns risk scores, detects patterns across locations and time, and flags high-risk incidents for review.',
                  icon: Zap,
                  examples: ['Duplicate Check', 'Risk Scoring', 'Pattern Detection', 'Auto-flagging']
                },
                {
                  num: '03',
                  title: 'Human Verification',
                  desc: 'Verified community leaders and admins review alerts. Community confirmations increase credibility and filter out false reports.',
                  icon: Users,
                  examples: ['Leader Review', 'Community Votes', 'Credibility Score', 'False Report Filter']
                },
                {
                  num: '04',
                  title: 'Real-Time Dashboard',
                  desc: 'Access live dashboards with threat timelines, risk heatmaps, severity indicators, and analytics to stay informed and respond faster.',
                  icon: Activity,
                  examples: ['Live Threat Feed', 'Risk Heatmaps', 'Analytics', 'Location Alerts']
                }
              ].map((step, i) => (
                <motion.div
                  key={step.num}
                  variants={scaleIn}
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 w-20 h-20 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20"
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 text-7xl font-bold text-primary/5 -z-10">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-center text-sm">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {step.examples.map((example, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {example}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Key Features Section */}
      <AnimatedSection>
        <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Key Features
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Why ThreatIQ Is Different
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Unlike social media or messaging apps, ThreatIQ provides structured, verified, 
                location-aware intelligence so decisions are based on data, not rumors.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  icon: Activity,
                  title: 'Real-Time Threat Feed',
                  desc: 'Stay updated with live security incidents as they happen in your community and surrounding areas.',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: MapPin,
                  title: 'Interactive Map Intelligence',
                  desc: 'Visualize threats on an interactive map with location-based alerts and risk heatmaps.',
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  icon: Zap,
                  title: 'AI Risk Scoring',
                  desc: 'Automated risk assessment using AI to prioritize threats and detect patterns across time and location.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Users,
                  title: 'Community Verification',
                  desc: 'Hybrid AI + human verification ensures accuracy. Community confirmations build credibility.',
                  color: 'from-orange-500 to-red-500'
                },
                {
                  icon: Lock,
                  title: 'Role-Based Access Control',
                  desc: 'Secure platform with different access levels for residents, community leaders, and administrators.',
                  color: 'from-indigo-500 to-blue-500'
                },
                {
                  icon: TrendingUp,
                  title: 'Analytics & Insights',
                  desc: 'Track security trends, identify high-risk areas, and make data-driven decisions for your community.',
                  color: 'from-cyan-500 to-teal-500'
                }
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  variants={scaleIn}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl blur-xl"
                    style={{ background: `linear-gradient(135deg, ${feature.color.split(' ')[0].replace('from-', '')}, ${feature.color.split(' ')[1].replace('to-', '')})` }}
                  />
                  <div className="relative h-full p-8 rounded-2xl bg-card border border-border/50 backdrop-blur-xl hover:border-primary/50 transition-colors">
                    <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-6`}>
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Who It's For Section */}
      <AnimatedSection>
        <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.p variants={fadeInUp} className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">
                Who ThreatIQ Is For
              </motion.p>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Built for Communities, Leaders & Responders
              </motion.h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            >
              {[
                { icon: Users, label: 'Local Communities' },
                { icon: Shield, label: 'Community Leaders' },
                { icon: Lock, label: 'Security Organizations' },
                { icon: Activity, label: 'NGOs & Humanitarian Groups' },
                { icon: MapPin, label: 'City Planners' },
                { icon: AlertTriangle, label: 'Emergency Teams' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={scaleIn}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-xl bg-card border border-border/50 backdrop-blur-xl text-center hover:border-primary/50 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="relative px-6 md:px-12 lg:px-24 py-20 border-t border-border/50">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div 
              variants={scaleIn}
              className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-accent p-12 md:p-16 text-center"
            >
              {/* Animated background pattern */}
              {/* Precompute random positions for animated circles */}
              {(() => {
                
                return (
                  <div className="absolute inset-0 opacity-10">
                    {animatedCircles.map((circle, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-32 h-32 border border-white rounded-full"
                        style={{
                          left: circle.left,
                          top: circle.top,
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: circle.duration,
                          repeat: Infinity,
                          delay: circle.delay,
                        }}
                      />
                    ))}
                  </div>
                );
              })()}

              <motion.div variants={fadeInUp} className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to make your community safer?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of community members using ThreatIQ to detect, 
                  understand, and respond to security threats in real time.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg shadow-2xl group"
                      >
                        Get Started Free
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </Link>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg backdrop-blur-xl"
                    >
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="relative px-6 md:px-12 lg:px-24 py-12 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold text-foreground">
                  Threat<span className="text-primary">IQ</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A digital safety infrastructure for communities. Turning scattered 
                security information into clear, actionable intelligence.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                {['How It Works', 'Features', 'Dashboard', 'Pricing'].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2 text-sm">
                {['For Residents', 'For Leaders', 'For Organizations', 'Case Studies'].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                {['About Us', 'Blog', 'Careers', 'Contact'].map(item => (
                  <li key={item}>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 ThreatIQ. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}