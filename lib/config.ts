// API Configuration
export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
};

// API Endpoints
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile',
  },
  
  // Dashboard
  DASHBOARD: {
    STATS: '/dashboard/stats',
    OVERVIEW: '/dashboard/overview',
  },
  
  // Transactions
  TRANSACTIONS: {
    LIST: '/transactions',
    DETAILS: '/transactions/:id',
    REAL_TIME: '/transactions/real-time',
    EXPORT: '/transactions/export',
  },
  
  // Alerts
  ALERTS: {
    LIST: '/alerts',
    DETAILS: '/alerts/:id',
    UPDATE_STATUS: '/alerts/:id/status',
    DISMISS: '/alerts/:id/dismiss',
  },
  
  // Reports
  REPORTS: {
    LIST: '/reports',
    GENERATE: '/reports/generate',
    DOWNLOAD: '/reports/:id/download',
    DELETE: '/reports/:id',
  },
  
  // Settings
  SETTINGS: {
    SECURITY: '/settings/security',
    UPDATE_SECURITY: '/settings/security',
  },
  
  // Monitoring
  MONITORING: {
    SYSTEM_STATUS: '/monitoring/system',
    RISK_ASSESSMENT: '/monitoring/risk',
    LOCATION_ACTIVITY: '/monitoring/locations',
  },
  
  // Analytics
  ANALYTICS: {
    PREVENTED_LOSSES: '/analytics/prevented-losses',
    FRAUD_TRENDS: '/analytics/fraud-trends',
  },
};

// WebSocket Configuration
export const WS_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_WS_BASE_URL || 'ws://localhost:8000/ws',
  RECONNECT_INTERVAL: 5000, // 5 seconds
  MAX_RECONNECT_ATTEMPTS: 10,
};

// WebSocket Events
export const WS_EVENTS = {
  TRANSACTION_UPDATE: 'transaction_update',
  NEW_ALERT: 'new_alert',
  SYSTEM_STATUS: 'system_status',
  RISK_UPDATE: 'risk_update',
};

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'fraud_detection_token',
  REFRESH_TOKEN: 'fraud_detection_refresh_token',
  USER_DATA: 'fraud_detection_user',
  SETTINGS: 'fraud_detection_settings',
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Session expired. Please login again.',
  FORBIDDEN: 'You do not have permission to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Successfully logged in',
  LOGOUT_SUCCESS: 'Successfully logged out',
  SETTINGS_UPDATED: 'Settings updated successfully',
  REPORT_GENERATED: 'Report generated successfully',
  ALERT_DISMISSED: 'Alert dismissed successfully',
};