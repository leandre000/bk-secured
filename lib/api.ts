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

// API Client Class
class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
  }

  // Helper method to get auth token
  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    }
    return null;
  }

  // Helper method to build headers
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

  // Generic request method
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
        throw new Error(data.message || ERROR_MESSAGES.SERVER_ERROR);
      }

      return data;
    } catch (error) {
      console.error('API Request Error:', error);
      throw error;
    }
  }

  // Authentication Methods
  async login(credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> {
    // TODO: Replace with actual API call
    // return this.request<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, {
    //   method: 'POST',
    //   body: JSON.stringify(credentials),
    // });

    // Mock implementation for now
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

  async register(userData: RegisterRequest): Promise<ApiResponse<AuthResponse>> {
    // TODO: Replace with actual API call
    // return this.request<AuthResponse>(API_ENDPOINTS.AUTH.REGISTER, {
    //   method: 'POST',
    //   body: JSON.stringify(userData),
    // });

    // Mock implementation for now
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

  async logout(): Promise<ApiResponse<void>> {
    // TODO: Replace with actual API call
    // return this.request<void>(API_ENDPOINTS.AUTH.LOGOUT, {
    //   method: 'POST',
    // });

    // Mock implementation for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, data: undefined });
      }, 500);
    });
  }

  // Dashboard Methods
  async getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
    // TODO: Replace with actual API call
    // return this.request<DashboardStats>(API_ENDPOINTS.DASHBOARD.STATS);

    // Mock implementation for now
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

  // Transaction Methods
  async getTransactions(
    filters?: TransactionFilters,
    page = 1,
    limit = 20
  ): Promise<PaginatedResponse<Transaction>> {
    // TODO: Replace with actual API call
    // const params = new URLSearchParams({
    //   page: page.toString(),
    //   limit: limit.toString(),
    //   ...filters,
    // });
    // return this.request<Transaction[]>(`${API_ENDPOINTS.TRANSACTIONS.LIST}?${params}`);

    // Mock implementation for now
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
          // Add more mock transactions...
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

  async getTransactionDetails(id: string): Promise<ApiResponse<Transaction>> {
    // TODO: Replace with actual API call
    // return this.request<Transaction>(API_ENDPOINTS.TRANSACTIONS.DETAILS.replace(':id', id));

    // Mock implementation for now
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

  // Alert Methods
  async getAlerts(
    filters?: AlertFilters,
    page = 1,
    limit = 20
  ): Promise<PaginatedResponse<SecurityAlert>> {
    // TODO: Replace with actual API call
    // Mock implementation for now
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
          // Add more mock alerts...
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

  // Settings Methods
  async getSecuritySettings(): Promise<ApiResponse<SecuritySettings>> {
    // TODO: Replace with actual API call
    // Mock implementation for now
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

  async updateSecuritySettings(settings: SecuritySettings): Promise<ApiResponse<SecuritySettings>> {
    // TODO: Replace with actual API call
    // return this.request<SecuritySettings>(API_ENDPOINTS.SETTINGS.UPDATE_SECURITY, {
    //   method: 'PUT',
    //   body: JSON.stringify(settings),
    // });

    // Mock implementation for now
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: settings,
        });
      }, 500);
    });
  }

  // Monitoring Methods
  async getSystemMonitoring(): Promise<ApiResponse<SystemMonitoring>> {
    // TODO: Replace with actual API call
    // Mock implementation for now
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

  async getRiskAssessment(): Promise<ApiResponse<RiskAssessment>> {
    // TODO: Replace with actual API call
    // Mock implementation for now
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

  // Reports Methods
  async getReports(): Promise<ApiResponse<Report[]>> {
    // TODO: Replace with actual API call
    // Mock implementation for now
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
            // Add more mock reports...
          ],
        });
      }, 500);
    });
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Export individual service methods for easier use
export const authService = {
  login: (credentials: LoginRequest) => apiClient.login(credentials),
  register: (userData: RegisterRequest) => apiClient.register(userData),
  logout: () => apiClient.logout(),
};

export const dashboardService = {
  getStats: () => apiClient.getDashboardStats(),
};

export const transactionService = {
  getAll: (filters?: TransactionFilters, page?: number, limit?: number) =>
    apiClient.getTransactions(filters, page, limit),
  getById: (id: string) => apiClient.getTransactionDetails(id),
};

export const alertService = {
  getAll: (filters?: AlertFilters, page?: number, limit?: number) =>
    apiClient.getAlerts(filters, page, limit),
};

export const settingsService = {
  getSecurity: () => apiClient.getSecuritySettings(),
  updateSecurity: (settings: SecuritySettings) => apiClient.updateSecuritySettings(settings),
};

export const monitoringService = {
  getSystemStatus: () => apiClient.getSystemMonitoring(),
  getRiskAssessment: () => apiClient.getRiskAssessment(),
};