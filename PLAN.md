# STORY: Re-theme Cyber LMS to match ESC's visual identity

## Description
As a user, I want the Cyber LMS to have the same visual theme as the ESC application, so that there is a consistent brand identity across the platform.

## Acceptance Criteria
- [x] The Cyber LMS frontend uses Tailwind CSS for styling.
- [x] The font is changed from `Inter` to `Special Elite`.
- [x] The color palette is updated to match the ESC application's theme.
- [x] The layout and components of the Cyber LMS are restyled to match the look and feel of the ESC application.

## TDD Execution Plan
1.  **Test Case 1: Integrate Tailwind CSS.**
    *   **Test:** Verify that Tailwind CSS classes are correctly applied to the components by checking the rendered HTML.
    *   **Implementation:**
        *   Install Tailwind CSS and its dependencies (`postcss`, `autoprefixer`) in the `cyber-lms/frontend` directory.
        *   Create `tailwind.config.js` and `postcss.config.js` files.
        *   Update `cyber-lms/frontend/src/styles/global.css` to import Tailwind CSS.

2.  **Test Case 2: Update Fonts and Colors.**
    *   **Test:** Manually inspect the application to ensure the font has been changed to `Special Elite` and the new color palette is applied.
    *   **Implementation:**
        *   Update `tailwind.config.js` with the `esc` color palette.
        *   Update `cyber-lms/frontend/src/styles/global.css` to import the `Special Elite` font and set it as the default font.

3.  **Test Case 3: Restyle Components.**
    *   **Test:** Manually inspect each page and component to ensure it matches the `esc` theme.
    *   **Implementation:**
        *   Go through each component file (`.tsx`) in `cyber-lms/frontend/src` and replace the existing `className`s with Tailwind CSS utility classes.
        *   This will be a significant effort and will involve updating the layout of many components.
