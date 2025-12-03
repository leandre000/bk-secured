// Authentication Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
}

export interface AuthResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// Transaction Types
export interface Transaction {
  id: string;
  userId: string;
  userName: string;
  amount: string;
  location: string;
  platform: string; // 'mobile' | 'web' | 'atm'
  type: string; // 'transfer' | 'withdrawal' | 'payment'
  status: 'approved' | 'pending' | 'suspicious' | 'blocked' | 'flagged';
  riskScore?: number;
  timestamp: string;
  metadata?: {
    deviceId?: string;
    ipAddress?: string;
    userAgent?: string;
  };
}

// Alert Types
export interface SecurityAlert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'investigating' | 'reviewing' | 'resolved' | 'blocked';
  userId: string;
  accountNumber: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

// Dashboard Stats Types
export interface DashboardStats {
  totalTransactions: number;
  fraudDetected: number;
  preventedLosses: string;
  detectionRate: string;
}

// Location Activity Types
export interface LocationActivity {
  id: string;
  location: string;
  transactionCount: number;
  riskLevel: 'low' | 'medium' | 'high';
  timestamp: string;
}

// Risk Assessment Types
export interface RiskAssessment {
  overallRiskLevel: number;
  riskCategory: 'low' | 'medium' | 'high';
  securityFeatures: {
    authentication: {
      status: 'active' | 'inactive';
      enabled: boolean;
    };
    behaviorAnalysis: {
      status: 'monitoring' | 'disabled';
      enabled: boolean;
    };
    deviceFingerprinting: {
      status: 'enabled' | 'disabled';
      enabled: boolean;
    };
  };
}

// Reports Types
export interface Report {
  id: string;
  name: string;
  type: 'fraud-summary' | 'alert-investigation' | 'risk-analysis';
  format: 'pdf' | 'excel' | 'csv';
  size: string;
  generatedAt: string;
  downloadUrl: string;
}

// Settings Types
export interface SecuritySettings {
  twoFactorAuth: boolean;
  securityAlerts: boolean;
  realTimeMonitoring: boolean;
  autoBlockSuspicious: boolean;
}

// Monitoring Types
export interface SystemMonitoring {
  systemActive: boolean;
  transactionsPerSecond: number;
  totalProcessed: number;
  secureTransactions: number;
  flaggedTransactions: number;
  successRate: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Filter and Query Types
export interface TransactionFilters {
  status?: Transaction['status'];
  dateFrom?: string;
  dateTo?: string;
  minAmount?: number;
  maxAmount?: number;
  location?: string;
  platform?: string;
  riskLevel?: 'low' | 'medium' | 'high';
}

export interface AlertFilters {
  severity?: SecurityAlert['severity'];
  status?: SecurityAlert['status'];
  dateFrom?: string;
  dateTo?: string;
}