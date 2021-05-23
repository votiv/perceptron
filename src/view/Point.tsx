import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

export interface PointType {
  x: string | number
  y: string | number
  label: 1 | -1
  bColor?: string
  bias: number
}

export interface StyledPoint extends Omit<PointType, 'bias'> {
  bColor: string
}

const Point: FunctionComponent<Omit<PointType, 'bias'>> = ({ x, y, bColor, label }) => (
  <P x={x} y={y} bColor={bColor as string} label={label} />
)

const P = styled.div<StyledPoint>`
  border: 1px solid black;
  border-radius: 50%;
  width: .5rem;
  height: .5rem;
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  background-color: ${({ bColor, label }) => bColor ? bColor : label === 1 ? '#000' : '#fff'};
`


export default Point
