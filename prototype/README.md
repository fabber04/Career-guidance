 NUST Career Guidance Platform - UI/UX Prototype

This is a visual prototype that combines design elements from:
- *Quora* - Clean, readable Q&A interface
- *Glassdoor* - Review cards with ratings and pros/cons
- *College Confidential* - Program-focused forum organization

 Features Demonstrated

Visual Design Elements

1. *Quora-inspired:*
   
   - Clean, minimal navigation bar
   - Topic-based sidebar navigation
   - Readable answer formatting
   - Upvote/downvote system
   - Contributor profiles with reputation

2. *Glassdoor-inspired:*

   - Star ratings (★★★★★)
   - Pros/Cons review format
   - "Helpful" voting on reviews
   - Career outcome cards
   - Verified badge system

3. *College Confidential-inspired:*

   - Program-focused organization
   - Department categorization
   - Related programs sidebar


 Components Included

- Navigation bar with search
- Program header with ratings
- Official requirements section (clearly separated)
- Reviews section with pros/cons
- Q&A section with tags
- Career outcomes cards
- Sidebars (topics, contributors, related programs)

How to View

Simply open `index.html` in a web browser. No build process required.

File Structure:


prototype/
   ── index.html          # Main HTML structure
   ── styles/
    ── main.css        # Main layout and base styles
      └── components.css  # Component-specific styles
   ── scripts/
      └── main.js         # Basic interactivity
   ──README.md           # This file


# Design Principles

1. *Clear Separation:* Official data vs. contributor content
2. *Visual Hierarchy:* Important information stands out
3. *Clean Layout:* Plenty of white space, readable typography
4. *Interactive Elements:* Hover states, click feedback
5. *Responsive:* Works on different screen sizes

## Color Scheme

- *Primary Blue:* `#2e69ff` 
- *Accent Red:* `#b92b27` 
- *Success Green:* `#0caa41` 
- *Neutral Grays:* For text and backgrounds

## Next Steps

This prototype demonstrates the visual design. To make it functional:

1. Connect to backend API
2. Add authentication
3. Implement real data fetching
4. Add form submissions
5. Build additional pages (user profiles, admin dashboard, etc.)

