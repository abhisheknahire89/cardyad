# CareDyad Landing Page - Product Requirements Document

## Original Problem Statement
Build a mobile-first landing page for CareDyad by Dyadic Health — a caregiving support app for Indian families managing chronic health conditions.

## Project Overview
**Product**: CareDyad Landing Page  
**Target Audience**: Indian caregivers (adult children, spouses) caring for elderly family members with chronic health conditions  
**Secondary Audience**: Healthcare providers (hospitals, clinics)  
**Date Created**: December 2024

## Brand Identity
**Colors**:
- Primary: #4680FF (blue), #FF6C14 (orange)
- Secondary: #FFD861, #FFB8A1, #3DDC97, #B099CB
- Gradient 1: #FFD861 → #FF6C14 (CTAs)
- Gradient 2: #4680FF → #FF6C14 (hero/sections)

**Typography**:
- Headings: Poppins (600-700 weight)
- Body: Manrope (400-500 weight)

**Tone**: Warm, direct, human (for caregivers) | Credible, professional (for healthcare providers)

## User Personas
1. **The Daughter** - Managing father's diabetes from across the city (working professional, concerned but determined)
2. **The Son** - Coordinating mother's post-surgery recovery (caring, supportive)
3. **The Spouse** - Tracking daily medications, meals, and moods (partnership in elderly care)

## Core Features Implemented (December 2024)

### ✅ Phase 1: Frontend-Only Landing Page (COMPLETED)
**Sections Built**:
1. **Header/Navigation**
   - Fixed header with scroll behavior
   - Mobile-responsive hamburger menu
   - Gradient logo
   - Single-page anchor navigation

2. **Hero Section**
   - Headline: "Care for the one who Cares."
   - Gradient background (blue to orange)
   - Indian family hero image (warm, authentic)
   - Primary CTA: "Start Your Free Care Plan"
   - "Available on Android & iOS" subtext
   - Scroll indicator animation

3. **Who Is This For Section**
   - 3 persona cards with images and icons
   - Card hover effects with shadows
   - Closing line: "If you've ever carried someone's health in your head — this is for you."

4. **The Problem Section**
   - Emotional messaging (non-clinical)
   - Two feature highlight cards
   - "CareDyad changes that" CTA

5. **How It Works Section**
   - 3-step process with numbered icons
   - Feature lists with checkmarks
   - Bottom CTA: "Get Started in 60 Seconds"

6. **Care Triangle Section**
   - SVG visualization (Patient-Caregiver-Doctor triangle)
   - Dyadic health explanation
   - Research link

7. **Features Section**
   - 4 feature cards: Smart Care Plans, Mood Check-ins, Voice Notes, Care Network
   - Gradient accents and icon badges
   - Offline/sync note

8. **Social Proof Section**
   - 3 trust badges (built with caregivers, encrypted data, research-backed)
   - Testimonial from Priya R., Hyderabad
   - Research link CTA

9. **For Hospitals Section**
   - Partnership value proposition
   - Email capture form (mock submission)
   - Benefits list for healthcare providers

10. **Final CTA Section**
    - Gradient background
    - "You don't have to do this alone" headline
    - Download CTA with WhatsApp link
    - Trust badges (30 Days Free, 60 Seconds Setup, 100% Private)

11. **Footer**
    - USA Office: 21165 Whitfield Pl, Suite #106, Sterling, VA 20165 | +1 571 934 7292
    - India Office: Madhapur, Hyderabad, Telangana 500081 | +91 910 085 6540
    - Email: info@dyadic.health
    - Quick Links and Resources sections
    - Tagline: "Relational Care. Profound Impact."

12. **WhatsApp Floating Button**
    - Fixed position (bottom-right)
    - Link: https://wa.me/919100856540?text=Hi%20I%20want%20to%20know%20more%20about%20CareDyad
    - Hover animation

**Design System**:
- Mobile-first responsive design
- CSS animations (slide-up, delays, hover effects)
- Consistent spacing system
- Accessibility features (focus states, selection colors)
- Smooth scrolling

**Images Used**:
- Hero: Indian family (two women in traditional attire)
- Persona 1: Mother-daughter moment
- Persona 2: Son with family
- Persona 3: Family gathering with food

## Tech Stack
**Frontend**:
- React 19.0.0
- Tailwind CSS 3.4.17
- Lucide React (icons)
- Custom CSS with Poppins & Manrope fonts

**Backend**: Not implemented (Phase 2)

## What's NOT Implemented (Backlog)

### P0 Features (Next Phase)
- [ ] App Store & Play Store download links (currently placeholders)
- [ ] Email capture backend for hospital partnerships
- [ ] Google Analytics / tracking pixel integration
- [ ] Separate pages: Our Story, The Science, Research (currently anchor links)

### P1 Features (Future)
- [ ] Multi-language support (Hindi, Telugu, Tamil)
- [ ] Video testimonials
- [ ] Interactive care plan demo
- [ ] Blog/resources section
- [ ] Press mentions section

### P2 Features (Nice-to-Have)
- [ ] Live chat support
- [ ] Caregiver community section
- [ ] Doctor testimonials
- [ ] Case studies
- [ ] Newsletter signup

## Mock Data
- Hospital email form submission (console.log only)
- Download buttons (no actual store links yet)
- Research/Story/Science links (anchor only)

## Next Action Items
1. Connect download buttons to actual App Store / Play Store URLs
2. Implement backend for hospital partnership email capture
3. Add Google Analytics tracking
4. Create separate pages for Our Story, The Science, Research
5. Test on real mobile devices (iOS/Android)
6. SEO optimization (meta tags, OG images, schema markup)
7. Performance optimization (image lazy loading, code splitting)

## Success Metrics (To Be Tracked)
- Landing page visits
- CTA click-through rate
- Hospital partnership form submissions
- WhatsApp inquiries
- Time on page
- Scroll depth
- Mobile vs desktop traffic

## Contact Information
- WhatsApp: +91 910 085 6540
- Email: info@dyadic.health
- Partnerships: partnerships@dyadic.health
