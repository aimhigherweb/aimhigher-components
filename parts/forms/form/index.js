import React from 'react'

import styles from './form.module.scss'

const Form = (props) => {
	const {children, ...attr} = props

	return (
		<form {...attr} className={styles.form}>
			{children}
		</form>
	)
}

export default Form