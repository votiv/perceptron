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
  const [train, guess] = perceptron()
  const pts = useMemo(() => points(50, DIVIDER), [])

  const makePoints = useCallback((point: PointType, index: number) => {
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
  }, [bColor])

  const clickToTrain = useCallback(() => {
    const guessed: number[] = []

    pts.forEach((pt) => {
      train(Array.from([pt.x as number, pt.y as number]), pt.label)
      guessed.push(guess(Array.from([pt.x as number, pt.y as number])))
    })

    /**
     * Based on the training the point got (their weights were adjusted), we color them green (correctly categorized)
     * or red (still training)
     */
    pts.forEach((pt, i) => {
      if (pt.label === guessed[i]) {
        setBColor(prevState => [...prevState, '#189e3c'])
      } else {
        setBColor(prevState => [...prevState, '#e60e35'])
      }
    })
  }, [pts, guess, train])

  return (
    <>
      <Pl>
        {pts.map(makePoints)}
        <Line y={SPREAD * DIVIDER} x={0} />
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
