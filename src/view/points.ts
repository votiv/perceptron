import { PointType } from './Point'
import { randomInRange } from '../randomInRange'

/**
 * Generate an array of points od num length
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
      bias: 1
    }))
    .map(p => ({
      ...p,
      label: p.y >= divider ? 1 : -1
    }))
}
