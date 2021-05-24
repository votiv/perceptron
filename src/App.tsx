import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Stage, Layer, Line, Circle, Rect } from 'react-konva'

import { GlobalStyles } from './globalStyles/GlobalStyles'
import { points } from './view/points'
import { perceptron } from './perceptron'
import styled from 'styled-components'

export const lineFn: (x: number) => number = x => x // x = y

export const WIDTH = 800
const HEIGHT = 800
const XMIN = 0
const YMIN = 0
const XMAX = WIDTH
const YMAX = HEIGHT

const App = () => {
  const pts = useMemo(() => points(50), [])
  const [train, guess, getWeights] = perceptron()
  const count = useRef(0)
  const [approxPoints, setApproxPoints] = useState<number[]>([])
  const [colors, setColors] = useState<string[]>([])

  // Formula is weights[0]*x + weights[1]*y + weights[2] = 0
  const countApproxPoints = () => {
    const w = getWeights()

    const x1 = XMIN
    const y1 = (-w[2] - w[0] * x1) / w[1]
    const x2 = XMAX
    const y2 = (-w[2] - w[0] * x2) / w[1]

    setApproxPoints([x1, y1, x2, y2])
  }

  const clickToTrain = useCallback(() => {
    train([pts[count.current].x, pts[count.current].y, pts[count.current].bias], pts[count.current].label)
    count.current = (count.current + 1) % pts.length

    countApproxPoints()

    for (let i = 0; i < count.current; i++) {

      let g = guess([pts[count.current].x, pts[count.current].y, pts[count.current].bias])
      setColors(prevColors => [
        ...prevColors,
        g > 0 ? '#189e3c' : '#e60e35'
      ])
      /*if (g > 0) noFill()

      let x = map(training[i].input[0], xmin, xmax, 0, width)
      let y = map(training[i].input[1], ymin, ymax, height, 0)*/
    }
  }, [count, pts, train, guess, countApproxPoints])

  /*useEffect(() => {
    if (count.current === 49) return

    train([pts[count.current].x, pts[count.current].y, pts[count.current].bias], pts[count.current].label)
    count.current = (count.current + 1) % pts.length
    countApproxPoints()
  }, [count, pts, train, countApproxPoints])*/

  return (
    <div style={{ padding: '4rem' }}>
      < GlobalStyles />

      <Stage width={WIDTH} height={HEIGHT} x={XMIN} y={YMIN}>
        <Layer>
          <Rect width={WIDTH} height={HEIGHT} x={XMIN} y={YMIN} fill="aliceblue" stroke="blue" />
          {
            pts.map((pt, i) => (
              <Circle
                key={`${pt.x}-${pt.y}-${i}`}
                x={pt.x}
                y={pt.y}
                fill={
                  colors.length === 0
                    ? pt.label === 1 ? 'black' : 'white'
                    : colors[i]
                }
                radius={8}
                stroke="black"
              />
            ))
          }

          {
            approxPoints.length > 0 && <Line
              points={approxPoints}
              stroke="powderblue"
              strokeWidth={2}
            />
          }

          <Line
            points={[XMIN, lineFn(YMIN), XMAX, lineFn(YMAX)]}
            stroke="back"
            strokeWidth={2}
          />


        </Layer>
      </Stage>
      <B onClick={clickToTrain}>Train</B>
    </div>
  )
}

const B = styled.button`
  position: absolute;
  top: 4rem;
  left: calc(8rem + 800px);
  border: 1px solid blue;
  background-color: aliceblue;
  width: 8rem;
  height: 3rem;
`

export default memo(App)
