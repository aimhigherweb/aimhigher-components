import React from 'react'

import styles from './legend.module.scss'

const Legend = (props) => {
	const {children, ...attr} = props

	return (
		<legend className={styles.label} {...attr}>{children}</legend>
	)
}

export default Legend