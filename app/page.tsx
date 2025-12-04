'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Shield, Lock, Activity, ArrowRight, CheckCircle, TrendingUp, Users, Globe, Zap, Database, Cloud, Server, Code, BarChart3, Eye, AlertTriangle, Award, FileCheck, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-light text-slate-900 selection:bg-primary-500 selection:text-white">
      {/* Professional Banking Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="h-10 w-10 sm:h-12 sm:w-12 bg-primary-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
                <Shield className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
              </div>
              <div className="hidden xs:block">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight block leading-tight">
                  BK Secured
              </span>
                <p className="text-[10px] sm:text-xs text-slate-500 -mt-0.5 sm:-mt-1 leading-tight">Banking Security Platform</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <Link href="#features" className="text-base xl:text-lg font-semibold text-slate-700 hover:text-primary-600 transition-colors">
                Features
              </Link>
              <Link href="#security" className="text-base xl:text-lg font-semibold text-slate-700 hover:text-primary-600 transition-colors">
                Security
              </Link>
              <Link href="#about" className="text-base xl:text-lg font-semibold text-slate-700 hover:text-primary-600 transition-colors">
                About
              </Link>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <Link 
                href="/auth/signin"
                className="text-sm lg:text-base xl:text-lg font-semibold text-slate-700 hover:text-primary-600 transition-colors px-3 lg:px-4 py-2"
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base xl:text-lg font-semibold bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg hover:shadow-primary-500/40"
              >
                Open Account
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-200 bg-white">
              <div className="px-4 py-4 space-y-3">
                <Link 
                  href="#features" 
                  className="block text-base font-semibold text-slate-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </Link>
                <Link 
                  href="#security" 
                  className="block text-base font-semibold text-slate-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Security
                </Link>
                <Link 
                  href="#about" 
                  className="block text-base font-semibold text-slate-700 hover:text-primary-600 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <div className="pt-2 border-t border-slate-200 space-y-2">
                  <Link
                    href="/auth/signin"
                    className="block text-center text-base font-semibold text-slate-700 hover:text-primary-600 transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/signup"
                    className="block text-center px-4 py-3 text-base font-semibold bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all shadow-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Open Account
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Premium Banking Hero Section */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 xl:pt-32 xl:pb-28 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in-up">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight mb-3 sm:mb-4 md:mb-6 text-gray-900 leading-[1.1]">
                Easy Way to Manage <br className="hidden xs:block" />
                <span className="text-primary-600">Your Banking</span>
            </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-5 sm:mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0 animate-fade-in-up animate-delay-100">
                Experience modern banking with real-time balance tracking, instant transfers, and advanced security. Your money, your control.
            </p>
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10 animate-fade-in-up animate-delay-200 px-4 sm:px-0">
              <Link
                href="/auth/signup"
                  className="w-full sm:w-auto min-w-[160px] px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group touch-manipulation"
              >
                  Open Account
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                  href="/auth/signin"
                  className="w-full sm:w-auto min-w-[160px] px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-900 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 shadow-sm hover:scale-105 active:scale-95 touch-manipulation"
              >
                  How It Works
              </Link>
              </div>
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base text-gray-700 animate-fade-in-up animate-delay-300 px-4 sm:px-0">
                <div className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-300">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">FDIC Insured</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-300">
                  <Lock className="h-4 w-4 sm:h-5 sm:w-5 text-gray-800 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform duration-300">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-gray-800 flex-shrink-0" />
                  <span className="font-medium whitespace-nowrap">SOC 2 Certified</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual - Enhanced Banking App Mockup */}
            <div className="relative order-1 lg:order-2 animate-slide-in-right animate-delay-200">
              <div className="relative flex justify-center lg:justify-end">
                {/* Phone Frame - Responsive Sizing */}
                <div className="relative mx-auto lg:mx-0 w-[280px] h-[500px] xs:w-[300px] xs:h-[540px] sm:w-72 sm:h-[580px] md:w-80 md:h-[640px] lg:w-[340px] lg:h-[660px] xl:w-80 xl:h-[680px] 2xl:w-96 2xl:h-[720px] animate-float">
                  {/* Phone Outline */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl">
                    <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
                      {/* Status Bar */}
                      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white text-[10px] sm:text-xs px-4 sm:px-6 py-1.5 sm:py-2 flex justify-between items-center">
                        <span className="font-medium">9:41</span>
                        <div className="flex gap-0.5 sm:gap-1 items-center">
                          <div className="w-1 h-1 rounded-full bg-white"></div>
                          <div className="w-1 h-1 rounded-full bg-white"></div>
                          <div className="w-1.5 h-1 rounded-full bg-white"></div>
                        </div>
                      </div>
                      
                      {/* App Content - Scrollable */}
                      <div className="p-3 sm:p-4 md:p-6 bg-gradient-to-br from-gray-50 via-white to-gray-50 h-full overflow-y-auto">
                        {/* Header with Balance */}
                        <div className="mb-4 sm:mb-6">
                          <div className="text-xs sm:text-sm text-gray-500 mb-1">Total Balance</div>
                          <div className="text-3xl sm:text-4xl font-bold text-gray-900">$24,589.32</div>
                          <div className="flex items-center gap-1 mt-1">
                            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                            <span className="text-xs sm:text-sm text-green-600 font-medium">+2.4% this month</span>
                          </div>
                        </div>
                        
                        {/* Quick Actions with Icons */}
                        <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
                          {[
                            { name: 'Transfer', icon: ArrowRight, color: 'bg-blue-100 text-blue-600' },
                            { name: 'Pay', icon: Activity, color: 'bg-green-100 text-green-600' },
                            { name: 'Top Up', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' },
                            { name: 'More', icon: Shield, color: 'bg-gray-100 text-gray-600' }
                          ].map((action, i) => {
                            const Icon = action.icon;
                            return (
                              <div key={i} className="text-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${action.color} rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 shadow-sm hover:shadow-md transition-shadow duration-300`}>
                                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                                </div>
                                <span className="text-[10px] sm:text-xs text-gray-600 font-medium">{action.name}</span>
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* Savings Goal Card */}
                        <div className="mb-4 sm:mb-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-3 sm:p-4 border border-primary-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs sm:text-sm font-semibold text-gray-900">Savings Goal</span>
                            <span className="text-xs sm:text-sm font-bold text-primary-600">98%</span>
                          </div>
                          <div className="w-full bg-white rounded-full h-2 mb-1">
                            <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                          </div>
                          <div className="text-xs text-gray-600">$9,800 of $10,000</div>
                        </div>
                        
                        {/* Recent Transactions */}
                        <div className="mb-3 sm:mb-4">
                          <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <h3 className="text-xs sm:text-sm font-semibold text-gray-900">Recent Transactions</h3>
                            <span className="text-[10px] sm:text-xs text-primary-600 font-medium">View All</span>
                          </div>
                          <div className="space-y-2 sm:space-y-3">
                            {[
                              { name: 'Amazon Purchase', amount: '-$89.50', time: '2h ago', icon: '🛒', type: 'expense' },
                              { name: 'Salary Deposit', amount: '+$3,500.00', time: '1d ago', icon: '💰', type: 'income' },
                              { name: 'Coffee Shop', amount: '-$4.75', time: '2d ago', icon: '☕', type: 'expense' }
                            ].map((tx, i) => (
                              <div key={i} className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm sm:text-lg flex-shrink-0 hover:scale-110 transition-transform duration-300">
                                    {tx.icon}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="text-xs sm:text-sm font-semibold text-gray-900 truncate">{tx.name}</div>
                                    <div className="text-[10px] sm:text-xs text-gray-500">{tx.time}</div>
                                  </div>
                                </div>
                                <div className={`text-xs sm:text-sm font-bold ${tx.type === 'income' ? 'text-green-600' : 'text-gray-900'} flex-shrink-0 ml-2`}>
                                  {tx.amount}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Spending Insights */}
                        <div className="mb-3 sm:mb-4 bg-white rounded-xl p-3 sm:p-4 border border-gray-200">
                          <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Spending This Month</div>
                          <div className="flex items-end gap-1 h-12 mb-2">
                            {[65, 80, 45, 90, 70, 85, 95].map((height, i) => (
                              <div key={i} className="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t" style={{ height: `${height}%` }}></div>
                            ))}
                          </div>
                          <div className="text-xs text-gray-500">$2,847 spent of $5,000 budget</div>
                        </div>
                        
                        {/* Card Preview */}
                        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-xl p-3 sm:p-4 text-white shadow-lg relative overflow-hidden">
                          {/* Card Pattern */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 rounded-full -ml-12 -mb-12"></div>
                          
                          <div className="relative">
                            <div className="flex justify-between items-start mb-3 sm:mb-4">
                              <div>
                                <div className="text-[10px] sm:text-xs opacity-80 mb-1">Card Number</div>
                                <div className="text-base sm:text-lg font-mono tracking-wider">**** **** **** 4567</div>
                              </div>
                              <Shield className="h-5 w-5 sm:h-6 sm:w-6 opacity-80" />
                            </div>
                            <div className="flex justify-between items-end">
                              <div>
                                <div className="text-[10px] sm:text-xs opacity-80 mb-1">Card Holder</div>
                                <div className="text-xs sm:text-sm font-semibold">JOHN DOE</div>
                              </div>
                              <div className="text-[10px] sm:text-xs opacity-80">12/25</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements - Responsive */}
                  <div className="absolute -top-6 -right-6 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary-100 rounded-full blur-3xl opacity-50"></div>
                  <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 w-32 h-32 sm:w-40 sm:h-40 bg-green-100 rounded-full blur-3xl opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Statistics Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { icon: Users, value: "2.5M+", label: "Active Customers", color: "text-primary-600" },
              { icon: TrendingUp, value: "$50B+", label: "Assets Protected", color: "text-green-600" },
              { icon: Globe, value: "180+", label: "Countries Served", color: "text-blue-600" },
              { icon: Shield, value: "99.99%", label: "Uptime Guarantee", color: "text-primary-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-primary-50 rounded-lg sm:rounded-xl mb-3 sm:mb-4 shadow-sm hover:scale-110 hover:shadow-md transition-all duration-300">
                  <stat.icon className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-1 sm:mb-2 leading-tight">{stat.value}</div>
                <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-slate-600 px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Features Grid */}
      <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-slate-900 px-2">Why Choose BK Secured?</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              Experience banking security that sets the industry standard
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
              <div key={index} className="p-4 sm:p-6 md:p-8 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6 hover:scale-110 hover:bg-primary-50 transition-all duration-300">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gray-800" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banking Services */}
      <section id="security" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-slate-900 px-2">Complete Banking Solutions</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              Everything you need for secure, modern banking
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
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
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 sm:mb-5 md:mb-6">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gray-800" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Certifications */}
      <section className="py-10 sm:py-12 md:py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-slate-900">Certified & Compliant</h2>
            <p className="text-sm sm:text-base text-slate-600">Meeting the highest industry security standards</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {[
              { name: "SOC 2 Type II", icon: Award },
              { name: "ISO 27001", icon: FileCheck },
              { name: "GDPR", icon: Shield },
              { name: "PCI DSS", icon: Lock },
              { name: "HIPAA", icon: Activity }
            ].map((cert, index) => (
              <div key={index} className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-lg bg-surface-light border border-slate-200">
                <cert.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary-600 mb-2" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700 text-center leading-tight">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-slate-900 px-2">Your Banking Dashboard</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
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
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-5 md:mb-6">
                  <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-slate-100">
                    <div className="text-xs sm:text-sm text-slate-500 mb-1 sm:mb-2">Total Balance</div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900">$24,589.32</div>
                    <div className="text-xs text-green-600 mt-1 sm:mt-2 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      +2.4% this month
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-slate-100">
                    <div className="text-xs sm:text-sm text-slate-500 mb-1 sm:mb-2">Transactions</div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-900">127</div>
                    <div className="text-xs text-slate-500 mt-1 sm:mt-2">This month</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-slate-100 sm:col-span-2 md:col-span-1">
                    <div className="text-xs sm:text-sm text-slate-500 mb-1 sm:mb-2">Security Status</div>
                    <div className="text-2xl sm:text-3xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-slate-500 mt-1 sm:mt-2 flex items-center gap-1">
                      <Shield className="h-3 w-3" />
                      All systems secure
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-md border border-slate-100">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Recent Transactions</h3>
                    <button className="text-sm sm:text-base md:text-lg text-primary-600 font-semibold hover:text-primary-700">View All</button>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {['Payment to Amazon', 'Salary Deposit', 'Transfer to Savings'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 sm:py-3 border-b border-slate-100 last:border-0">
                        <div className="flex items-center gap-2 sm:gap-3">
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 px-2">How BK Secured Works</h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              Our advanced platform integrates seamlessly with your existing infrastructure to provide immediate protection.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative">
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
              <div key={index} className="relative bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-slate-200 hover:border-primary-200 transition-colors shadow-sm">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-surface-light rounded-full border border-slate-200 flex items-center justify-center text-lg sm:text-xl font-bold text-primary-600 mb-4 sm:mb-5 md:mb-6 mx-auto md:mx-0 z-10 relative shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-slate-900 text-center md:text-left">{item.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 text-center md:text-left">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-light border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 md:mb-6 text-slate-900">
                Trusted by industry leaders worldwide
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8">
                Join thousands of companies that rely on BK Secured to protect their financial data and customer trust.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  "99.99% Uptime Guarantee",
                  "24/7 Dedicated Support",
                  "GDPR & SOC2 Compliant"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 sm:gap-3">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-primary-100/50 blur-3xl rounded-full" />
              <div className="relative bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 border-b border-slate-100 pb-4 sm:pb-5 md:pb-6 gap-3 sm:gap-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                       <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-base sm:text-lg">GlobalFin Corp</div>
                      <div className="text-xs sm:text-sm text-slate-500">Enterprise Customer</div>
                    </div>
                  </div>
                  <div className="px-2 sm:px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                    Verified
                  </div>
                </div>
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div>
                    <div className="text-xs sm:text-sm text-slate-500 mb-1">Fraud Prevention</div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900">99.9% Block Rate</div>
                    <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
                      <div className="bg-primary-600 h-full rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                     <div className="p-3 sm:p-4 bg-surface-light rounded-lg sm:rounded-xl">
                        <div className="text-xs sm:text-sm text-slate-500 mb-1">False Positives</div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">&lt; 0.01%</div>
                     </div>
                     <div className="p-3 sm:p-4 bg-surface-light rounded-lg sm:rounded-xl">
                        <div className="text-xs sm:text-sm text-slate-500 mb-1">ROI</div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">12x</div>
                     </div>
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 italic border-l-4 border-primary-200 pl-3 sm:pl-4 py-1">
                    "BK Secured transformed our security infrastructure overnight. The ROI was immediate."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 px-2">Trusted by Security Experts</h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
              See what industry leaders are saying about BK Secured's fraud detection capabilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
              <div key={index} className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 md:mb-6">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary-600 flex items-center justify-center font-bold text-white text-sm sm:text-base flex-shrink-0">
                    {testimonial.image}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-slate-900 text-sm sm:text-base">{testimonial.author}</div>
                    <div className="text-xs sm:text-sm text-slate-500 truncate">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 italic leading-relaxed">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-surface-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-slate-900 px-2">Frequently Asked Questions</h2>
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
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-primary-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-slate-900 to-slate-900" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-white px-2">Ready to secure your business?</h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 md:mb-10 px-4 sm:px-0">
            Join the network of protected businesses today. No credit card required for trial.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
            <Link
              href="/auth/signup"
              className="w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold text-base sm:text-lg transition-all hover:shadow-[0_0_30px_-5px_rgba(27,53,188,0.4)] active:scale-95 touch-manipulation"
            >
              Get Started Now
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto min-w-[200px] px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-base sm:text-lg transition-all border border-slate-700 active:scale-95 touch-manipulation"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
            {/* Brand Column */}
            <div className="space-y-3 sm:space-y-4 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary-400" />
              <span className="text-lg sm:text-xl font-bold text-white">BK Secured</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Next-generation banking security platform. Protecting your financial future with advanced technology and bank-grade encryption.
              </p>
              <div className="flex items-center gap-3 sm:gap-4 pt-2">
                {/* Social Icons Placeholder */}
                {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((social) => (
                  <a key={social} href="#" className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all touch-manipulation">
                    <span className="sr-only">{social}</span>
                    <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Column */}
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {['Features', 'Solutions', 'Pricing', 'Enterprise', 'Security', 'API Documentation'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs sm:text-sm text-slate-400 hover:text-primary-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {['About Us', 'Careers', 'Blog', 'Press', 'Contact', 'Partners'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-xs sm:text-sm text-slate-400 hover:text-primary-400 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 lg:col-span-1">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Stay Updated</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-3 sm:mb-4">
                Subscribe to our newsletter for the latest security insights and product updates.
              </p>
              <form className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-900 border border-slate-800 rounded-lg px-3 sm:px-4 py-2.5 sm:py-2 text-white text-xs sm:text-sm focus:outline-none focus:border-primary-500 transition-colors min-h-[44px]"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-500 text-white px-3 sm:px-4 py-2.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors min-h-[44px] touch-manipulation"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
              © 2025 BK Secured. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link key={item} href="#" className="text-xs sm:text-sm text-slate-500 hover:text-slate-300 transition-colors whitespace-nowrap">
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
