'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Activity, ArrowRight, CheckCircle, TrendingUp, Users, Globe, Zap, Database, Cloud, Server, Code, BarChart3, Eye, AlertTriangle, Award, FileCheck, ChevronDown, ChevronUp } from 'lucide-react';

// FAQ Accordion Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-200 hover:border-primary-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-lg font-bold text-slate-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-slate-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-light text-slate-900 selection:bg-primary-500 selection:text-white">
      {/* Professional Banking Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-primary-600 rounded-xl flex items-center justify-center shadow-md">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  BK Secured
                </span>
                <p className="text-sm text-slate-500 -mt-1">Banking Security Platform</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-base lg:text-lg font-semibold text-slate-700 hover:text-primary-600 transition-colors">
                Features
              </Link>
              <Link href="#security" className="text-base lg:text-lg font-semibold text-slate-700 hover:text-primary-600 transition-colors">
                Security
              </Link>
              <Link href="#about" className="text-base lg:text-lg font-semibold text-slate-700 hover:text-primary-600 transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link 
                href="/auth/signin"
                className="text-base lg:text-lg font-semibold text-slate-700 hover:text-primary-600 transition-colors px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-3 text-base lg:text-lg font-semibold bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:shadow-primary-500/40"
              >
                Open Account
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Professional Banking Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #034EA2 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-400/5" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-base lg:text-lg font-semibold mb-6">
                <Shield className="h-5 w-5" />
                <span>Bank-Grade Security & Protection</span>
              </div>
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-6 text-slate-900 leading-[1.1]">
                Your Money, <br />
                <span className="text-primary-600">Secured & Protected</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Experience next-generation banking security with real-time fraud detection, 
                advanced encryption, and 24/7 monitoring. Your financial safety is our priority.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <Link
                  href="/auth/signup"
                  className="w-full sm:w-auto px-10 py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-lg lg:text-xl transition-all shadow-lg hover:shadow-xl hover:shadow-primary-500/30 flex items-center justify-center gap-2"
                >
                  Open Account
                  <ArrowRight className="h-6 w-6" />
                </Link>
                <Link
                  href="/auth/signin"
                  className="w-full sm:w-auto px-10 py-5 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-lg lg:text-xl transition-all border-2 border-slate-200 hover:border-primary-200 shadow-sm"
                >
                  Sign In
                </Link>
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-base lg:text-lg text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="font-semibold">FDIC Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-6 w-6 text-primary-600" />
                  <span className="font-semibold">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary-600" />
                  <span className="font-semibold">SOC 2 Certified</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Banking Dashboard Preview */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-white/30"></div>
                  <div className="h-3 w-3 rounded-full bg-white/30"></div>
                  <div className="h-3 w-3 rounded-full bg-white/30"></div>
                  <div className="flex-1"></div>
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div className="p-8 bg-slate-50">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                      <div className="text-sm text-slate-500 mb-2">Account Balance</div>
                      <div className="text-4xl font-bold text-slate-900">$24,589.32</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                        <div className="text-xs text-slate-500 mb-1">Recent Transactions</div>
                        <div className="text-2xl font-bold text-slate-900">12</div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100">
                        <div className="text-xs text-slate-500 mb-1">Security Score</div>
                        <div className="text-2xl font-bold text-green-600">98%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Statistics Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "2.5M+", label: "Active Customers", color: "text-primary-600" },
              { icon: TrendingUp, value: "$50B+", label: "Assets Protected", color: "text-green-600" },
              { icon: Globe, value: "180+", label: "Countries Served", color: "text-blue-600" },
              { icon: Shield, value: "99.99%", label: "Uptime Guarantee", color: "text-primary-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-xl mb-4 shadow-sm">
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-5xl lg:text-6xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-lg lg:text-xl font-semibold text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Features Grid */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-slate-900">Why Choose BK Secured?</h2>
            <p className="text-2xl lg:text-3xl text-slate-600 max-w-2xl mx-auto">
              Experience banking security that sets the industry standard
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Advanced Encryption",
                description: "Military-grade 256-bit AES encryption protects every transaction and data transmission. Your financial information is secured with bank-level protection."
              },
              {
                icon: Activity,
                title: "Real-Time Fraud Detection",
                description: "AI-powered monitoring detects suspicious activity instantly. Get instant alerts and automatic protection against fraud attempts."
              },
              {
                icon: Shield,
                title: "Multi-Layer Security",
                description: "Biometric authentication, two-factor verification, and behavioral analysis work together to keep your account secure 24/7."
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:border-primary-200 transition-all group">
                <div className="h-18 w-18 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <feature.icon className="h-9 w-9 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg lg:text-xl">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Integrations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Seamless Integration</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Connect with your existing tools and platforms in minutes. No complex setup required.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { icon: Database, name: "PostgreSQL" },
              { icon: Cloud, name: "AWS" },
              { icon: Server, name: "Azure" },
              { icon: Code, name: "REST API" },
              { icon: BarChart3, name: "Analytics" },
              { icon: Globe, name: "Webhooks" }
            ].map((platform, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-6 rounded-xl bg-surface-light border border-slate-200 hover:border-primary-200 hover:shadow-md transition-all group">
                <platform.icon className="text-[#162da4] h-10 w-10 group-hover:text-primary-600 transition-colors mb-3" />
                <span className="text-sm font-medium text-slate-700">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Services */}
      <section id="security" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-slate-900">Complete Banking Solutions</h2>
            <p className="text-2xl lg:text-3xl text-slate-600 max-w-2xl mx-auto">
              Everything you need for secure, modern banking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Lock,
                title: "Secure Transactions",
                description: "Every payment is protected with end-to-end encryption. Real-time fraud detection ensures your money stays safe with instant alerts for suspicious activity.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Activity,
                title: "24/7 Account Monitoring",
                description: "Advanced AI continuously monitors your account for unusual patterns. Get instant notifications and automatic protection against unauthorized access.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Shield,
                title: "Identity Protection",
                description: "Multi-factor authentication and biometric security protect your identity. Bank-level encryption ensures your personal information remains private.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: TrendingUp,
                title: "Smart Financial Tools",
                description: "Track spending, set budgets, and get insights into your financial health. Advanced analytics help you make better financial decisions.",
                color: "from-primary-500 to-primary-600"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all group">
                <div className={`h-18 w-18 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <service.icon className="h-9 w-9 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg lg:text-xl">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-2 text-slate-900">Certified & Compliant</h2>
            <p className="text-slate-600">Meeting the highest industry security standards</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "SOC 2 Type II", icon: Award },
              { name: "ISO 27001", icon: FileCheck },
              { name: "GDPR", icon: Shield },
              { name: "PCI DSS", icon: Lock },
              { name: "HIPAA", icon: Activity }
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface-light border border-slate-200">
                <cert.icon className="h-8 w-8 text-primary-600 mb-2" />
                <span className="text-sm font-semibold text-slate-700 text-center">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-4 text-slate-900">Your Banking Dashboard</h2>
            <p className="text-2xl lg:text-3xl text-slate-600 max-w-2xl mx-auto">
              Monitor your accounts, track transactions, and manage your finances all in one secure place.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-600/10 blur-3xl rounded-3xl"></div>
            <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white rounded px-4 py-1.5 text-xs text-slate-500 mx-4">
                  https://bk-secured.com/dashboard
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                    <div className="text-sm text-slate-500 mb-2">Total Balance</div>
                    <div className="text-3xl font-bold text-slate-900">$24,589.32</div>
                    <div className="text-xs text-green-600 mt-2 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +2.4% this month
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                    <div className="text-sm text-slate-500 mb-2">Transactions</div>
                    <div className="text-3xl font-bold text-slate-900">127</div>
                    <div className="text-xs text-slate-500 mt-2">This month</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                    <div className="text-sm text-slate-500 mb-2">Security Status</div>
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      All systems secure
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-slate-900">Recent Transactions</h3>
                    <button className="text-base lg:text-lg text-primary-600 font-semibold hover:text-primary-700">View All</button>
                  </div>
                  <div className="space-y-3">
                    {['Payment to Amazon', 'Salary Deposit', 'Transfer to Savings'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
                            <Activity className="h-6 w-6 text-primary-600" />
                          </div>
                          <div>
                            <div className="font-semibold text-lg text-slate-900">{item}</div>
                            <div className="text-sm text-slate-500">Today, 2:30 PM</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-lg text-slate-900">${(Math.random() * 500 + 50).toFixed(2)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-primary-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">How SecureGuard Works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our advanced platform integrates seamlessly with your existing infrastructure to provide immediate protection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10" />

            {[
              {
                step: "01",
                title: "Connect Your Data",
                description: "Integrate via our secure API or use our pre-built connectors for major financial platforms."
              },
              {
                step: "02",
                title: "AI Analysis",
                description: "Our models analyze transaction patterns in real-time to identify anomalies and potential threats."
              },
              {
                step: "03",
                title: "Instant Protection",
                description: "Suspicious activities are flagged or blocked instantly, keeping your assets secure."
              }
            ].map((item, index) => (
              <div key={index} className="relative bg-white p-6 rounded-2xl border border-slate-200 hover:border-primary-200 transition-colors shadow-sm">
                <div className="w-12 h-12 bg-surface-light rounded-full border border-slate-200 flex items-center justify-center text-xl font-bold text-primary-600 mb-6 mx-auto md:mx-0 z-10 relative shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-surface-light border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900">
                Trusted by industry leaders worldwide
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Join thousands of companies that rely on SecureGuard to protect their financial data and customer trust.
              </p>
              <div className="space-y-4">
                {[
                  "99.99% Uptime Guarantee",
                  "24/7 Dedicated Support",
                  "GDPR & SOC2 Compliant"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary-100/50 blur-3xl rounded-full" />
              <div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
                <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary-50 flex items-center justify-center">
                       <Shield className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">GlobalFin Corp</div>
                      <div className="text-sm text-slate-500">Enterprise Customer</div>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide">
                    Verified
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-slate-500 mb-1">Fraud Prevention</div>
                    <div className="text-2xl font-bold text-slate-900">99.9% Block Rate</div>
                    <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                      <div className="bg-primary-600 h-full rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-surface-light rounded-xl">
                        <div className="text-sm text-slate-500 mb-1">False Positives</div>
                        <div className="text-lg font-bold text-slate-900">&lt; 0.01%</div>
                     </div>
                     <div className="p-4 bg-surface-light rounded-xl">
                        <div className="text-sm text-slate-500 mb-1">ROI</div>
                        <div className="text-lg font-bold text-slate-900">12x</div>
                     </div>
                  </div>
                  <p className="text-slate-600 italic border-l-4 border-primary-200 pl-4 py-1">
                    "SecureGuard transformed our security infrastructure overnight. The ROI was immediate."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Trusted by Security Experts</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              See what industry leaders are saying about SecureGuard's fraud detection capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "SecureGuard reduced our fraud incidents by 94% in the first month. The ROI was immediate.",
                author: "Sarah Chen",
                role: "CTO, FinTech Global",
                image: "SC"
              },
              {
                quote: "The real-time monitoring capabilities are unmatched. It's like having a dedicated security team 24/7.",
                author: "Marcus Rodriguez",
                role: "Head of Security, BankCorp",
                image: "MR"
              },
              {
                quote: "Implementation was smooth and the support team is incredible. Highly recommended for any financial institution.",
                author: "David Kim",
                role: "VP of Engineering, PayFlow",
                image: "DK"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center font-bold text-white">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-slate-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-surface-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "How long does integration take?",
                a: "Most clients are up and running within 24-48 hours. Our API is designed for developer ease with comprehensive documentation and SDKs for major languages."
              },
              {
                q: "Is my data secure?",
                a: "Absolutely. We use military-grade encryption (AES-256) for data at rest and in transit. We are also SOC2 Type II and GDPR compliant, ensuring your data is handled with the highest standards of security."
              },
              {
                q: "Can I try it before buying?",
                a: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start, and you can cancel at any time."
              },
              {
                q: "What support options are available?",
                a: "We offer 24/7 email support for all plans. Enterprise customers also get access to a dedicated account manager and priority phone support."
              }
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-primary-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-slate-900 to-slate-900" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">Ready to secure your business?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Join the network of protected businesses today. No credit card required for trial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/auth/signup"
              className="w-full sm:w-auto px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all hover:shadow-[0_0_30px_-5px_rgba(27,53,188,0.4)]"
            >
              Get Started Now
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">BK Secured</span>
            </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Next-generation banking security platform. Protecting your financial future with advanced technology and bank-grade encryption.
              </p>
              <div className="flex items-center gap-4 pt-2">
                {/* Social Icons Placeholder */}
                {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                  <a key={social} href="#" className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all">
                    <span className="sr-only">{social}</span>
                    <Globe className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                {['Features', 'Solutions', 'Pricing', 'Enterprise', 'Security', 'API Documentation'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Blog', 'Press', 'Contact', 'Partners'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-400 hover:text-primary-400 text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div>
              <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
              <p className="text-slate-400 text-sm mb-4">
                Subscribe to our newsletter for the latest security insights and product updates.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 SecureGuard Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link key={item} href="#" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
