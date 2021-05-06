import React from 'react'

import styles from './view.module.scss'

const Line = ({ x, y }) => (
  <div className={styles.line} style={{ top: y, left: x }}></div>
)

export default Line
