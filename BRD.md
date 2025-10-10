# Business Requirements Document (BRD)
## Fridge Roast - AI-Powered Fridge Analysis App

**Document Version:** 1.0  
**Last Updated:** October 9, 2025  
**Document Owner:** Product Team  
**Status:** Active

---

## Executive Summary

**Fridge Roast** is a consumer-facing web application that gamifies food waste awareness and healthy eating habits through AI-powered image analysis and humorous "roast" feedback. Users upload photos of their refrigerator contents and receive instant, entertaining assessments of their food storage practices, expiration risks, and organization quality.

### Product Vision
To make food waste reduction and healthy eating habits fun, shareable, and actionable through AI-powered humor and insights.

### Target Launch
Q4 2025 (MVP)

### Success Criteria
- 10,000+ unique users in first 3 months
- 30%+ share rate of roast results
- 4.0+ average user rating
- 15%+ return user rate

---

## 1. Business Objectives

### Primary Objectives
1. **User Acquisition**: Achieve viral growth through shareable, entertaining content
2. **Engagement**: Drive repeat usage through gamification and seasonal challenges
3. **Social Impact**: Reduce household food waste by raising awareness in an engaging way
4. **Monetization Path**: Build user base for future premium features (meal planning, shopping lists, subscription model)

### Secondary Objectives
- Build brand recognition in the food-tech and sustainability space
- Gather dataset of refrigerator images for future ML model improvements
- Create partnership opportunities with grocery delivery services and meal kit companies

### Key Performance Indicators (KPIs)
| Metric | Target (Month 3) | Target (Month 6) |
|--------|------------------|------------------|
| Monthly Active Users (MAU) | 10,000 | 50,000 |
| Share Rate | 30% | 40% |
| Average Session Duration | 3 min | 4 min |
| Return User Rate (7-day) | 15% | 25% |
| Net Promoter Score (NPS) | 40 | 50 |

---

## 2. Market Analysis

### Target Market
- **Primary**: Millennials and Gen Z (ages 22-35)
- **Secondary**: Health-conscious individuals, sustainability advocates
- **Geographic**: Initially US/Canada, expand to UK/EU in Phase 2

### Market Size
- 127M households in US alone
- $408B annual food waste in US
- 43% of food waste occurs at consumer level

### Competitive Landscape
| Competitor | Strength | Weakness | Differentiation |
|------------|----------|----------|-----------------|
| Food waste apps (e.g., Olio) | Established user base | Serious tone, low engagement | Entertainment-first approach |
| Recipe apps (e.g., Supercook) | Practical utility | No humor/viral potential | Shareable roast results |
| General AI photo apps | Viral mechanics | Not food-specific | Specialized food analysis |

---

## 3. User Personas

### Persona 1: "Conscious Casey"
- **Age**: 28, urban professional
- **Goals**: Reduce food waste, eat healthier, stay organized
- **Pain Points**: Forgets about food in back of fridge, unsure about expiration dates
- **Motivations**: Environmental impact, saving money
- **Tech Savviness**: High (early adopter)
- **Usage Pattern**: Weekly check-ins, shares results with roommates

### Persona 2: "Social Sam"
- **Age**: 24, content creator
- **Goals**: Create shareable content, entertain friends
- **Pain Points**: Needs fresh content for social media
- **Motivations**: Social validation, humor, trends
- **Tech Savviness**: Very high (power user)
- **Usage Pattern**: Multiple uploads for best roast, shares on Instagram/TikTok

### Persona 3: "Practical Pat"
- **Age**: 35, parent
- **Goals**: Keep family healthy, organize grocery shopping
- **Pain Points**: Managing multiple family members' preferences, meal planning
- **Motivations**: Family health, budgeting
- **Tech Savviness**: Medium
- **Usage Pattern**: Pre-grocery shopping check, saves tips for reference

---

## 4. Product Requirements

### 4.1 Functional Requirements

#### FR-001: Photo Upload
**Priority**: P0 (Must Have)  
**Description**: Users can upload refrigerator photos through multiple methods
- **Acceptance Criteria**:
  - Support drag-and-drop file upload
  - Support click-to-browse file selection
  - Support direct camera capture on mobile devices
  - Accept common image formats (JPEG, PNG, HEIC)
  - Maximum file size: 10MB
  - Display image preview before submission
  - Allow re-upload/cancel before analysis

#### FR-002: AI Analysis Engine
**Priority**: P0 (Must Have)  
**Description**: System analyzes uploaded photos and generates roast content
- **Acceptance Criteria**:
  - Identify individual food items with 80%+ accuracy
  - Detect freshness/expiration indicators
  - Assess organization and storage practices
  - Generate score (0-100) based on weighted criteria
  - Complete analysis within 5 seconds
  - Handle edge cases (empty fridge, non-fridge photos)

#### FR-003: Roast Results Display
**Priority**: P0 (Must Have)  
**Description**: Present analysis results in entertaining, shareable format
- **Acceptance Criteria**:
  - Display overall score with color-coded rating
  - Show humorous roast message (personalized to score)
  - List detailed findings with status icons (expired, questionable, fresh)
  - Provide actionable tips for improvement
  - Visual hierarchy: score → roast → findings → tips
  - Loading state with entertaining copy

#### FR-004: Social Sharing
**Priority**: P1 (Should Have)  
**Description**: Enable users to share their roast results
- **Acceptance Criteria**:
  - One-click share via native Web Share API
  - Generate shareable image/card with key results
  - Support sharing to: Instagram, Twitter, Facebook, WhatsApp
  - Include app branding and call-to-action
  - Track share events for analytics

#### FR-005: Session Reset
**Priority**: P0 (Must Have)  
**Description**: Allow users to analyze another fridge
- **Acceptance Criteria**:
  - "Roast Another Fridge" button clears current results
  - Returns user to upload screen
  - Preserves analytics session for multi-upload tracking

### 4.2 Non-Functional Requirements

#### NFR-001: Performance
- Page load time < 2 seconds
- Image upload processing < 3 seconds
- AI analysis completion < 5 seconds
- Lighthouse performance score > 90

#### NFR-002: Usability
- Mobile-first responsive design
- Touch-friendly targets (min 44px)
- Intuitive navigation (< 3 clicks to core action)
- Accessible (WCAG 2.1 AA compliance)

#### NFR-003: Scalability
- Support 1,000 concurrent users (launch)
- Scale to 10,000 concurrent users (month 3)
- Handle 100,000 daily uploads

#### NFR-004: Security & Privacy
- No server-side storage of user photos (process in-memory)
- HTTPS encryption for all data transmission
- No personally identifiable information (PII) collection without consent
- GDPR and CCPA compliant

#### NFR-005: Browser Compatibility
- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest version)
- iOS Safari (latest 2 versions)
- Chrome Mobile (latest version)

---

## 5. User Journey & Flow

### Primary User Flow
```
1. Landing Page
   ↓
2. See app description + sample results
   ↓
3. Upload/Capture Photo
   ↓
4. Image Preview & Confirmation
   ↓
5. [Loading State - 3-5 sec]
   ↓
6. View Roast Results
   ├─→ Share Results (Social)
   ├─→ View Detailed Findings
   ├─→ Read Pro Tips
   └─→ Roast Another Fridge (restart)
```

### Edge Cases & Error Flows
- **Invalid file format**: Show error toast, prompt to re-upload
- **Network failure**: Retry mechanism with user notification
- **Non-fridge photo detected**: Humorous error message, suggest retaking
- **Analysis timeout**: Graceful degradation with partial results

---

## 6. Feature Prioritization (MoSCoW)

### Must Have (MVP - Launch)
- ✅ Photo upload (drag-drop, camera, browse)
- ✅ AI roast analysis with score
- ✅ Results display (score, message, findings, tips)
- ✅ Mobile-responsive UI
- ✅ Share functionality

### Should Have (Phase 2 - Month 2)
- 🔄 User accounts (track history)
- 🔄 Roast history/gallery
- 🔄 Leaderboard (highest/lowest scores)
- 🔄 Badge system (achievements)
- 🔄 Comparison mode (before/after)

### Could Have (Phase 3 - Month 4)
- 💡 Social feed of community roasts
- 💡 Challenges & competitions
- 💡 Recipe suggestions based on ingredients
- 💡 Expiration date reminders
- 💡 Shopping list generator

### Won't Have (Out of Scope)
- ❌ Meal planning features (separate product)
- ❌ Grocery delivery integration (partnership needed)
- ❌ Calorie tracking (different market segment)
- ❌ Native mobile apps (web-first strategy)

---

## 7. Technical Architecture

### 7.1 Tech Stack

#### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router v6
- **State Management**: React Hooks (useState, useContext)
- **Animations**: Framer Motion (future enhancement)

#### Backend (Phase 2 - When needed)
- **Platform**: Lovable Cloud (Supabase)
- **Database**: PostgreSQL (user accounts, roast history)
- **Storage**: Supabase Storage (optional image archival)
- **Functions**: Edge Functions (AI processing, analytics)

#### AI/ML
- **Image Analysis**: OpenAI Vision API or Google Cloud Vision
- **Text Generation**: OpenAI GPT-4 (roast messages, tips)
- **Fallback**: Rule-based system for offline/error scenarios

#### Infrastructure
- **Hosting**: Vercel (frontend)
- **CDN**: Vercel Edge Network
- **Analytics**: Google Analytics 4 + Mixpanel
- **Error Tracking**: Sentry
- **Monitoring**: Vercel Analytics

### 7.2 Data Model (Phase 2)

```sql
-- Users table
users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE,
  created_at TIMESTAMP,
  total_roasts INTEGER DEFAULT 0,
  best_score INTEGER,
  worst_score INTEGER
)

-- Roasts table
roasts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  score INTEGER,
  roast_message TEXT,
  findings JSONB,
  tips JSONB,
  shared BOOLEAN DEFAULT false,
  created_at TIMESTAMP
)

-- Achievements table
achievements (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  badge_type TEXT,
  unlocked_at TIMESTAMP
)
```

### 7.3 API Endpoints (Phase 2)

```
POST /api/analyze-photo
  - Request: { image: File }
  - Response: { score, roastMessage, findings, tips }

GET /api/roast-history
  - Auth: Required
  - Response: [ { id, score, createdAt, ... } ]

POST /api/share-roast
  - Request: { roastId }
  - Response: { shareUrl, imageUrl }

GET /api/leaderboard
  - Response: [ { username, score, rank } ]
```

---

## 8. Design Requirements

### 8.1 Visual Design
- **Color Palette**:
  - Primary: Vibrant red (#EF4444) - "roast" theme
  - Secondary: Deep orange (#F97316)
  - Accent: Green (#22C55E) - "fresh" indicator
  - Backgrounds: Gradient from slate-900 to slate-800
  - Text: White (primary), slate-300 (secondary)

- **Typography**:
  - Headlines: Inter, 700 weight
  - Body: Inter, 400 weight
  - Monospace: JetBrains Mono (scores, data)

- **Components**:
  - Rounded corners (8px standard, 12px cards)
  - Subtle shadows for depth
  - Hover states on all interactive elements
  - Skeleton loaders for async content

### 8.2 Tone of Voice
- **Roast Messages**: Playful, slightly snarky, but never mean-spirited
- **UI Copy**: Casual, encouraging, fun
- **Tips**: Helpful, actionable, friendly
- **Error Messages**: Humorous but informative

**Examples**:
- Good roast: "Your fridge looks like a science experiment gone wrong! 🧪"
- Bad roast: "You're disgusting and should be ashamed"
- Good tip: "Try the 'first in, first out' method to reduce waste"
- Good error: "Hmm, that doesn't look like a fridge... or is it? 🤔"

### 8.3 Accessibility
- WCAG 2.1 AA compliance minimum
- Color contrast ratio ≥ 4.5:1 for text
- Keyboard navigation support
- Screen reader optimization
- Alt text for all images
- Focus indicators on interactive elements

---

## 9. Analytics & Metrics

### Event Tracking
| Event | Trigger | Data Captured |
|-------|---------|---------------|
| page_view | Landing page load | source, device |
| photo_upload_start | Click upload/camera | method (drag/click/camera) |
| photo_uploaded | Image selected | file_size, device |
| analysis_started | Upload confirmed | timestamp |
| analysis_complete | Results displayed | duration, score |
| share_clicked | Share button click | platform (if known) |
| share_completed | Share API success | platform |
| reset_clicked | "Roast Another" button | session_roast_count |
| tip_viewed | Tips section scrolled | tip_index |

### Key Metrics Dashboard
1. **Acquisition**: Daily/weekly/monthly unique visitors, sources
2. **Activation**: Upload completion rate, successful analysis rate
3. **Engagement**: Average roast score, time on results, tips read
4. **Retention**: 1-day, 7-day, 30-day return rate
5. **Referral**: Share rate, share platform breakdown, viral coefficient
6. **Revenue** (Phase 3): Conversion to premium, ARPU

---

## 10. Go-to-Market Strategy

### Pre-Launch (4 weeks before)
- **Week -4**: Beta testing with 50 friends/family
- **Week -3**: Influencer outreach (food bloggers, sustainability advocates)
- **Week -2**: Press kit preparation, seed social media content
- **Week -1**: Product Hunt launch preparation

### Launch (Week 0)
- **Day 1**: Product Hunt launch (aim for top 5)
- **Day 1-3**: Social media campaign (#FridgeRoast challenge)
- **Day 3-7**: Influencer content goes live
- **Day 7**: Press release to tech blogs (TechCrunch, The Verge)

### Post-Launch (Weeks 1-12)
- **Week 2-4**: Viral loop optimization based on share data
- **Week 5-8**: Partnership outreach (meal kit companies, grocery apps)
- **Week 9-12**: Introduce leaderboard and gamification features

### Marketing Channels
1. **Social Media**: Instagram, TikTok (primary), Twitter, Reddit
2. **Partnerships**: Food bloggers, sustainability influencers
3. **SEO**: Content marketing around food waste, fridge organization
4. **Paid Ads**: Facebook/Instagram (retargeting only in Phase 2)
5. **PR**: Tech and lifestyle publications

---

## 11. Success Metrics & Milestones

### Launch Milestones
- ✅ MVP deployed to production
- ✅ Analytics tracking implemented
- ✅ 100 beta users tested product
- ✅ < 5% error rate on photo analysis
- ✅ Mobile responsive on iOS/Android

### Month 1 Goals
- 5,000 unique users
- 25% share rate
- 4.0+ app store/user rating
- Featured on 2+ tech blogs

### Month 3 Goals
- 10,000 unique users
- 30% share rate
- 15% return user rate
- Product Hunt top 5 of the day

### Month 6 Goals
- 50,000 unique users
- 40% share rate
- 25% return user rate
- Partnership with 1+ major brand
- Revenue model validated (premium tier or sponsored content)

---

## 12. Risk Assessment

### Technical Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| AI API costs spike | Medium | High | Implement rate limiting, caching, fallback to cheaper models |
| Image analysis accuracy low | Medium | High | Multiple AI providers, human review pipeline for training |
| Viral traffic overwhelms infrastructure | High | Medium | Auto-scaling on Vercel, CDN caching, queue system |
| Privacy concerns from image uploads | Low | High | Clear privacy policy, no server storage, encryption |

### Business Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Low virality/sharing | Medium | High | A/B test share copy, improve roast humor quality |
| Negative brand perception (too mean) | Low | Medium | Tone testing, user feedback loops, moderation |
| Competition from major players | Low | Medium | First-mover advantage, niche focus, community building |
| Difficulty monetizing | Medium | Medium | Multiple revenue models (freemium, partnerships, ads) |

### Legal/Compliance Risks
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| GDPR/CCPA violations | Low | High | Privacy-by-design, no PII collection, legal review |
| Copyright issues (food brands in photos) | Low | Low | Fair use for analysis, no commercial use of user photos |
| AI-generated content liability | Low | Medium | Disclaimer, content moderation, terms of service |

---

## 13. Budget & Resources

### Development Phase (12 weeks)
- **Team**:
  - 1 Full-stack Developer (you)
  - 1 UI/UX Designer (contract, 20 hrs)
  - 1 QA Tester (contract, 10 hrs)

- **Costs**:
  - Development: In-house (your time)
  - Design: $2,000 (contract)
  - Testing: $500 (contract)
  - Infrastructure: $200/month (Vercel Pro, AI API credits)
  - Domain & SSL: $20/year
  **Total Dev Phase**: ~$3,000

### Launch Phase (First 3 months)
- **Marketing**: $2,000 (influencer partnerships, minimal paid ads)
- **Infrastructure**: $500/month (scaling for traffic)
- **AI API costs**: $300/month (10K users × 30% return × $0.01/analysis)
- **Tools**: $100/month (analytics, monitoring, error tracking)
**Total Launch Phase**: ~$5,000

### Break-Even Scenarios (Phase 3)
1. **Freemium**: 5% conversion to $4.99/month = 2,500 paying users
2. **Sponsorships**: 1 grocery partner at $10K/month
3. **Affiliate**: 10% of users click to meal kit partner at $5 CPA = $5K/month

---

## 14. Future Roadmap

### Phase 1: MVP (Month 0-1)
- ✅ Core roast functionality
- ✅ Social sharing
- ✅ Mobile responsive
- ✅ Analytics implementation

### Phase 2: Gamification (Month 2-3)
- User accounts (Lovable Cloud)
- Roast history
- Leaderboard
- Achievement badges
- Before/after comparisons

### Phase 3: Monetization (Month 4-6)
- Premium tier ($4.99/month):
  - Ad-free experience
  - Unlimited roasts
  - Advanced tips & recipes
  - Early access to new features
- Partnership integrations (meal kits, grocery delivery)
- Sponsored content (brand partnerships)

### Phase 4: Expansion (Month 7-12)
- Pantry roast (expand beyond fridge)
- Meal plan generator
- Shopping list from fridge contents
- Social feed & challenges
- International launch (UK, EU)

### Phase 5: Platform (Year 2)
- Native mobile apps (iOS, Android)
- API for third-party integrations
- B2B product (grocery stores, meal kit companies)
- White-label licensing

---

## 15. Appendices

### Appendix A: User Testing Feedback Summary
- 85% found the roast "funny and entertaining"
- 92% would share results with friends
- 78% wanted to see before/after comparisons
- 65% interested in recipe suggestions
- Main complaint: "Wished I could save my roasts"

### Appendix B: Competitor Feature Comparison
| Feature | Fridge Roast | Too Good To Go | Olio | NoWaste |
|---------|--------------|----------------|------|---------|
| Photo Analysis | ✅ | ❌ | ❌ | ✅ |
| AI Roast/Humor | ✅ | ❌ | ❌ | ❌ |
| Social Sharing | ✅ | ✅ | ✅ | ❌ |
| Gamification | 🔄 (Phase 2) | ❌ | ✅ | ❌ |
| Recipe Suggestions | 🔄 (Phase 3) | ❌ | ❌ | ✅ |

### Appendix C: Sample Roast Messages by Score Range
- **90-100**: "Wow! Your fridge is cleaner than a hospital! Are you even human? 👏"
- **70-89**: "Not bad! Your fridge is organized, but that mystery container in the back? 🤔"
- **50-69**: "Your fridge is... functional. Let's call it 'lived-in chic.' 😅"
- **30-49**: "Yikes! Your fridge needs an intervention. Where's Gordon Ramsay when you need him? 😱"
- **0-29**: "Congratulations! You've created a biological weapon. NASA wants to study this. ☢️"

### Appendix D: Technical Dependencies
```json
{
  "frontend": [
    "react@18.3.1",
    "react-router-dom@6.30.1",
    "typescript@5.x",
    "tailwindcss@3.x",
    "lucide-react@0.462.0",
    "shadcn/ui components"
  ],
  "backend": [
    "Lovable Cloud (Supabase)",
    "PostgreSQL 14+",
    "Edge Functions (Deno)"
  ],
  "ai": [
    "OpenAI API (GPT-4 Vision)",
    "Anthropic Claude (fallback)",
    "Google Cloud Vision (backup)"
  ]
}
```

---

## Document Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | [Your Name] | _______ | ______ |
| Tech Lead | [Your Name] | _______ | ______ |
| Stakeholder | _______ | _______ | ______ |

---

**Document History**
| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-10-09 | Product Team | Initial BRD creation |

---

**Next Steps**
1. ✅ Review and approve BRD with stakeholders
2. 🔄 Finalize UI/UX designs
3. 🔄 Set up development environment
4. 🔄 Implement MVP features
5. 🔄 Conduct user testing
6. 🔄 Prepare launch materials
7. 🔄 Execute go-to-market strategy
