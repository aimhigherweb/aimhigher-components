import React from 'react'

import styles from './label.module.scss'

const Label = (props) => {
	const {children, ...attr} = props

	return (
		<label className={styles.label} {...attr}>{children}</label>
	)
}

export default Label