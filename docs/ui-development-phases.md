# ThreatIQ UI Development Phases

Track progress by changing `[ ]` to `[x]` as you complete each item.

---

## PHASE 1 -- Launchable MVP (Ship This First)

This version proves the idea works. Users can sign up, log in, view incidents, and report incidents.

### Goal
- [ ] Users can create an account (backend wired)
- [ ] Users can log in (backend wired)
- [ ] Users can view incidents (backend wired)
- [ ] Users can report incidents (backend wired)
- [ ] Deploy MVP

### Pages

**Landing Page**
- [x] Hero section
- [x] Short explanation
- [x] CTA -> Sign up
- [x] Feature highlights
- [x] Footer

**Authentication**
- [x] Login page
- [x] Register page
- [x] Forgot password page
- [ ] Input validation states and error display
- [ ] Loading button state

**Dashboard (Core)**
- [x] Minimal overview layout
- [x] Stats cards (active incidents, total incidents, community reports, high-risk areas)
- [x] Recent incident list (live feed sidebar)
- [x] Quick "Report Incident" button

**Incident Feed**
- [x] List of all incidents (grid + list view)
- [x] Incident card component (severity badge, timestamp, location, confidence)
- [x] Basic filtering (by severity, text search)

**Report Incident Page**
- [x] Incident type dropdown
- [x] Location input (text)
- [x] Description textarea
- [x] Severity selector (slider)
- [x] Submit button
- Note: No map integration for Phase 1.

### Design System (basic reusable components)
- [x] Button
- [x] Card (glass-card pattern)
- [x] Input
- [x] Select
- [x] Checkbox
- [ ] Badge (standalone)
- [ ] Modal
- [ ] Spinner / Loading indicator
- [ ] Alert banner / Toast

### Backend (Phase 1 minimum APIs)
- [ ] POST /api/auth/register
- [ ] POST /api/auth/login
- [ ] POST /api/auth/forgot-password
- [ ] POST /api/incidents (create incident)
- [ ] GET  /api/incidents (list incidents with filters)
- [ ] GET  /api/incidents/:id (single incident)
- [ ] GET  /api/dashboard/stats (KPI data)

### Phase 1 Status
- UI pages: DONE (all built, Nigeria-localized)
- Non-MVP pages: hidden behind "Coming Soon" placeholder
- Sidebar: trimmed to MVP items only (Dashboard, Threat Feed, Report Incident)
- Remaining: backend APIs, input validation, loading states, deploy

---

## PHASE 2 -- Product Expansion

- Map Intelligence Page
  - [ ] Map markers
  - [ ] Location picking
  - [ ] Heatmap view
- Notifications
  - [ ] Alert feed
  - [ ] Unread states
- Community Page
  - [ ] Confirm incidents
  - [ ] Comments
  - [ ] Contributor ranking
- Analytics
  - [ ] Charts and trends
  - [ ] Severity distribution

---

## PHASE 3 -- Advanced Platform Features

- [ ] Role-based dashboards
- [ ] Admin moderation tools
- [ ] Incident verification workflow
- [ ] Evidence uploads (images, video)
- [ ] Location subscriptions
- [ ] Dark/light mode toggle
- [ ] Realtime updates (WebSockets)

---

## PHASE 4 -- Intelligence Level Features

- [ ] AI risk scoring
- [ ] Pattern detection
- [ ] Predictive alerts
- [ ] Smart clustering and recommendation engine
