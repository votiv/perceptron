import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

export interface PointType {
  x: string | number
  y: string | number
}

const Point: FunctionComponent<PointType> = ({ x, y }) => {
  console.log('in point', x, y)
  return (
    <P x={x} y={y} />
  )
}

const P = styled.div<PointType>`
  border: 1px solid black;
  border-radius: 50%;
  width: .5rem;
  height: .5rem;
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`

export default Point
