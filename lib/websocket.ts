import { WS_CONFIG, WS_EVENTS, STORAGE_KEYS } from './config';
import type { Transaction, SecurityAlert, SystemMonitoring } from './types';

// WebSocket Event Types
export interface WebSocketEvents {
  'transaction_update': Transaction;
  'new_alert': SecurityAlert;
  'system_status': SystemMonitoring;
  'risk_update': { riskLevel: number; riskCategory: string };
}

// WebSocket Manager Class
class WebSocketManager {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private eventListeners: Map<string, Set<Function>> = new Map();
  private isConnecting = false;

  constructor() {
    // Auto-connect when instantiated
    this.connect();
  }

  // Connect to WebSocket server
  connect(): void {
    if (this.isConnecting || (this.ws && this.ws.readyState === WebSocket.CONNECTING)) {
      return;
    }

    this.isConnecting = true;

    try {
      const token = this.getAuthToken();
      const wsUrl = `${WS_CONFIG.BASE_URL}${token ? `?token=${token}` : ''}`;
      
      this.ws = new WebSocket(wsUrl);

      this.ws.onopen = this.handleOpen.bind(this);
      this.ws.onmessage = this.handleMessage.bind(this);
      this.ws.onclose = this.handleClose.bind(this);
      this.ws.onerror = this.handleError.bind(this);
    } catch (error) {
      console.error('WebSocket connection error:', error);
      this.isConnecting = false;
      this.scheduleReconnect();
    }
  }

  // Disconnect from WebSocket server
  disconnect(): void {
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }

    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }

    this.reconnectAttempts = 0;
    this.isConnecting = false;
  }

  // Subscribe to WebSocket events
  on<K extends keyof WebSocketEvents>(
    event: K,
    callback: (data: WebSocketEvents[K]) => void
  ): () => void {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, new Set());
    }

    this.eventListeners.get(event)!.add(callback);

    // Return unsubscribe function
    return () => {
      const listeners = this.eventListeners.get(event);
      if (listeners) {
        listeners.delete(callback);
      }
    };
  }

  // Send message to WebSocket server
  send(event: string, data: any): void {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({ event, data }));
    } else {
      console.warn('WebSocket is not connected. Message not sent:', { event, data });
    }
  }

  // Get connection status
  isConnected(): boolean {
    return this.ws?.readyState === WebSocket.OPEN;
  }

  // Private methods
  private handleOpen(): void {
    console.log('WebSocket connected');
    this.isConnecting = false;
    this.reconnectAttempts = 0;
    
    // Clear any pending reconnect timer
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private handleMessage(event: MessageEvent): void {
    try {
      const message = JSON.parse(event.data);
      const { event: eventType, data } = message;

      // Emit event to listeners
      const listeners = this.eventListeners.get(eventType);
      if (listeners) {
        listeners.forEach((callback) => {
          try {
            callback(data);
          } catch (error) {
            console.error('Error in WebSocket event callback:', error);
          }
        });
      }
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  }

  private handleClose(event: CloseEvent): void {
    console.log('WebSocket disconnected:', event.code, event.reason);
    this.ws = null;
    this.isConnecting = false;

    // Schedule reconnect if not a normal closure
    if (event.code !== 1000) {
      this.scheduleReconnect();
    }
  }

  private handleError(error: Event): void {
    console.error('WebSocket error:', error);
    this.isConnecting = false;
  }

  private scheduleReconnect(): void {
    if (this.reconnectAttempts >= WS_CONFIG.MAX_RECONNECT_ATTEMPTS) {
      console.error('Max WebSocket reconnection attempts reached');
      return;
    }

    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
    }

    const delay = WS_CONFIG.RECONNECT_INTERVAL * Math.pow(2, this.reconnectAttempts);
    this.reconnectAttempts++;

    console.log(`Scheduling WebSocket reconnect in ${delay}ms (attempt ${this.reconnectAttempts})`);

    this.reconnectTimer = setTimeout(() => {
      this.connect();
    }, delay);
  }

  private getAuthToken(): string | null {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
    }
    return null;
  }
}

// Export singleton instance
export const wsManager = new WebSocketManager();

// Export convenience functions
export const subscribeToTransactionUpdates = (
  callback: (transaction: Transaction) => void
) => {
  return wsManager.on('transaction_update', callback);
};

export const subscribeToNewAlerts = (
  callback: (alert: SecurityAlert) => void
) => {
  return wsManager.on('new_alert', callback);
};

export const subscribeToSystemStatus = (
  callback: (status: SystemMonitoring) => void
) => {
  return wsManager.on('system_status', callback);
};

export const subscribeToRiskUpdates = (
  callback: (risk: { riskLevel: number; riskCategory: string }) => void
) => {
  return wsManager.on('risk_update', callback);
};