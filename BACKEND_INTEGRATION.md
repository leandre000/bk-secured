# Backend Integration Guide

This document provides comprehensive guidance for backend developers integrating with the BK Secured frontend application.

## Table of Contents

1. [Overview](#overview)
2. [API Configuration](#api-configuration)
3. [Authentication](#authentication)
4. [API Endpoints](#api-endpoints)
5. [Data Types](#data-types)
6. [Error Handling](#error-handling)
7. [WebSocket Integration](#websocket-integration)
8. [Testing](#testing)

## Overview

The frontend is built with Next.js 16 and TypeScript. All API communication is handled through the `lib/api.ts` file, which currently uses mock data. Your task is to replace the mock implementations with actual API calls.

### Key Files

- `lib/config.ts` - API endpoints and configuration
- `lib/api.ts` - API client with all methods (currently mocked)
- `lib/types.ts` - TypeScript type definitions (your API should match these)
- `lib/websocket.ts` - WebSocket client for real-time updates

## API Configuration

### Environment Variables

Set these in your `.env.local` file:

```env
NEXT_PUBLIC_API_BASE_URL=https://your-api-domain.com/api
NEXT_PUBLIC_WS_BASE_URL=wss://your-api-domain.com/ws
```

### Base URL

Default: `http://localhost:8000/api` (development)

### Request Format

All requests should:
- Use JSON for request/response bodies
- Include `Content-Type: application/json` header
- Include `Authorization: Bearer <token>` header for authenticated requests

### Response Format

All API responses should follow this structure:

```typescript
{
  "success": boolean,
  "data": any,
  "message"?: string,  // Optional success message
  "error"?: string     // Optional error message
}
```

## Authentication

### Login

**Endpoint:** `POST /auth/login`

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "1",
      "email": "user@example.com",
      "firstName": "John",
      "lastName": "Doe",
      "role": "admin",
      "createdAt": "2024-01-01T00:00:00.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "error": "Invalid email or password"
}
```

### Register

**Endpoint:** `POST /auth/register`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** Same as login response

### Logout

**Endpoint:** `POST /auth/logout`

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": null
}
```

### Token Refresh

**Endpoint:** `POST /auth/refresh`

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "token": "new-access-token",
    "refreshToken": "new-refresh-token"
  }
}
```

## API Endpoints

### Dashboard

#### Get Statistics

**Endpoint:** `GET /dashboard/stats`

**Headers:** `Authorization: Bearer <token>`

**Response:**
```json
{
  "success": true,
  "data": {
    "totalTransactions": 2847592,
    "fraudDetected": 1247,
    "preventedLosses": "$2,847,592",
    "detectionRate": "99.7%"
  }
}
```

### Transactions

#### List Transactions

**Endpoint:** `GET /transactions`

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 20)
- `status` (string, optional: "approved" | "pending" | "suspicious" | "blocked" | "flagged")
- `type` (string, optional: "transfer" | "withdrawal" | "payment" | "deposit")
- `dateFrom` (string, ISO 8601)
- `dateTo` (string, ISO 8601)
- `location` (string)
- `platform` (string: "mobile" | "web" | "atm")

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "userId": "user1",
      "userName": "John Doe",
      "amount": "$25,000.00",
      "location": "Kigali, Rwanda",
      "platform": "mobile",
      "type": "transfer",
      "status": "approved",
      "riskScore": 15,
      "timestamp": "2024-01-15T10:30:00.000Z",
      "metadata": {
        "deviceId": "device123",
        "ipAddress": "192.168.1.1"
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

#### Get Transaction Details

**Endpoint:** `GET /transactions/:id`

**Response:** Single transaction object (same structure as in list)

### Alerts

#### List Alerts

**Endpoint:** `GET /alerts`

**Query Parameters:**
- `page` (number, default: 1)
- `limit` (number, default: 20)
- `severity` (string: "low" | "medium" | "high" | "critical")
- `status` (string: "investigating" | "reviewing" | "resolved" | "blocked")

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "title": "Suspicious Login Pattern",
      "description": "Multiple failed login attempts from new device",
      "severity": "high",
      "status": "investigating",
      "userId": "user1",
      "accountNumber": "JD-****1234",
      "timestamp": "2024-01-15T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 50,
    "totalPages": 3
  }
}
```

#### Update Alert Status

**Endpoint:** `PUT /alerts/:id/status`

**Request Body:**
```json
{
  "status": "resolved"
}
```

**Response:** Updated alert object

### Settings

#### Get Security Settings

**Endpoint:** `GET /settings/security`

**Response:**
```json
{
  "success": true,
  "data": {
    "twoFactorAuth": true,
    "securityAlerts": true,
    "realTimeMonitoring": true,
    "autoBlockSuspicious": false
  }
}
```

#### Update Security Settings

**Endpoint:** `PUT /settings/security`

**Request Body:** Same structure as response above

**Response:** Updated settings object

### Monitoring

#### Get System Status

**Endpoint:** `GET /monitoring/system`

**Response:**
```json
{
  "success": true,
  "data": {
    "systemActive": true,
    "transactionsPerSecond": 254,
    "totalProcessed": 16283,
    "secureTransactions": 16283,
    "flaggedTransactions": 72,
    "successRate": 99.93
  }
}
```

#### Get Risk Assessment

**Endpoint:** `GET /monitoring/risk`

**Response:**
```json
{
  "success": true,
  "data": {
    "overallRiskLevel": 82,
    "riskCategory": "medium",
    "securityFeatures": {
      "authentication": {
        "status": "active",
        "enabled": true
      },
      "behaviorAnalysis": {
        "status": "monitoring",
        "enabled": true
      },
      "deviceFingerprinting": {
        "status": "enabled",
        "enabled": true
      }
    }
  }
}
```

## Data Types

All data types are defined in `lib/types.ts`. Your API responses must match these TypeScript interfaces exactly. Key points:

- **Dates:** Always use ISO 8601 format (`2024-01-15T10:30:00.000Z`)
- **Amounts:** Format as strings with currency symbol (`"$1,234.56"`)
- **Enums:** Use exact string values (e.g., `"approved"` not `"APPROVED"`)
- **IDs:** Use string format (UUIDs recommended)

## Error Handling

### HTTP Status Codes

- `200` - Success
- `400` - Bad Request (validation errors)
- `401` - Unauthorized (invalid/expired token)
- `403` - Forbidden (insufficient permissions)
- `404` - Not Found
- `500` - Internal Server Error

### Error Response Format

```json
{
  "success": false,
  "error": "Error message here",
  "data": null
}
```

### Frontend Error Handling

The frontend automatically:
- Redirects to login on 401 errors
- Displays error messages to users
- Retries failed requests (up to 3 times)

## WebSocket Integration

### Connection

**URL:** `wss://your-api-domain.com/ws?token=<jwt_token>`

### Events

The frontend listens for these events:

1. **transaction_update**
   ```json
   {
     "id": "1",
     "status": "approved",
     ...
   }
   ```

2. **new_alert**
   ```json
   {
     "id": "1",
     "title": "New Alert",
     "severity": "high",
     ...
   }
   ```

3. **system_status**
   ```json
   {
     "systemActive": true,
     "transactionsPerSecond": 254,
     ...
   }
   ```

4. **risk_update**
   ```json
   {
     "overallRiskLevel": 82,
     "riskCategory": "medium",
     ...
   }
   ```

### Implementation

Emit these events when corresponding data changes occur on the backend.

## Testing

### Integration Steps

1. **Set Environment Variables**
   ```bash
   NEXT_PUBLIC_API_BASE_URL=https://your-api.com/api
   NEXT_PUBLIC_WS_BASE_URL=wss://your-api.com/ws
   ```

2. **Update API Client**
   - Open `lib/api.ts`
   - Find methods marked with `TODO`
   - Uncomment actual API calls
   - Remove mock implementations

3. **Test Each Endpoint**
   - Start with authentication
   - Test each endpoint individually
   - Verify response formats match types

4. **Test Error Handling**
   - Test 401 (unauthorized)
   - Test 404 (not found)
   - Test 500 (server error)

### Mock Data Removal

Once backend is ready, remove all mock implementations in `lib/api.ts`. Look for comments like:
```typescript
// Mock implementation - REMOVE when backend is ready
```

## Support

For questions or issues:
1. Check `lib/config.ts` for endpoint documentation
2. Check `lib/types.ts` for data structure requirements
3. Review this guide for API specifications

---

**Last Updated:** 2024-01-15
**Frontend Version:** Next.js 16.0.4
