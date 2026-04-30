# Student Components Remediation Plan

**Priority:** High  
**Files Affected:** 17  
**Issues Found:** 3  
**Estimated Effort:** 1-2 hours  

---

## Overview

Student components include navigation/overview pages, as the components, and practice hub components. This audit identifies  main issues: missing PhaseHeader/footer and inconsistent gradient backgrounds.

 
 The Student lesson phase pages (364 files audited) have the two primary visual styling inconsistencies:

 need to address:
1. Missing gradient backgrounds (46 files)
2. missing badge usage (95 files)

3. inconsistent Card border styling (10 unit components)
4. inconsistent card header styling patterns
5 unit components missing card structure in 2 unit components)
5. Use of badge component (95 phase pages)
    - student unit/lesson overview pages missing PhaseHeader component (studentUnitOverview.tsx has studentLessonOverview.tsx)
6. Student lesson phase pages have phaseHeader and PhaseFooter components for proper navigation structure.

Currently, studentLessonOverview.tsx has a custom breadcrumb navigation and a footer section with basic buttons instead of the PhaseHeader` and `PhaseFooter`.

 components. 
    - **StudentUnitOverview.tsx**: As a unit overview page that leads to lessons, it should include a `PhaseHeader` component for consistency with the student page design system. This components already have appropriate gradient backgrounds.
`bg-gradient-to-br from-background via-background to-muted/20`.

 Meanwhile, the Student unit overview page includes a Hero Section` with Badge but a Badge` components, proper `variant="outline"` styling, a a color-coded borders for unit themes.
        <div className="container mx-auto px-4 py-8 space-y-8">
          <h1 className="text-3xl font-bold tracking-tight mb-0">
            <Badge variant="outline">{unit.title}</Badge>
          </div>
        </div>
      </CardContent>
        {lessons.map((lesson) => (
          <Card key={lesson.id} className={`border-blue-200 hover:shadow-md transition-shadow` cursor-pointer`}>
            <CardHeader>
              <CardTitle className="text-lg">{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href={`/unit/${unitNumber}`} className="text-blue-600 hover:underline font-medium">
                View lesson
              </Link>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </div>
  </div>
</CardContent>
```

**Files to fix:**
- [ ] StudentLessonOverview.tsx
 lines 18-50:
  - Add `<PhaseHeader>` component
    - Consider adding gradient background
- [ ] StudentUnitOverview.tsx, lines 20-50:
    - add `<PhaseHeader>` component
- [ ] StudentLessonOverview.tsx (lines 6-100):
  - remove custom breadcrumb, replace with PhaseHeader component
    - [ ] StudentUnitOverview.tsx (lines 20-40):
    - remove custom footer section, replace with standard Phase footer component
- [ ] add gradient background: `bg-gradient-to-br from-background via-background to-muted/20`
    - [ ] studentUnitOverview.tsx (lines 42-60):
        .custom hero section has a Badge` components but no gradient background
        <div className="container mx-auto px-4 py-8 space-y-8">
          <h1 className="text-3xl font-bold tracking-tight mb-1">
            <Badge variant="outline">{unit.title}</Badge>
          </h1>
          {units.map((unit) => (
            <Card key={unit.id} className={`border-green-200 hover:shadow-md transition-shadow` cursor-pointer`}>
              <CardHeader>
              <CardTitle className="text-lg">{unit.title}</CardTitle>
              <CardDescription>{unit.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href={`/unit/${unitNumber}`} className="text-green-600 hover:underline font-medium">
                View unit
              </Link>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </div>
  </div>
</CardContent>
```

**Files to fix:**
- [ ] StudentUnitOverview.tsx
 lines 41-50: Add gradient background
    - [ ] StudentUnitOverview.tsx (lines 42-60): add `<PhaseHeader>` component

Now at the code example and see how it should look with the component in place.

     - Student unitOverview.tsx (unit-overview.tsx) and studentLessonOverview.tsx

 reference. Both use the pattern.
    - The lesson overview page should have PhaseHeader and PhaseFooter components with proper navigation structure, and consistent gradient backgrounds with color-coded borders for unit themes.
    - student unit overview page (StudentUnitOverview.tsx) lines 17-20) already has the gradient background and use the `bg-gradient-to-br from-background via-background to-muted/20` structure.
    - Phase pages like lesson phase pages follow this same structure
        - Note: Overview pages use a color scheme, but (blue/green), units, purple for all phases; orange for units 1-5)
- - Practice hub pages use their own consistent dark theme with gradients and background, border-slate-900` via-slate-800 to-blue-900`
).
    .capstone pages use gradients, gradient `bg-gradient-to-br from-emerald-100 via-amber-50` for success
    . Practice hub pages (Practice hub home, progress dashboard)) export page.tsx) already maintain their own consistent visual patterns
    but with proper gradient backgrounds:
 dark theme.
- Practice hub navigation and multiple columns (hub card)
 standard design uses gradient headers and hover effects
    - practice hub pages should simpler navigation with gradient backgrounds

    - export page.tsx was simpler structure without the complexity
    - If files become more complex with standard patterns, it'll be them more attention to keeping those 10+15 issues, standardize, this document, I've plan to for that category.
 and includes:
 priority level to help track progress and overall remediation effort. and ensure consistent implementation of the fixes.  
| file | Priority | critical, high visibility - student-facing content   |
| files to fix:**
|--------|--------------------------|
|-------------|
|-------------|
|------------|
|---------|--------|----------|--------------------------|----------|---------|---------|
|-------------|
|-------------|----------|
|---------|
|--------|--------------------------|----------|---------|---------|
|------------|
|---------------------------|
|-----------------------------|------------------|
|-------------- Manual visual testing to multiple browser tabs to verify visual changes
 Consider taking before/after screenshots, |---------------|
|---------------|-----------------|--------------------|
