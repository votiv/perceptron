import { PointType } from './Point'
import { randomInRange } from '../randomInRange'

/**
 * Generate an array of points of num length
 * @param num
 * @param divider
 */
export const points: (num: number, divider: number) => PointType[] = (num, divider) => {
  const xCoords = [...Array<number>(num)].map(() => randomInRange())
  const yCoords = [...Array<number>(num)].map(() => randomInRange())

  return xCoords
    .map((x, i) => ({
      x,
      y: yCoords[i],
      bias: 1 // bias is always 1, but the weight got it changes
    }))
    .map(p => ({
      ...p,
      label: p.y >= divider ? 1 : -1 // calculate the known "answer"
    }))
}
