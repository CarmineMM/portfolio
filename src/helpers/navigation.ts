/**
 * @file navigation.ts
 * @description Helper functions for navigation-related client-side logic.
 */

/**
 * @function findCurrentSectionIndex
 * @description Finds the index of the current active section based on scroll position.
 * @param {HTMLElement[]} sections - Array of section elements to monitor.
 * @param {number} offset - Vertical offset to trigger the change.
 * @returns {number} The index of the active section, or -1 if none are active.
 */
export const findCurrentSectionIndex = (sections: (HTMLElement | null)[], offset: number = 200): number => {
    const scrollY = window.scrollY + offset
    let activeIndex = -1

    // Use a small threshold to avoid precision issues
    const threshold = 5

    for (let i = 0; i < sections.length; i++) {
        const section = sections[i]
        if (section) {
            // Get absolute position relative to document
            const sectionTop = section.getBoundingClientRect().top + window.scrollY

            // If the section top is above our line, it's a candidate
            if (sectionTop <= scrollY + threshold) {
                activeIndex = i
            }
        }
    }

    return activeIndex
}

/**
 * @function isAtTop
 * @description Checks if the user is at the top of the page (above the first section).
 * @param {HTMLElement | null} firstSection - The first content section.
 * @param {number} threshold - Threshold before considering it "Home".
 * @returns {boolean} True if the scroll is above the threshold.
 */
export const isAtTop = (firstSection: HTMLElement | null, threshold: number = 100): boolean => {
    if (!firstSection) return true
    // If we have scrolled less than 50px, it's definitely Home
    if (window.scrollY < 50) return true

    const sectionTop = firstSection.getBoundingClientRect().top + window.scrollY
    return window.scrollY < (sectionTop - threshold)
}
