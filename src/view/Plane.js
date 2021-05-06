import React from 'react'

import styles from './view.module.scss'
import { usePoints } from './usePoints'
import Point from './Point'
import Line from './Line'

const Plane = () => {
  const points = usePoints(100)
  const SPREAD = 512 - 8

  return (
    <div className={styles.plane}>
      {
        points.map((point, index) => (
          <Point x={parseFloat(point.x) * SPREAD} y={parseFloat(point.y) * SPREAD} key={point.x + point.y + index} />
        ))
      }
      <Line y={SPREAD / 2} x={0} />
    </div>
  )
}

export default Plane
