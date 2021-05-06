export const usePoints = num => {
  const points = new Array(num)
  points.fill(undefined)
  return points.map(() => ({
    x: Math.random().toFixed(2),
    y: Math.random().toFixed(2)
  }))/*.map((point, index) => ({
    x: index % 4 === 0
  }))*/
}
