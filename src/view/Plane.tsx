import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

import { points } from './points'
import Point, { PointType } from './Point'
import Line from './Line'
import { perceptron } from '../perceptron'

export const SPREAD = 512 - 8
export const DIVIDER = .5




const Plane = () => {
  const [bColor, setBColor] = useState<string[]>([])
  const [train, guess, getWeights] = useMemo(() => perceptron(), [])
  const pts = useMemo(() => points(50), [])
  const [plpl, setPl] = useState(pts)

  const [count, setCount] = useState(0)
  const [aiLineY, setAiLineY] = useState(SPREAD * .2)

  const initialPoints = useCallback((pts) => pts.map((point: PointType, index: number) => {
    const strX = point.x.toString()
    const strY = point.y.toString()

    return (
      <Point
        key={strX + strY + index}
        x={parseFloat(strX) * SPREAD}
        y={parseFloat(strY) * SPREAD}
        label={point.label}
        bColor={bColor[index]}
      />
    )
  }), [bColor])

  /**
   * Train the perceptron on click
   */
  const clickToTrain = useCallback(() => {
    // const guessed: number[] = []

    /*pts.forEach(pt => {
      guessed.push(guess(Array.from([pt.x as number, pt.y as number, pt.bias])))
    })*/

    train(Array.from([pts[count].x as number, pts[count].y as number, pts[count].bias]), pts[count].label)
    setCount(prevState => (prevState + 1) % pts.length)


    for (let i = 0; i < count; i++) {
      setBColor(prevState => [...prevState, '#189e3c'])
      let g = guess(Array.from([pts[count].x as number, pts[count].y as number, pts[count].bias]))
      if (g > 0) setBColor(prevState => [...prevState, '#e60e35'])

      // initialPoints(pts)
    }

    /*if (pts[count].label === guessed[count]) {
      setBColor('#189e3c')
    } else {
      setBColor('#e60e35')
    }*/


  }, [count, pts, guess, train, getWeights])


  return (
    <>
      <Pl>

        {
          plpl.map((point: PointType, index: number) => {
            const strX = point.x.toString()
            const strY = point.y.toString()

            return (
              <Point
                key={strX + strY + index}
                x={parseFloat(strX) * SPREAD}
                y={parseFloat(strY) * SPREAD}
                label={point.label}
                bColor={bColor[index]}
              />
            )
          })
        }

        <Line top={SPREAD * DIVIDER} left={0} />
        {/*<Line top={aiLineY} left={0} />*/}
      </Pl>

      <B onClick={clickToTrain}>Click to train</B>
    </>
  )
}

const Pl = styled.div`
  width: 32rem;
  height: 32rem;
  background-color: aliceblue;
  margin: 5rem;
  border: 1px solid blue;
  position: relative;
  cursor: pointer;
`


const B = styled.button`
  position: absolute;
  top: 5rem;
  left: 42rem;
  border: 1px solid blue;
  background-color: aliceblue;
  width: 8rem;
  height: 3rem;
`

export default Plane
