# Project TODO List

## Unit Introduction Pages - Current Status

### ✅ Completed
- [x] Review unit content specifications in dev-docs
- [x] Examine existing data structure in src/data TypeScript files  
- [x] Design intro page template component structure
- [x] Create UnitIntroduction component with entry event and project overview
- [x] Create separate intro data files structure (unit01-intro.ts, etc.)
- [x] Build Unit 1-3 intro data files with rich content from specs
- [x] Create intro page routes with dynamic routing at `/units/[unit]/intro/page.tsx`
- [x] Fix static export configuration with generateStaticParams
- [x] Test intro page routing and display functionality

### 🔄 In Progress / Next Steps

#### High Priority
- [ ] **Add YouTube video integration** - Modify UnitIntroduction component to support embedded YouTube videos
- [ ] **Add video transcript feature** - Create toggleable transcript display for YouTube videos
- [ ] **Update type definitions** - Add YouTube video and transcript fields to UnitIntroductionData interface
- [ ] **Update existing intro data files** - Add YouTube video URLs and transcripts to unit01-intro.ts through unit03-intro.ts
- [ ] **Complete remaining intro data files** - Create `unit04-intro.ts` through `unit08-intro.ts` following established pattern with video support

#### Medium Priority  
- [ ] **Update sidebar navigation** - Ensure current section highlighting works for intro pages
- [ ] **Test video integration** - Verify YouTube embeds work correctly and transcripts toggle properly
- [ ] **Accessibility improvements** - Ensure video controls and transcripts are keyboard accessible

#### Future Considerations
- [ ] **Expand to other sections** - Create similar templates for concepts, excel-model, examples, exercises, summary
- [ ] **Progress tracking** - Add functionality to track student progress through sections
- [ ] **Navigation integration** - Improve section-to-section flow and progress indicators

## Files Created This Session

### Components
- ✅ `/src/components/unit/UnitIntroduction.tsx` - Main intro page component with entry events, project overview, learning objectives
- ✅ `/src/app/units/[unit]/intro/page.tsx` - Dynamic routing page for intro sections with generateStaticParams

### Types
- ✅ `/src/types/sections.ts` - Section-specific interfaces (UnitIntroductionData, EntryEvent, ProjectOverview)

### Data Files
- ✅ `/src/data/unit01-intro.ts` - Smart Ledger Launch intro content
- ✅ `/src/data/unit02-intro.ts` - Month-End Wizard intro content  
- ✅ `/src/data/unit03-intro.ts` - Three-Statement Storyboard intro content

## Architecture Established

### Design Patterns
- **Modular Data Structure**: Each section gets separate data file to keep files manageable
- **Consistent Component Interface**: All intro pages follow same UnitIntroductionData structure
- **Rich Content Integration**: Entry events and project overviews follow pedagogical best practices from dev-docs
- **Visual Design System**: Color-coded cards (blue=entry event, green=project, purple=objectives) using shadcn/ui

### Current Section Structure
Each unit has 6 sections defined in layout.tsx:
1. **intro** - Introduction (✅ component ready)
2. **concepts** - Core Concepts (pending)
3. **excel-model** - Excel Model (pending)  
4. **examples** - Examples (pending)
5. **exercises** - Exercises (pending)
6. **summary** - Summary (pending)

## Video Integration Requirements

### YouTube Video Component Features Needed:
- **Embedded YouTube Player**: Clean iframe implementation with responsive design
- **Video Metadata**: Title, duration, description display
- **Transcript Toggle**: Collapsible transcript section with show/hide functionality
- **Accessibility**: Proper ARIA labels, keyboard navigation, screen reader support

### Data Structure Updates Required:
```typescript
interface VideoContent {
  youtubeId: string
  title: string
  duration?: string
  description?: string
  transcript: string
}

interface UnitIntroductionData {
  // existing fields...
  introVideo?: VideoContent
}
```

### Implementation Notes:
- Use React useState for transcript visibility toggle
- Implement YouTube privacy-enhanced mode (youtube-nocookie.com)
- Add loading states and error handling for video embeds
- Ensure transcript text is searchable and properly formatted
- Consider video placeholder/thumbnail for faster loading

## Notes for Next Session

The introduction page template is complete with working dynamic routing and follows the rich content specifications from dev-docs. The component displays:
- Engaging "Day 1" entry events with real-world scenarios
- Project overviews with team structure, deliverables, and timelines  
- Learning objectives organized by content knowledge, Excel skills, and deliverables
- Professional design using shadcn/ui components with consistent visual hierarchy

**NEXT PRIORITY**: Add YouTube video integration with toggleable transcripts to enhance the pedagogical value of intro pages.