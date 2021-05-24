import { randomInRange } from './randomInRange'
import { lineFn } from './App'

export interface PointType {
  x: number
  y: number
  label: 1 | -1
  bColor?: string
  bias: number
}

/**
 * Generate an array of points of num length
 * @param num
 */
export const points: (num: number) => PointType[] = (num) => {
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
      label: p.y < lineFn(p.x) ? -1 : 1 // calculate the known "answer"
    }))
}
