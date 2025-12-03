# Backend Integration Guide

This document provides a comprehensive guide for integrating the Fraud Detection Dashboard with a backend API.

## 📋 Table of Contents

1. [Overview](#overview)
2. [Project Structure](#project-structure)
3. [API Integration Points](#api-integration-points)
4. [Authentication Flow](#authentication-flow)
5. [WebSocket Integration](#websocket-integration)
6. [Environment Configuration](#environment-configuration)
7. [Data Models](#data-models)
8. [API Endpoints](#api-endpoints)
9. [Implementation Steps](#implementation-steps)
10. [Testing](#testing)

## 🎯 Overview

The frontend is designed to be backend-agnostic and uses a service layer pattern for easy API integration. All API calls are currently mocked and can be replaced with real backend endpoints by updating the service methods in `lib/api.ts`.

## 📁 Project Structure

```
lib/
├── api.ts              # API service layer with mock implementations
├── auth.ts             # Authentication management
├── config.ts           # Configuration constants and endpoints
├── types.ts            # TypeScript type definitions
└── websocket.ts        # WebSocket management for real-time updates
```

## 🔗 API Integration Points

### 1. Authentication
- **Login**: `POST /auth/login`
- **Register**: `POST /auth/register`
- **Logout**: `POST /auth/logout`
- **Token Refresh**: `POST /auth/refresh`

### 2. Dashboard
- **Stats**: `GET /dashboard/stats`
- **Overview Data**: `GET /dashboard/overview`

### 3. Transactions
- **List Transactions**: `GET /transactions`
- **Transaction Details**: `GET /transactions/:id`
- **Real-time Feed**: WebSocket `/transactions/real-time`

### 4. Security Alerts
- **List Alerts**: `GET /alerts`
- **Alert Details**: `GET /alerts/:id`
- **Update Alert Status**: `PUT /alerts/:id/status`

### 5. Reports
- **List Reports**: `GET /reports`
- **Generate Report**: `POST /reports/generate`
- **Download Report**: `GET /reports/:id/download`

### 6. Settings
- **Get Security Settings**: `GET /settings/security`
- **Update Security Settings**: `PUT /settings/security`

### 7. Monitoring
- **System Status**: `GET /monitoring/system`
- **Risk Assessment**: `GET /monitoring/risk`
- **Location Activity**: `GET /monitoring/locations`

## 🔐 Authentication Flow

### JWT Token Management
The frontend uses JWT tokens for authentication:

1. **Login/Register**: Receives JWT token and refresh token
2. **Token Storage**: Stored in localStorage
3. **API Requests**: Token included in Authorization header
4. **Token Refresh**: Automatic refresh when token expires

### Implementation
```typescript
// Current mock implementation in lib/api.ts
async login(credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> {
  // TODO: Replace with actual API call
  return this.request<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}
```

## 🔄 WebSocket Integration

### Real-time Updates
The frontend supports real-time updates via WebSocket for:

- **Transaction Updates**: New transactions and status changes
- **Security Alerts**: New alerts and status updates
- **System Monitoring**: Live system metrics
- **Risk Assessment**: Real-time risk level changes

### WebSocket Events
```typescript
// Event types defined in lib/websocket.ts
export const WS_EVENTS = {
  TRANSACTION_UPDATE: 'transaction_update',
  NEW_ALERT: 'new_alert',
  SYSTEM_STATUS: 'system_status',
  RISK_UPDATE: 'risk_update',
};
```

## ⚙️ Environment Configuration

### Required Environment Variables
```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000/api
NEXT_PUBLIC_WS_BASE_URL=ws://localhost:8000/ws

# Environment
NODE_ENV=development
```

### Backend Environment Variables (Reference)
```bash
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/fraud_detection
REDIS_URL=redis://localhost:6379

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-super-secret-refresh-key
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# External Services
FRAUD_DETECTION_API_KEY=your-fraud-detection-service-key
GEOLOCATION_API_KEY=your-geolocation-service-key
```

## 📊 Data Models

### Core Types
All TypeScript interfaces are defined in `lib/types.ts`:

- **User**: User account information
- **Transaction**: Financial transaction data
- **SecurityAlert**: Security alert information
- **DashboardStats**: Dashboard statistics
- **RiskAssessment**: Risk analysis data
- **Report**: Generated report metadata

### Example Transaction Model
```typescript
interface Transaction {
  id: string;
  userId: string;
  userName: string;
  amount: string;
  location: string;
  platform: 'mobile' | 'web' | 'atm';
  type: 'transfer' | 'withdrawal' | 'payment';
  status: 'approved' | 'pending' | 'suspicious' | 'blocked' | 'flagged';
  riskScore?: number;
  timestamp: string;
  metadata?: {
    deviceId?: string;
    ipAddress?: string;
    userAgent?: string;
  };
}
```

## 🛠 API Endpoints

### Authentication Endpoints
```
POST   /auth/login
POST   /auth/register
POST   /auth/logout
POST   /auth/refresh
GET    /auth/profile
```

### Dashboard Endpoints
```
GET    /dashboard/stats
GET    /dashboard/overview
```

### Transaction Endpoints
```
GET    /transactions
GET    /transactions/:id
POST   /transactions/export
```

### Alert Endpoints
```
GET    /alerts
GET    /alerts/:id
PUT    /alerts/:id/status
DELETE /alerts/:id/dismiss
```

### Report Endpoints
```
GET    /reports
POST   /reports/generate
GET    /reports/:id/download
DELETE /reports/:id
```

### Settings Endpoints
```
GET    /settings/security
PUT    /settings/security
```

### Monitoring Endpoints
```
GET    /monitoring/system
GET    /monitoring/risk
GET    /monitoring/locations
```

### Analytics Endpoints
```
GET    /analytics/prevented-losses
GET    /analytics/fraud-trends
```

## 🚀 Implementation Steps

### Step 1: Set Up Backend Environment
1. Copy `.env.example` to `.env` and configure your values
2. Set up your database (PostgreSQL recommended)
3. Set up Redis for session management and caching

### Step 2: Replace Mock API Calls
1. Open `lib/api.ts`
2. Replace mock implementations with actual API calls
3. Update error handling as needed

Example:
```typescript
// Before (Mock)
async login(credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockResponse);
    }, 1000);
  });
}

// After (Real API)
async login(credentials: LoginRequest): Promise<ApiResponse<AuthResponse>> {
  return this.request<AuthResponse>(API_ENDPOINTS.AUTH.LOGIN, {
    method: 'POST',
    body: JSON.stringify(credentials),
  });
}
```

### Step 3: Implement WebSocket Server
1. Set up WebSocket server at the configured URL
2. Implement authentication for WebSocket connections
3. Emit events for real-time updates

### Step 4: Update Configuration
1. Update `NEXT_PUBLIC_API_BASE_URL` in `.env.local`
2. Update `NEXT_PUBLIC_WS_BASE_URL` for WebSocket endpoint
3. Configure CORS settings on your backend

### Step 5: Test Integration
1. Test authentication flow
2. Verify API endpoints return correct data structure
3. Test WebSocket connections and events
4. Validate error handling

## 🧪 Testing

### API Testing Checklist
- [ ] Authentication endpoints work correctly
- [ ] JWT tokens are properly validated
- [ ] All CRUD operations function as expected
- [ ] Pagination works for list endpoints
- [ ] Error responses follow the expected format
- [ ] WebSocket connections establish successfully
- [ ] Real-time events are properly emitted

### Frontend Testing
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests (if implemented)
npm test
```

### API Response Format
All API responses should follow this format:
```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure your backend allows requests from the frontend domain
   - Configure proper CORS headers

2. **Authentication Issues**
   - Verify JWT token format and expiration
   - Check token storage and retrieval logic

3. **WebSocket Connection Issues**
   - Verify WebSocket URL configuration
   - Check authentication for WebSocket connections

4. **API Response Format**
   - Ensure backend responses match expected TypeScript interfaces
   - Validate error response format

### Debug Mode
Set `NODE_ENV=development` to enable detailed logging and error messages.

## 📞 Support

For questions or issues with backend integration:
1. Check the TypeScript interfaces in `lib/types.ts`
2. Review the API service methods in `lib/api.ts`
3. Verify environment configuration in `.env.local`
4. Test with the provided mock data first

## 🔄 Migration from Mock to Real API

The transition from mock to real API should be seamless:
1. All components use the service layer
2. No component directly calls APIs
3. Type safety is maintained throughout
4. Error handling is centralized

Simply update the service methods in `lib/api.ts` and the frontend will automatically use the real backend!