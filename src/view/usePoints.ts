import { PointType } from './Point'

export const usePoints: (num: number) => PointType[] = num => {
  const points = new Array<number | undefined>(num)
  points.fill(undefined)
  return points.map(() => ({
    x: Math.random().toFixed(2),
    y: Math.random().toFixed(2)
  }))
}
