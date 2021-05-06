import React from 'react'

import styles from './view.module.scss'

const Point = ({ x, y }) => {
  console.log('x, y', x, y)
  return (
    <div className={styles.point} style={{ top: y, left: x }}></div>
  )
}

export default Point
