/**
 * API Client for Backend Integration
 * 
 * BACKEND INTEGRATION GUIDE:
 * ==========================
 * 
 * This file contains the API client that communicates with your backend.
 * 
 * CURRENT STATUS:
 * - All methods currently use mock data for development
 * - Replace TODO comments with actual API calls
 * - Remove mock implementations once backend is ready
 * 
 * INTEGRATION STEPS:
 * 1. Uncomment the actual API calls (marked with TODO)
 * 2. Remove mock implementations
 * 3. Test each endpoint
 * 4. Handle errors appropriately
 * 
 * AUTHENTICATION:
 * - Tokens are stored in localStorage (STORAGE_KEYS.AUTH_TOKEN)
 * - Automatically included in Authorization header
 * - Handle 401 errors by redirecting to login
 */

import { API_CONFIG, API_ENDPOINTS, STORAGE_KEYS, ERROR_MESSAGES } from './config';
import type {
  ApiResponse,
  PaginatedResponse,
  LoginRequest,
  RegisterRequest,
  AuthResponse,
  User,
  Transaction,
  SecurityAlert,
  DashboardStats,
  LocationActivity,
  RiskAssessment,
  Report,
  SecuritySettings,
  SystemMonitoring,
  TransactionFilters,
  AlertFilters,
} from './types';

// ============================================================================
// API CLIENT CLASS
// ============================================================================

/**
 * Main API client class
 * Handles all HTTP requests to the backend
 */
class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
  }

  /**
   * Get authentication token from localStorage
   * @returns JWT token or null
   */
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    }
    return null;
  }

  /**
   * Build request headers with authentication
   * @param includeAuth - Whether to include Authorization header
   * @returns Headers object
   */
  private buildHeaders(includeAuth = true): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (includeAuth) {
      const token = this.getAuthToken();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    }

    return headers;
  }

  /**
   * Generic request method
   * Handles all HTTP requests with error handling and retries
   * 
   * BACKEND INTEGRATION:
   * - This method handles the actual API calls
   * - Backend should return standard ApiResponse format
   * - Errors should be thrown and caught by calling code
   * 
   * @param endpoint - API endpoint (from API_ENDPOINTS)
   * @param options - Fetch options (method, body, etc.)
   * @returns Promise with API response
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseURL}${endpoint}`;
      const config: RequestInit = {
        ...options,
        headers: {
          ...this.buildHeaders(),
          ...options.headers,
        },
      };

      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        // Handle 401 Unauthorized - redirect to login
        if (response.status === 401) {
          if (typeof window !== 'undefined') {
            localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
            localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
            window.location.href = '/auth/signin';
          }
        }
        throw new Error(data.message || ERROR_MESSAGES.SERVER_ERROR);
      }

      return data;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // ========================================================================
  // AUTHENTICATION METHODS
  // ========================================================================

  /**
   * Login user
   * 
   * BACKEND REQUIREMENTS:
   * - POST /auth/login
   * - Body: { email: string, password: string }
   * - Response: { success: true, data: { user: User, token: string, refreshToken: string } }
   * 
   * @param credentials - Login credentials
   * @returns Authentication response with user and tokens
   */
  async login(credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> {
    // TODO: Replace with actual API call
    // return this.request<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, {
    //   method: 'POST',
    //   body: JSON.stringify(credentials),
    // });

    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockResponse: ApiResponse<AuthResponse> = {
          success: true,
          data: {
            user: {
              id: '1',
              email: credentials.email,
              firstName: 'John',
              lastName: 'Doe',
              role: 'admin',
              createdAt: new Date().toISOString(),
            },
            token: 'mock-jwt-token',
            refreshToken: 'mock-refresh-token',
          },
        };
        resolve(mockResponse);
      }, 1000);
    });
  }

  /**
   * Register new user
   * 
   * BACKEND REQUIREMENTS:
   * - POST /auth/register
   * - Body: { firstName: string, lastName: string, email: string, password: string }
   * - Response: { success: true, data: { user: User, token: string, refreshToken: string } }
   * 
   * @param userData - Registration data
   * @returns Authentication response with user and tokens
   */
  async register(userData: RegisterRequest): Promise<ApiResponse<AuthResponse>> {
    // TODO: Replace with actual API call
    // return this.request<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    // });

    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockResponse: ApiResponse<AuthResponse> = {
          success: true,
          data: {
            user: {
              id: '1',
              email: userData.email,
              firstName: userData.firstName,
              lastName: userData.lastName,
              role: 'user',
              createdAt: new Date().toISOString(),
            },
            token: 'mock-jwt-token',
            refreshToken: 'mock-refresh-token',
          },
        };
        resolve(mockResponse);
      }, 1000);
    });
  }

  /**
   * Logout user
   * 
   * BACKEND REQUIREMENTS:
   * - POST /auth/logout
   * - Headers: { Authorization: "Bearer <token>" }
   * - Response: { success: true, data: null }
   * 
   * @returns Success response
   */
  async logout(): Promise<ApiResponse<void>> {
    // TODO: Replace with actual API call
    // return this.request<void>(API_ENDPOINTS.AUTH.LOGOUT, {
    //   method: 'POST',
    // });

    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: undefined });
      }, 500);
    });
  }

  // ========================================================================
  // DASHBOARD METHODS
  // ========================================================================

  /**
   * Get dashboard statistics
   * 
   * BACKEND REQUIREMENTS:
   * - GET /dashboard/stats
   * - Headers: { Authorization: "Bearer <token>" }
   * - Response: { success: true, data: DashboardStats }
   * 
   * @returns Dashboard statistics
   */
  async getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
    // TODO: Replace with actual API call
    // return this.request<DashboardStats>(API_ENDPOINTS.DASHBOARD.STATS);

    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            totalTransactions: 2847592,
            fraudDetected: 1247,
            preventedLosses: '$2,847,592',
            detectionRate: '99.7%',
          },
        });
      }, 500);
    });
  }

  // ========================================================================
  // TRANSACTION METHODS
  // ========================================================================

  /**
   * Get paginated list of transactions
   * 
   * BACKEND REQUIREMENTS:
   * - GET /transactions?page=1&limit=20&status=approved&type=transfer
   * - Headers: { Authorization: "Bearer <token>" }
   * - Query Params: page, limit, status, type, startDate, endDate, userId
   * - Response: { success: true, data: Transaction[], pagination: { page, limit, total, totalPages } }
   * 
   * @param filters - Optional filters for transactions
   * @param page - Page number (default: 1)
   * @param limit - Items per page (default: 20)
   * @returns Paginated transaction list
   */
  async getTransactions(
    filters?: TransactionFilters,
    page = 1,
    limit = 20
  ): Promise<PaginatedResponse<Transaction>> {
    // TODO: Replace with actual API call
    // const params = new URLSearchParams({
    //   page: page.toString(),
    //   limit: limit.toString(),
    //   ...(filters && Object.entries(filters).forEach(([key, value]) => {
    //     if (value) params.append(key, value.toString());
    //   })),
    // });
    // return this.request<Transaction[]>(`${API_ENDPOINTS.TRANSACTIONS.LIST}?${params}`);

    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockTransactions: Transaction[] = [
          {
            id: '1',
            userId: 'user1',
            userName: 'John Doe',
            amount: '$25,000.0',
            location: 'Kigali, Rwanda',
            platform: 'mobile',
            type: 'transfer',
            status: 'approved',
            timestamp: new Date().toISOString(),
          },
        ];

        resolve({
          success: true,
          data: mockTransactions,
          pagination: {
            page,
            limit,
            total: 100,
            totalPages: 5,
          },
        });
      }, 500);
    });
  }

  /**
   * Get transaction details by ID
   * 
   * BACKEND REQUIREMENTS:
   * - GET /transactions/:id
   * - Headers: { Authorization: "Bearer <token>" }
   * - Response: { success: true, data: Transaction }
   * 
   * @param id - Transaction ID
   * @returns Transaction details
   */
  async getTransactionDetails(id: string): Promise<ApiResponse<Transaction>> {
    // TODO: Replace with actual API call
    // return this.request<Transaction>(API_ENDPOINTS.TRANSACTIONS.DETAILS.replace(':id', id));

    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            id,
            userId: 'user1',
            userName: 'John Doe',
            amount: '$25,000.0',
            location: 'Kigali, Rwanda',
            platform: 'mobile',
            type: 'transfer',
            status: 'approved',
            timestamp: new Date().toISOString(),
          },
        });
      }, 500);
    });
  }

  // ========================================================================
  // ALERT METHODS
  // ========================================================================

  /**
   * Get paginated list of security alerts
   * 
   * BACKEND REQUIREMENTS:
   * - GET /alerts?page=1&limit=20&severity=high&status=investigating
   * - Headers: { Authorization: "Bearer <token>" }
   * - Query Params: page, limit, severity, status, userId
   * - Response: { success: true, data: SecurityAlert[], pagination: { page, limit, total, totalPages } }
   * 
   * @param filters - Optional filters for alerts
   * @param page - Page number (default: 1)
   * @param limit - Items per page (default: 20)
   * @returns Paginated alert list
   */
  async getAlerts(
    filters?: AlertFilters,
    page = 1,
    limit = 20
  ): Promise<PaginatedResponse<SecurityAlert>> {
    // TODO: Replace with actual API call
    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockAlerts: SecurityAlert[] = [
          {
            id: '1',
            title: 'Suspicious Login Pattern',
            description: 'Multiple failed login attempts from new device',
            severity: 'high',
            status: 'investigating',
            userId: 'user1',
            accountNumber: 'JD-****1234',
            timestamp: new Date().toISOString(),
          },
        ];

        resolve({
          success: true,
          data: mockAlerts,
          pagination: {
            page,
            limit,
            total: 50,
            totalPages: 3,
          },
        });
      }, 500);
    });
  }

  // ========================================================================
  // SETTINGS METHODS
  // ========================================================================

  /**
   * Get security settings
   * 
   * BACKEND REQUIREMENTS:
   * - GET /settings/security
   * - Headers: { Authorization: "Bearer <token>" }
   * - Response: { success: true, data: SecuritySettings }
   * 
   * @returns Security settings
   */
  async getSecuritySettings(): Promise<ApiResponse<SecuritySettings>> {
    // TODO: Replace with actual API call
    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            twoFactorAuth: true,
            securityAlerts: true,
            realTimeMonitoring: true,
            autoBlockSuspicious: false,
          },
        });
      }, 500);
    });
  }

  /**
   * Update security settings
   * 
   * BACKEND REQUIREMENTS:
   * - PUT /settings/security
   * - Headers: { Authorization: "Bearer <token>" }
   * - Body: SecuritySettings
   * - Response: { success: true, data: SecuritySettings }
   * 
   * @param settings - Updated security settings
   * @returns Updated security settings
   */
  async updateSecuritySettings(settings: SecuritySettings): Promise<ApiResponse<SecuritySettings>> {
    // TODO: Replace with actual API call
    // return this.request<SecuritySettings>(API_ENDPOINTS.SETTINGS.UPDATE_SECURITY, {
    //   method: 'PUT',
    //   body: JSON.stringify(settings),
    // });

    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: settings,
        });
      }, 500);
    });
  }

  // ========================================================================
  // MONITORING METHODS
  // ========================================================================

  /**
   * Get system monitoring data
   * 
   * BACKEND REQUIREMENTS:
   * - GET /monitoring/system
   * - Headers: { Authorization: "Bearer <token>" }
   * - Response: { success: true, data: SystemMonitoring }
   * 
   * @returns System monitoring data
   */
  async getSystemMonitoring(): Promise<ApiResponse<SystemMonitoring>> {
    // TODO: Replace with actual API call
    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            systemActive: true,
            transactionsPerSecond: 254,
            totalProcessed: 16283,
            secureTransactions: 16283,
            flaggedTransactions: 72,
            successRate: 99.93,
          },
        });
      }, 500);
    });
  }

  /**
   * Get risk assessment data
   * 
   * BACKEND REQUIREMENTS:
   * - GET /monitoring/risk
   * - Headers: { Authorization: "Bearer <token>" }
   * - Response: { success: true, data: RiskAssessment }
   * 
   * @returns Risk assessment data
   */
  async getRiskAssessment(): Promise<ApiResponse<RiskAssessment>> {
    // TODO: Replace with actual API call
    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: {
            overallRiskLevel: 82,
            riskCategory: 'medium',
            securityFeatures: {
              authentication: { status: 'active', enabled: true },
              behaviorAnalysis: { status: 'monitoring', enabled: true },
              deviceFingerprinting: { status: 'enabled', enabled: true },
            },
          },
        });
      }, 500);
    });
  }

  // ========================================================================
  // REPORTS METHODS
  // ========================================================================

  /**
   * Get list of reports
   * 
   * BACKEND REQUIREMENTS:
   * - GET /reports
   * - Headers: { Authorization: "Bearer <token>" }
   * - Response: { success: true, data: Report[] }
   * 
   * @returns List of reports
   */
  async getReports(): Promise<ApiResponse<Report[]>> {
    // TODO: Replace with actual API call
    // Mock implementation - REMOVE when backend is ready
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: [
            {
              id: '1',
              name: 'Weekly Fraud Summary',
              type: 'fraud-summary',
              format: 'pdf',
              size: '2.4 MB',
              generatedAt: '2024-05-15',
              downloadUrl: '/reports/1/download',
            },
          ],
        });
      }, 500);
    });
  }
}

// ============================================================================
// EXPORT SINGLETON INSTANCE
// ============================================================================

/**
 * Singleton API client instance
 * Use this throughout the application
 */
export const apiClient = new ApiClient();

// ============================================================================
// SERVICE EXPORTS (For easier imports)
// ============================================================================

/**
 * Authentication service
 * Usage: import { authService } from '@/lib/api'
 */
export const authService = {
  login: (credentials: LoginRequest) => apiClient.login(credentials),
  register: (userData: RegisterRequest) => apiClient.register(userData),
  logout: () => apiClient.logout(),
};

/**
 * Dashboard service
 * Usage: import { dashboardService } from '@/lib/api'
 */
export const dashboardService = {
  getStats: () => apiClient.getDashboardStats(),
};

/**
 * Transaction service
 * Usage: import { transactionService } from '@/lib/api'
 */
export const transactionService = {
  getAll: (filters?: TransactionFilters, page?: number, limit?: number) =>
    apiClient.getTransactions(filters, page, limit),
  getById: (id: string) => apiClient.getTransactionDetails(id),
};

/**
 * Alert service
 * Usage: import { alertService } from '@/lib/api'
 */
export const alertService = {
  getAll: (filters?: AlertFilters, page?: number, limit?: number) =>
    apiClient.getAlerts(filters, page, limit),
};

/**
 * Settings service
 * Usage: import { settingsService } from '@/lib/api'
 */
export const settingsService = {
  getSecurity: () => apiClient.getSecuritySettings(),
  updateSecurity: (settings: SecuritySettings) => apiClient.updateSecuritySettings(settings),
};

/**
 * Monitoring service
 * Usage: import { monitoringService } from '@/lib/api'
 */
export const monitoringService = {
  getSystemStatus: () => apiClient.getSystemMonitoring(),
  getRiskAssessment: () => apiClient.getRiskAssessment(),
};
