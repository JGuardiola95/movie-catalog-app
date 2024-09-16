/**
 * Rounds a given rating to one decimal place and returns it as a string.
 *
 * @param {number} rating - The rating to be rounded.
 * @returns {string} - The rounded rating as a string.
 */
export const getRoundedRating = (rating: number) => String(Math.round(rating * 10) / 10);
