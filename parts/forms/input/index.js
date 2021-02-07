import React from 'react'

import styles from './input.module.scss'

const Input = (props) => {
	const {...attr} = props

	return (
		<input className={styles.input} {...attr} />
	)
}

export default Input