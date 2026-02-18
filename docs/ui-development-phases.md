# ThreatIQ UI Development Phases

This document tracks the UI development phases for ThreatIQ. Use the checkboxes to mark progress as you complete tasks. To update progress, edit this file and change `[ ]` to `[x]` for completed items.

---

## ✅ PHASE 1 — Launchable MVP (Ship This First)
This version proves the idea works. Build and ship these core features first so users can sign up, report, and view incidents.

**Goal**
- [ ] Users can create an account
- [ ] Users can log in
- [ ] Users can view incidents
- [ ] Users can report incidents
- [ ] Deploy MVP (basic hosting / deployment)

**Pages to build**
- Landing Page
  - [ ] Hero section
  - [ ] Short explanation
  - [ ] CTA → Sign up
  - [ ] Feature highlights
  - [ ] Footer
- Authentication
  - [ ] Login page
  - [ ] Register page
  - [ ] Forgot password page
  - [ ] Reusable UI pieces: inputs, validation states, error display, loading button state
- Dashboard (Core)
  - [ ] Minimal overview
  - [ ] Stats cards (total incidents, active incidents)
  - [ ] Recent incident list
  - [ ] Quick “Report Incident” button
- Incident Feed
  - [ ] List of all incidents
  - [ ] Incident card component (severity badge, timestamp, location)
  - [ ] Basic filtering (by severity, time)
- Report Incident Page (MVP)
  - [ ] Incident type dropdown
  - [ ] Location input (text)
  - [ ] Description textarea
  - [ ] Severity selector
  - [ ] Submit button
  - Note: No map integration for Phase 1 — keep backend minimal.

**Design system (basic components for reuse)**
- [ ] Button
- [ ] Card
- [ ] Badge
- [ ] Input
- [ ] Modal
- [ ] Spinner
- [ ] Alert banner

**Backend (Phase 1 minimum APIs)**
- [ ] Auth (register, login)
- [ ] Create incident API
- [ ] Get incidents API
- [ ] Get dashboard stats API

---

## 🟡 PHASE 2 — Product Expansion
Add features to make the product feel powerful and collaborative.

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

## 🔵 PHASE 3 — Advanced Platform Features
Enterprise and workflow features, moderation, and real-time capabilities.

- [ ] Role-based dashboards
- [ ] Admin moderation tools
- [ ] Incident verification workflow
- [ ] Evidence uploads (images, video)
- [ ] Location subscriptions
- [ ] Dark/light mode toggle
- [ ] Realtime updates (WebSockets)

---

## 🟣 PHASE 4 — Intelligence Level Features
AI & advanced analytics that elevate ThreatIQ to an intelligence platform.

- [ ] AI risk scoring
- [ ] Pattern detection
- [ ] Predictive alerts
- [ ] Smart clustering and recommendation engine

---

## How to use this file
- Edit the file and mark tasks complete by changing `[ ]` to `[x]`.
- Keep Phase 1 focused and small — ship fast, iterate often.
- When Phase 1 is fully checked and deployed, move items from Phase 2 into your sprint planning.

If you want, I can:
- Create GitHub issues for each Phase 1 task
- Initialize a simple project board and populate it from these checkboxes
- Add a `CONTRIBUTING.md` and developer quickstart

File path: `docs/ui-development-phases.md`
