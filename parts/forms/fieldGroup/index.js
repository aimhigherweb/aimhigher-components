import React from 'react'

import styles from './fieldGroup.module.scss'

const FieldGroup = (props) => {
	const {children, ...attr} = props

	return (
		<fieldset {...attr} className={styles.group}>
			<div className={styles.container}>{children}</div>
		</fieldset>
	)
}

export default FieldGroup