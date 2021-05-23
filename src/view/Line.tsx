import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import { PointType } from './Point'

interface LineType extends Omit<PointType, 'label' | 'bias'> {}

const Line: FunctionComponent<LineType> = ({ x, y }) => (
  <L x={x} y={y} bColor="" />
)

const L = styled.div<LineType>`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  border: 1px solid black;
  width: 33rem;
  margin-left: -.5rem;
`

export default Line
