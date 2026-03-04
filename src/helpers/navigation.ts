/**
 * @file navigation.ts
 * @description Helper functions for navigation-related client-side logic.
 */

/**
 * @function findCurrentSectionIndex
 * @description Finds the index of the current active section based on scroll position.
 * @param {HTMLElement[]} sections - Array of section elements to monitor.
 * @param {number} offset - Vertical offset to trigger the change (defaults to 1/3 of viewport).
 * @returns {number} The index of the active section, or -1 if none are active.
 */
export const findCurrentSectionIndex = (sections: (HTMLElement | null)[], offset: number = window.innerHeight / 3): number => {
    const scrollY = window.scrollY + offset
    let activeIndex = -1

    sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollY) {
            activeIndex = index
        }
    })

    return activeIndex
}

/**
 * @function isAtTop
 * @description Checks if the user is at the top of the page (above the first section).
 * @param {HTMLElement | null} firstSection - The first content section.
 * @param {number} threshold - Threshold before considering it "Home".
 * @returns {boolean} True if the scroll is above the threshold.
 */
export const isAtTop = (firstSection: HTMLElement | null, threshold: number = window.innerHeight / 2): boolean => {
    if (!firstSection) return true
    return window.scrollY < (firstSection.offsetTop - threshold)
}
