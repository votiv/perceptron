import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface LineType {
  top: number
  left: number
}

/**
 * Draw horizontal line
 * @param left
 * @param top
 * @constructor
 */
const Line: FunctionComponent<LineType> = ({ left, top }) => (
  <L left={left} top={top} />
)

const L = styled.div<LineType>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  border: 1px solid black;
  width: 33rem;
  margin-left: -.5rem;
`

export default Line
