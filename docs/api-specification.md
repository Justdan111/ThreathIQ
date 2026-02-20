# ThreatIQ MVP API Specification

Base URL: `/api/v1`

All responses follow the format:

```json
{
  "success": true,
  "data": { ... },
  "message": "optional message"
}
```

Error responses:

```json
{
  "success": false,
  "error": "Error description",
  "code": "ERROR_CODE"
}
```

---

## 1. Authentication

### POST /api/v1/auth/register

Create a new user account.

**Request Body**

| Field           | Type   | Required | Description                                  |
|-----------------|--------|----------|----------------------------------------------|
| name            | string | yes      | Full name                                    |
| email           | string | yes      | Email address (unique)                       |
| password        | string | yes      | Min 12 chars, uppercase, number, special     |
| confirmPassword | string | yes      | Must match password                          |
| organization    | string | no       | Community or organization name               |
| role            | string | yes      | One of: resident, leader, analyst, admin     |

**Response (201)**

```json
{
  "success": true,
  "data": {
    "id": "usr_abc123",
    "name": "Adamu Musa",
    "email": "adamu@example.com",
    "role": "resident",
    "organization": "Wuse Community Watch",
    "createdAt": "2026-02-20T10:00:00Z"
  },
  "message": "Account created. Please verify your email."
}
```

**Errors**

| Code               | Status | Description               |
|--------------------|--------|---------------------------|
| EMAIL_EXISTS       | 409    | Email already registered  |
| VALIDATION_ERROR   | 422    | Invalid or missing fields |

---

### POST /api/v1/auth/login

Authenticate and receive a session token.

**Request Body**

| Field    | Type   | Required | Description    |
|----------|--------|----------|----------------|
| email    | string | yes      | Email address  |
| password | string | yes      | Password       |

**Response (200)**

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "expiresAt": "2026-02-21T10:00:00Z",
    "user": {
      "id": "usr_abc123",
      "name": "Adamu Musa",
      "email": "adamu@example.com",
      "role": "resident"
    }
  }
}
```

**Errors**

| Code               | Status | Description                  |
|--------------------|--------|------------------------------|
| INVALID_CREDENTIALS| 401    | Wrong email or password      |
| ACCOUNT_LOCKED     | 403    | Too many failed attempts     |

---

### POST /api/v1/auth/forgot-password

Request a password reset link.

**Request Body**

| Field | Type   | Required | Description   |
|-------|--------|----------|---------------|
| email | string | yes      | Email address |

**Response (200)**

```json
{
  "success": true,
  "message": "If that email exists, a reset link has been sent."
}
```

---

### POST /api/v1/auth/reset-password

Reset the password using a token (from email link).

**Request Body**

| Field       | Type   | Required | Description            |
|-------------|--------|----------|------------------------|
| token       | string | yes      | Reset token from email |
| newPassword | string | yes      | New password           |

**Response (200)**

```json
{
  "success": true,
  "message": "Password has been reset."
}
```

---

## 2. Incidents

All incident endpoints require authentication. Include token in header:

```
Authorization: Bearer <token>
```

### POST /api/v1/incidents

Create a new incident report.

**Request Body**

| Field       | Type   | Required | Description                                                         |
|-------------|--------|----------|---------------------------------------------------------------------|
| category    | string | yes      | One of: accident, suspicious, assault, theft, hazard, closure, natural, other |
| title       | string | yes      | Short title (max 120 chars)                                         |
| description | string | yes      | Detailed description                                                |
| location    | string | yes      | Location text (e.g. "Wuse Market, Abuja")                           |
| severity    | string | yes      | One of: low, medium, high, critical                                 |
| evidence    | file[] | no       | Optional uploaded files (images, logs). Max 50MB total               |

**Response (201)**

```json
{
  "success": true,
  "data": {
    "id": "inc_89450",
    "category": "accident",
    "title": "Traffic Accident on Ahmadu Bello Way",
    "description": "Multi-vehicle collision near Wuse Market...",
    "location": "Wuse Market, Abuja",
    "severity": "critical",
    "status": "pending",
    "reportedBy": "usr_abc123",
    "createdAt": "2026-02-20T14:30:00Z",
    "confidence": null,
    "verified": false
  },
  "message": "Incident reported successfully."
}
```

**Errors**

| Code             | Status | Description               |
|------------------|--------|---------------------------|
| VALIDATION_ERROR | 422    | Invalid or missing fields |
| UNAUTHORIZED     | 401    | Not authenticated         |

---

### GET /api/v1/incidents

List incidents with optional filters.

**Query Parameters**

| Param    | Type   | Default | Description                                |
|----------|--------|---------|--------------------------------------------|
| page     | int    | 1       | Page number                                |
| limit    | int    | 20      | Items per page (max 100)                   |
| severity | string | all     | Filter: critical, high, medium, low        |
| category | string | all     | Filter by category                         |
| search   | string |         | Search title and description               |
| sort     | string | newest  | Sort: newest, oldest, severity             |

**Response (200)**

```json
{
  "success": true,
  "data": {
    "incidents": [
      {
        "id": "inc_89450",
        "title": "Traffic Accident on Ahmadu Bello Way",
        "description": "Multi-vehicle collision near Wuse Market...",
        "location": "Wuse Market, Abuja",
        "severity": "critical",
        "category": "accident",
        "status": "pending",
        "verified": false,
        "reports": 3,
        "confidence": "72%",
        "createdAt": "2026-02-20T14:30:00Z"
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 247,
      "totalPages": 13
    }
  }
}
```

---

### GET /api/v1/incidents/:id

Get a single incident by ID.

**Response (200)**

```json
{
  "success": true,
  "data": {
    "id": "inc_89450",
    "title": "Traffic Accident on Ahmadu Bello Way",
    "description": "Multi-vehicle collision near Wuse Market. Emergency services on scene.",
    "location": "Wuse Market, Abuja",
    "severity": "critical",
    "category": "accident",
    "status": "pending",
    "verified": false,
    "reports": 3,
    "confidence": "72%",
    "reportedBy": {
      "id": "usr_abc123",
      "name": "Adamu Musa",
      "role": "resident"
    },
    "evidence": [],
    "createdAt": "2026-02-20T14:30:00Z",
    "updatedAt": "2026-02-20T14:35:00Z"
  }
}
```

**Errors**

| Code       | Status | Description          |
|------------|--------|----------------------|
| NOT_FOUND  | 404    | Incident not found   |

---

## 3. Dashboard

### GET /api/v1/dashboard/stats

Get KPI data for the dashboard overview.

**Response (200)**

```json
{
  "success": true,
  "data": {
    "activeIncidents": {
      "value": 247,
      "change": "+12%",
      "changeText": "vs last week",
      "trend": "up"
    },
    "highRiskAreas": {
      "value": 18,
      "change": "-5%",
      "changeText": "avg resolution",
      "trend": "down"
    },
    "totalIncidents": {
      "value": 8920,
      "change": "+8%",
      "changeText": "this month",
      "trend": "up"
    },
    "communityReports": {
      "value": 312,
      "change": "+15%",
      "changeText": "verified",
      "trend": "up"
    },
    "recentIncidents": [
      {
        "id": "inc_89450",
        "severity": "critical",
        "title": "Traffic Accident - Abuja",
        "description": "Multi-vehicle collision on Ahmadu Bello Way...",
        "time": "2m ago"
      }
    ]
  }
}
```

---

## Summary Table

| Method | Endpoint                    | Auth | Description            |
|--------|-----------------------------|------|------------------------|
| POST   | /api/v1/auth/register       | No   | Create account         |
| POST   | /api/v1/auth/login          | No   | Login                  |
| POST   | /api/v1/auth/forgot-password| No   | Request password reset |
| POST   | /api/v1/auth/reset-password | No   | Reset password         |
| POST   | /api/v1/incidents           | Yes  | Report incident        |
| GET    | /api/v1/incidents           | Yes  | List incidents         |
| GET    | /api/v1/incidents/:id       | Yes  | Get single incident    |
| GET    | /api/v1/dashboard/stats     | Yes  | Dashboard KPI data     |

---

## Notes

- All times are ISO 8601 UTC.
- Token format: JWT with HMAC-SHA256 or RS256.
- Rate limiting: 60 requests/min per user on auth endpoints, 120/min on data endpoints.
- File uploads: multipart/form-data, max 50MB total per request.
- Pagination: cursor-based or offset-based (offset used above for simplicity).
