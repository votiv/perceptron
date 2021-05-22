import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { PointType } from './Point'

const Line: FunctionComponent<PointType> = ({ x, y }) => (
  <L x={x} y={y} />
)

const L = styled.div<PointType>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  border: 1px solid black;
  width: 33rem;
  margin-left: -.5rem;
`

export default Line
