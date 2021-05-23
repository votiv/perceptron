/**
 * Return a random float in the range of [min, max)
 * @param min
 * @param max
 */
export const randomInRange: (min?: number, max?: number) => number
  = (min = 0, max = 1) => Math.round((Math.random() * (max - min) + min) * 100) / 100
