import React, { useCallback } from 'react'
import styled from 'styled-components'

import { usePoints } from './usePoints'
import Point, { PointType } from './Point'
import Line from './Line'

const Plane = () => {
  const points = usePoints(100)
  const SPREAD = 512 - 8

  const makePoints = useCallback((point: PointType, index: number) => {
    const strX = point.x.toString()
    const strY = point.y.toString()

    console.log(strY, strX)

    return (
      <Point x={parseFloat(strX) * SPREAD} y={parseFloat(strY) * SPREAD} key={strX + strY + index} />
    )
  }, [SPREAD])

  return (
    <Pl>
      {points.map(makePoints)}
      <Line y={SPREAD / 2} x={0} />
    </Pl>
  )
}

const Pl = styled.div`
  width: 32rem;
  height: 32rem;
  background-color: aliceblue;
  margin: 5rem;
  border: 1px solid blue;
  position: relative;
`

export default Plane
