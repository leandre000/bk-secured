import { STORAGE_KEYS } from './config';
import { authService } from './api';
import type { User, LoginRequest, RegisterRequest } from './types';

// Auth State Management
class AuthManager {
  private user: User | null = null;
  private token: string | null = null;
  private refreshToken: string | null = null;

  constructor() {
    // Initialize from localStorage on client side
    if (typeof window !== 'undefined') {
      this.loadFromStorage();
    }
  }

  // Login method
  async login(credentials: LoginRequest): Promise<User> {
    try {
      const response = await authService.login(credentials);
      
      if (response.success && response.data) {
        const { user, token, refreshToken } = response.data;
        
        this.user = user;
        this.token = token;
        this.refreshToken = refreshToken;
        
        this.saveToStorage();
        
        return user;
      } else {
        throw new Error(response.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  // Register method
  async register(userData: RegisterRequest): Promise<User> {
    try {
      const response = await authService.register(userData);
      
      if (response.success && response.data) {
        const { user, token, refreshToken } = response.data;
        
        this.user = user;
        this.token = token;
        this.refreshToken = refreshToken;
        
        this.saveToStorage();
        
        return user;
      } else {
        throw new Error(response.error || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }

  // Logout method
  async logout(): Promise<void> {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.clearAuth();
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.token && !!this.user;
  }

  // Get current user
  getCurrentUser(): User | null {
    return this.user;
  }

  // Get auth token
  getToken(): string | null {
    return this.token;
  }

  // Get refresh token
  getRefreshToken(): string | null {
    return this.refreshToken;
  }

  // Refresh auth token
  async refreshAuthToken(): Promise<string | null> {
    // TODO: Implement token refresh logic
    // This would typically call an API endpoint to refresh the token
    console.log('Token refresh not implemented yet');
    return null;
  }

  // Clear authentication data
  private clearAuth(): void {
    this.user = null;
    this.token = null;
    this.refreshToken = null;
    
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
      localStorage.removeItem(STORAGE_KEYS.USER_DATA);
    }
  }

  // Save auth data to localStorage
  private saveToStorage(): void {
    if (typeof window !== 'undefined') {
      if (this.token) {
        localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, this.token);
      }
      if (this.refreshToken) {
        localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, this.refreshToken);
      }
      if (this.user) {
        localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(this.user));
      }
    }
  }

  // Load auth data from localStorage
  private loadFromStorage(): void {
    try {
      this.token = localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
      this.refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
      
      const userData = localStorage.getItem(STORAGE_KEYS.USER_DATA);
      if (userData) {
        this.user = JSON.parse(userData);
      }
    } catch (error) {
      console.error('Error loading auth data from storage:', error);
      this.clearAuth();
    }
  }
}

// Export singleton instance
export const authManager = new AuthManager();

// Export convenience functions
export const login = (credentials: LoginRequest) => authManager.login(credentials);
export const register = (userData: RegisterRequest) => authManager.register(userData);
export const logout = () => authManager.logout();
export const isAuthenticated = () => authManager.isAuthenticated();
export const getCurrentUser = () => authManager.getCurrentUser();
export const getAuthToken = () => authManager.getToken();