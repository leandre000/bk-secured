/**
 * API Configuration & Endpoints
 * 
 * BACKEND INTEGRATION GUIDE:
 * ==========================
 * 
 * This file contains all API endpoints and configuration needed for backend integration.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Set environment variables in .env.local:
 *    - NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com/api
 *    - NEXT_PUBLIC_WS_BASE_URL=wss://your-api-domain.com/ws
 * 
 * 2. All endpoints expect RESTful API responses in this format:
 *    {
 *      "success": boolean,
 *      "data": any,
 *      "message"?: string,
 *      "error"?: string
 *    }
 * 
 * 3. Authentication: Use Bearer token in Authorization header
 *    Format: Authorization: Bearer <token>
 * 
 * 4. Error responses should return appropriate HTTP status codes:
 *    - 401: Unauthorized (invalid/expired token)
 *    - 403: Forbidden (insufficient permissions)
 *    - 404: Not Found
 *    - 500: Server Error
 * 
 * 5. WebSocket: Connect to WS_BASE_URL and listen for events defined in WS_EVENTS
 */

// ============================================================================
// API CONFIGURATION
// ============================================================================

/**
 * Base API configuration
 * @property BASE_URL - Backend API base URL (set via NEXT_PUBLIC_API_BASE_URL env var)
 * @property TIMEOUT - Request timeout in milliseconds (30 seconds)
 * @property RETRY_ATTEMPTS - Number of retry attempts for failed requests
 * @property RETRY_DELAY - Delay between retries in milliseconds
 */
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
};

// ============================================================================
// API ENDPOINTS
// ============================================================================

/**
 * All API endpoints for backend integration
 * 
 * BACKEND REQUIREMENTS:
 * - All endpoints should return JSON responses
 * - Use standard HTTP methods (GET, POST, PUT, DELETE)
 * - Implement proper error handling
 * - Include pagination for list endpoints (page, limit, total, totalPages)
 */
export const API_ENDPOINTS = {
  // ========================================================================
  // AUTHENTICATION ENDPOINTS
  // ========================================================================
  // Expected Request/Response formats:
  // POST /auth/login
  //   Body: { email: string, password: string }
  //   Response: { success: true, data: { user: User, token: string, refreshToken: string } }
  //
  // POST /auth/register
  //   Body: { firstName: string, lastName: string, email: string, password: string }
  //   Response: { success: true, data: { user: User, token: string, refreshToken: string } }
  //
  // POST /auth/logout
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: null }
  //
  // POST /auth/refresh
  //   Body: { refreshToken: string }
  //   Response: { success: true, data: { token: string, refreshToken: string } }
  //
  // GET /auth/profile
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: User }
  // ========================================================================
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile',
  },
  
  // ========================================================================
  // DASHBOARD ENDPOINTS
  // ========================================================================
  // GET /dashboard/stats
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: { totalTransactions: number, fraudDetected: number, preventedLosses: string, detectionRate: string } }
  //
  // GET /dashboard/overview
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: { recentTransactions: Transaction[], alerts: SecurityAlert[], stats: DashboardStats } }
  // ========================================================================
  DASHBOARD: {
    STATS: '/dashboard/stats',
    OVERVIEW: '/dashboard/overview',
  },
  
  // ========================================================================
  // TRANSACTION ENDPOINTS
  // ========================================================================
  // GET /transactions?page=1&limit=20&status=approved&type=transfer
  //   Headers: { Authorization: "Bearer <token>" }
  //   Query Params: page, limit, status, type, startDate, endDate, userId
  //   Response: { success: true, data: Transaction[], pagination: { page, limit, total, totalPages } }
  //
  // GET /transactions/:id
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: Transaction }
  //
  // GET /transactions/real-time
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: Transaction[] } (SSE or WebSocket recommended)
  //
  // GET /transactions/export?format=csv&startDate=...&endDate=...
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: File download (CSV/PDF)
  // ========================================================================
  TRANSACTIONS: {
    LIST: '/transactions',
    DETAILS: '/transactions/:id', // Replace :id with actual transaction ID
    REAL_TIME: '/transactions/real-time',
    EXPORT: '/transactions/export',
  },
  
  // ========================================================================
  // ALERT ENDPOINTS
  // ========================================================================
  // GET /alerts?page=1&limit=20&severity=high&status=investigating
  //   Headers: { Authorization: "Bearer <token>" }
  //   Query Params: page, limit, severity, status, userId
  //   Response: { success: true, data: SecurityAlert[], pagination: { page, limit, total, totalPages } }
  //
  // GET /alerts/:id
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: SecurityAlert }
  //
  // PUT /alerts/:id/status
  //   Headers: { Authorization: "Bearer <token>" }
  //   Body: { status: 'investigating' | 'reviewing' | 'resolved' | 'blocked' }
  //   Response: { success: true, data: SecurityAlert }
  //
  // DELETE /alerts/:id/dismiss
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: null }
  // ========================================================================
  ALERTS: {
    LIST: '/alerts',
    DETAILS: '/alerts/:id', // Replace :id with actual alert ID
    UPDATE_STATUS: '/alerts/:id/status', // Replace :id with actual alert ID
    DISMISS: '/alerts/:id/dismiss', // Replace :id with actual alert ID
  },
  
  // ========================================================================
  // REPORT ENDPOINTS
  // ========================================================================
  // GET /reports
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: Report[] }
  //
  // POST /reports/generate
  //   Headers: { Authorization: "Bearer <token>" }
  //   Body: { type: 'fraud-summary' | 'alert-investigation' | 'risk-analysis', format: 'pdf' | 'csv', startDate: string, endDate: string }
  //   Response: { success: true, data: { reportId: string, status: 'generating' | 'completed' } }
  //
  // GET /reports/:id/download
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: File download
  //
  // DELETE /reports/:id
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: null }
  // ========================================================================
  REPORTS: {
    LIST: '/reports',
    GENERATE: '/reports/generate',
    DOWNLOAD: '/reports/:id/download', // Replace :id with actual report ID
    DELETE: '/reports/:id', // Replace :id with actual report ID
  },
  
  // ========================================================================
  // SETTINGS ENDPOINTS
  // ========================================================================
  // GET /settings/security
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: SecuritySettings }
  //
  // PUT /settings/security
  //   Headers: { Authorization: "Bearer <token>" }
  //   Body: { twoFactorAuth: boolean, securityAlerts: boolean, realTimeMonitoring: boolean, autoBlockSuspicious: boolean }
  //   Response: { success: true, data: SecuritySettings }
  // ========================================================================
  SETTINGS: {
    SECURITY: '/settings/security',
    UPDATE_SECURITY: '/settings/security',
  },
  
  // ========================================================================
  // MONITORING ENDPOINTS
  // ========================================================================
  // GET /monitoring/system
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: SystemMonitoring }
  //
  // GET /monitoring/risk
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: RiskAssessment }
  //
  // GET /monitoring/locations
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: LocationActivity[] }
  // ========================================================================
  MONITORING: {
    SYSTEM_STATUS: '/monitoring/system',
    RISK_ASSESSMENT: '/monitoring/risk',
    LOCATION_ACTIVITY: '/monitoring/locations',
  },
  
  // ========================================================================
  // ANALYTICS ENDPOINTS
  // ========================================================================
  // GET /analytics/prevented-losses?startDate=...&endDate=...
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: { date: string, amount: number }[] }
  //
  // GET /analytics/fraud-trends?period=7d|30d|90d
  //   Headers: { Authorization: "Bearer <token>" }
  //   Response: { success: true, data: { date: string, count: number }[] }
  // ========================================================================
  ANALYTICS: {
    PREVENTED_LOSSES: '/analytics/prevented-losses',
    FRAUD_TRENDS: '/analytics/fraud-trends',
  },
};

// ============================================================================
// WEBSOCKET CONFIGURATION
// ============================================================================

/**
 * WebSocket configuration for real-time updates
 * 
 * BACKEND REQUIREMENTS:
 * - WebSocket server should accept connections at WS_BASE_URL
 * - Client must send authentication token in connection query: ?token=<jwt_token>
 * - Server should emit events defined in WS_EVENTS
 * - Implement reconnection logic on client side
 */
export const WS_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_WS_BASE_URL || 'ws://localhost:8000/ws',
  RECONNECT_INTERVAL: 5000, // 5 seconds
  MAX_RECONNECT_ATTEMPTS: 10,
};

/**
 * WebSocket event names
 * 
 * BACKEND IMPLEMENTATION:
 * - Emit these events when corresponding data changes occur
 * - Event payload should match the TypeScript types in lib/types.ts
 * - Example: ws.emit('transaction_update', { id: '123', status: 'approved', ... })
 */
export const WS_EVENTS = {
  TRANSACTION_UPDATE: 'transaction_update', // Payload: Transaction
  NEW_ALERT: 'new_alert', // Payload: SecurityAlert
  SYSTEM_STATUS: 'system_status', // Payload: SystemMonitoring
  RISK_UPDATE: 'risk_update', // Payload: RiskAssessment
};

// ============================================================================
// LOCAL STORAGE KEYS
// ============================================================================

/**
 * Keys used for browser localStorage
 * Backend doesn't need to know about these, but useful for reference
 */
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'fraud_detection_token',
  REFRESH_TOKEN: 'fraud_detection_refresh_token',
  USER_DATA: 'fraud_detection_user',
  SETTINGS: 'fraud_detection_settings',
};

// ============================================================================
// ERROR MESSAGES
// ============================================================================

/**
 * Standard error messages displayed to users
 * Backend should return appropriate error messages in response
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Session expired. Please login again.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
};

// ============================================================================
// SUCCESS MESSAGES
// ============================================================================

/**
 * Standard success messages displayed to users
 */
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully logged in',
  LOGOUT_SUCCESS: 'Successfully logged out',
  SETTINGS_UPDATED: 'Settings updated successfully',
  REPORT_GENERATED: 'Report generated successfully',
  ALERT_DISMISSED: 'Alert dismissed successfully',
};
