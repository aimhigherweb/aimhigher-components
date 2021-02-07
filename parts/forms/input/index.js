import React from 'react'

import styles from './input.module.scss'

const Input = ({...attr}) => (
	<input className={styles.input} {...attr} />
)

export default Input