# HOBI - Product Requirements Document

## Original Problem Statement
Build a professional website for HOBI - a hyperlocal sports community infrastructure platform that connects players, venues, and communities in a structured ecosystem.

## Project Overview
- **Platform**: Hyperlocal sports community infrastructure
- **Goal**: Connect players with venues, facilitate game discovery, and build structured sports communities
- **Target Markets**: Gurgaon, Delhi, Noida, Mumbai, Pune, Hyderabad
- **Sports Covered**: Badminton, Football, Squash, Tennis, Table Tennis, Padel, Pickleball, Cricket

## User Personas
1. **Players**: Individuals looking to discover games, meet players, and build consistent sports routines
2. **Venues**: Sports facilities seeking better utilization, visibility, and predictable bookings
3. **Investors**: Stakeholders evaluating market opportunity and platform potential

## Design System
### Brand Colors
- Primary: #E76F51 (Warm Terracotta)
- Secondary: #1F2A44 (Deep Navy)
- Accent: #F4A261 (Soft Golden Yellow)
- Background: #F9F6F1 (Warm off-white) + White sections

### Typography
- Headlines: Sora (Bold, 400-800 weight)
- Body: Inter (Regular-Bold, 400-700 weight)

### Design Principles
- Professional & investor-friendly tone
- Clean, structured layouts
- Generous whitespace
- Rounded corners (12-16px)
- Smooth transitions & hover effects
- No emoji icons (lucide-react only)

## What's Been Implemented (Feb 17, 2025)

### ✅ Complete Frontend (Mock Data)

#### 1. Navigation & Layout
- Responsive navigation with mobile menu
- Professional footer with social links
- Smooth scroll behavior
- Clean routing structure

#### 2. Home Page
**Sections Completed:**
- Hero Section: "Find Your Hobby, Find Your People"
- Problem Section: 5 key pain points explained
- Solution Section: 4-point value proposition
- Who Benefits: Players & Venues benefits
- Join Early Access Form (Name, Mobile, Email, Primary Sport)
- Bring HOBI to My City Form (City + Sport selection)

#### 3. How It Works Page
- 4-step user journey (Discover → Join → Play → Build Community)
- Visual flow with step-by-step breakdown
- Complete journey timeline with 8 milestones
- CTA to Play Now and Early Access

#### 4. Play Now Page (Interactive Discovery Flow)
**Features:**
- City selection (6 cities)
- Sport selection (8 sports)
- Date picker (calendar component)
- Time slot selection (15 slots: 6AM-12PM, 4PM-11PM)
- Distance radius slider with 5 ranges
- Real-time venue filtering based on distance
- Results display with venue cards showing:
  - Venue name
  - Area
  - Distance in KM
  - View Details button

**Filtering Logic (Static):**
- <3 KM: Shows 2 venues
- 3-5 KM: Shows 4 venues
- 5-7 KM: Shows 6 venues
- 7-10 KM: Shows 8 venues
- >10 KM: Shows all 10 venues

#### 5. Early Access Page
- Full form with validation
- Success state with confirmation
- Navigation back to home or Play Now
- Benefits showcase (3 cards)

### Data Structure
- Complete venue database from Excel file
- 6 cities × 8 sports × 10 venues each = 480 total venues
- Each venue includes: name, area, distance (in KM)
- Organized by City → Sport → Venues array

### Components Built
- Navigation (responsive with mobile menu)
- Footer (links, contact, social)
- Home page (all sections)
- How It Works page
- Play Now page (full discovery flow)
- Early Access page (form + success state)

### UI Components Used (Shadcn)
- Button
- Input
- Label
- Select
- Calendar
- Popover
- Slider
- Toast/Sonner

## Core Requirements (Static)

### Must-Have Features
1. ✅ Professional landing page
2. ✅ Clear value proposition
3. ✅ Problem-solution narrative
4. ✅ User journey explanation
5. ✅ Interactive Play Now discovery
6. ✅ Lead capture forms
7. ✅ Responsive design
8. ✅ Professional design system

### Form Functionality (Currently Frontend Only)
- Forms work with mock data
- Toast notifications on submission
- Basic validation (required fields, email format, mobile format)
- Success states
- **No backend integration yet**

## Next Tasks (Prioritized Backlog)

### P0 - Critical (Next Phase)
1. **Backend Development**
   - MongoDB schema for form submissions
   - API endpoints for Early Access form
   - API endpoints for City Vote form
   - Form validation on backend
   - Email confirmation (optional)

2. **Testing & QA**
   - Cross-browser testing
   - Mobile responsiveness validation
   - Form submission testing
   - Navigation testing
   - Screenshot verification

### P1 - High Priority
1. **Analytics Integration**
   - Track form submissions
   - Track city votes
   - User journey tracking
   - Conversion metrics

2. **SEO Optimization**
   - Meta tags
   - Open Graph tags
   - Structured data
   - Sitemap

### P2 - Future Enhancements
1. **Enhanced Play Now**
   - Real venue availability
   - Booking integration
   - User accounts
   - Saved searches

2. **Community Features**
   - Player profiles
   - Match scheduling
   - Payment integration
   - Reviews & ratings

3. **Venue Management**
   - Venue dashboard
   - Booking management
   - Analytics
   - Revenue tracking

## Technical Architecture

### Frontend (Completed)
- React 19
- React Router v7
- Shadcn UI components
- Tailwind CSS
- Date-fns for date handling
- Lucide React for icons

### Backend (To Be Implemented)
- FastAPI
- MongoDB with Motor (async)
- Pydantic models
- CORS middleware
- Environment variables

### Deployment
- Frontend: Port 3000
- Backend: Port 8001
- MongoDB: Local instance
- Preview URL: https://[job-id].stage-preview.emergentagent.com

## Data Model (Proposed)

### EarlyAccessSubmission
```
{
  id: UUID
  fullName: string
  mobile: string
  email: string
  primarySport: string
  timestamp: datetime
  source: "early_access_form"
}
```

### CityVote
```
{
  id: UUID
  city: string
  primarySport: string
  timestamp: datetime
  source: "city_vote_form"
}
```

## Success Metrics
- Form submissions (early access + city votes)
- Play Now engagement (filter usage, venue views)
- Page navigation patterns
- Time on site
- Mobile vs desktop usage

## Current Status
**Phase**: Frontend MVP Complete (Mock Data)
**Next Phase**: Backend Integration
**Timeline**: Frontend built Feb 17, 2025
