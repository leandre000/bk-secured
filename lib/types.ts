/**
 * TypeScript Type Definitions
 * 
 * BACKEND INTEGRATION GUIDE:
 * ==========================
 * 
 * This file contains all TypeScript interfaces/types used throughout the application.
 * 
 * IMPORTANT FOR BACKEND DEVELOPERS:
 * - These types define the exact structure of data your API should return
 * - All API responses should match these interfaces
 * - Use these types as a reference when building your API endpoints
 * 
 * TYPE SAFETY:
 * - Frontend uses these types for type checking
 * - Backend should return data matching these structures
 * - Any changes to these types require coordination between frontend and backend
 */

// ============================================================================
// AUTHENTICATION TYPES
// ============================================================================

/**
 * User object structure
 * Returned by: /auth/login, /auth/register, /auth/profile
 */
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string; // 'admin' | 'user' | 'analyst'
  createdAt: string; // ISO 8601 date string
}

/**
 * Authentication response structure
 * Returned by: /auth/login, /auth/register
 */
export interface AuthResponse {
  user: User;
  token: string; // JWT access token
  refreshToken: string; // JWT refresh token
}

/**
 * Login request payload
 * Sent to: POST /auth/login
 */
export interface LoginRequest {
  email: string;
  password: string;
}

/**
 * Registration request payload
 * Sent to: POST /auth/register
 */
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

// ============================================================================
// TRANSACTION TYPES
// ============================================================================

/**
 * Transaction object structure
 * Returned by: /transactions, /transactions/:id
 * 
 * BACKEND REQUIREMENTS:
 * - All monetary amounts should be strings (e.g., "$1,234.56")
 * - Timestamps should be ISO 8601 format
 * - Status must be one of the defined values
 */
export interface Transaction {
  id: string;
  userId: string;
  userName: string;
  amount: string; // Format: "$XX,XXX.XX"
  location: string; // Format: "City, Country"
  platform: 'mobile' | 'web' | 'atm';
  type: 'transfer' | 'withdrawal' | 'payment' | 'deposit';
  status: 'approved' | 'pending' | 'suspicious' | 'blocked' | 'flagged';
  riskScore?: number; // 0-100, optional
  timestamp: string; // ISO 8601 date string
  metadata?: {
    deviceId?: string;
    ipAddress?: string;
    userAgent?: string;
    [key: string]: any; // Additional metadata
  };
}

// ============================================================================
// ALERT TYPES
// ============================================================================

/**
 * Security alert structure
 * Returned by: /alerts, /alerts/:id
 * 
 * BACKEND REQUIREMENTS:
 * - Severity levels: low, medium, high, critical
 * - Status values: investigating, reviewing, resolved, blocked
 */
export interface SecurityAlert {
  id: string;
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'investigating' | 'reviewing' | 'resolved' | 'blocked';
  userId: string;
  accountNumber: string; // Format: "XX-****XXXX" (masked)
  timestamp: string; // ISO 8601 date string
  metadata?: Record<string, any>; // Additional alert data
}

// ============================================================================
// DASHBOARD TYPES
// ============================================================================

/**
 * Dashboard statistics structure
 * Returned by: /dashboard/stats
 */
export interface DashboardStats {
  totalTransactions: number;
  fraudDetected: number;
  preventedLosses: string; // Format: "$X,XXX,XXX"
  detectionRate: string; // Format: "XX.X%"
}

// ============================================================================
// LOCATION ACTIVITY TYPES
// ============================================================================

/**
 * Location activity structure
 * Returned by: /monitoring/locations
 */
export interface LocationActivity {
  id: string;
  location: string; // Format: "City, Country"
  transactionCount: number;
  riskLevel: 'low' | 'medium' | 'high';
  timestamp: string; // ISO 8601 date string
}

// ============================================================================
// RISK ASSESSMENT TYPES
// ============================================================================

/**
 * Risk assessment structure
 * Returned by: /monitoring/risk
 */
export interface RiskAssessment {
  overallRiskLevel: number; // 0-100
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

// ============================================================================
// REPORT TYPES
// ============================================================================

/**
 * Report structure
 * Returned by: /reports
 */
export interface Report {
  id: string;
  name: string;
  type: 'fraud-summary' | 'alert-investigation' | 'risk-analysis';
  format: 'pdf' | 'excel' | 'csv';
  size: string; // Format: "X.X MB" or "X.X KB"
  generatedAt: string; // ISO 8601 date string
  downloadUrl: string; // Full URL or relative path
}

// ============================================================================
// SETTINGS TYPES
// ============================================================================

/**
 * Security settings structure
 * Returned by: GET /settings/security
 * Sent to: PUT /settings/security
 */
export interface SecuritySettings {
  twoFactorAuth: boolean;
  securityAlerts: boolean;
  realTimeMonitoring: boolean;
  autoBlockSuspicious: boolean;
}

// ============================================================================
// MONITORING TYPES
// ============================================================================

/**
 * System monitoring structure
 * Returned by: /monitoring/system
 */
export interface SystemMonitoring {
  systemActive: boolean;
  transactionsPerSecond: number;
  totalProcessed: number;
  secureTransactions: number;
  flaggedTransactions: number;
  successRate: number; // Percentage (0-100)
}

// ============================================================================
// API RESPONSE TYPES
// ============================================================================

/**
 * Standard API response wrapper
 * All API endpoints should return this structure
 * 
 * BACKEND REQUIREMENTS:
 * - success: true for successful requests, false for errors
 * - data: The actual response data (type T)
 * - message: Optional success message
 * - error: Optional error message (when success is false)
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

/**
 * Paginated API response wrapper
 * Used for list endpoints with pagination
 * 
 * BACKEND REQUIREMENTS:
 * - data: Array of items
 * - pagination: Pagination metadata
 */
export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number; // Current page (1-indexed)
    limit: number; // Items per page
    total: number; // Total number of items
    totalPages: number; // Total number of pages
  };
}

// ============================================================================
// FILTER AND QUERY TYPES
// ============================================================================

/**
 * Transaction filter options
 * Used as query parameters for: GET /transactions
 */
export interface TransactionFilters {
  status?: Transaction['status'];
  dateFrom?: string; // ISO 8601 date string
  dateTo?: string; // ISO 8601 date string
  minAmount?: number;
  maxAmount?: number;
  location?: string;
  platform?: Transaction['platform'];
  riskLevel?: 'low' | 'medium' | 'high';
}

/**
 * Alert filter options
 * Used as query parameters for: GET /alerts
 */
export interface AlertFilters {
  severity?: SecurityAlert['severity'];
  status?: SecurityAlert['status'];
  dateFrom?: string; // ISO 8601 date string
  dateTo?: string; // ISO 8601 date string
}
