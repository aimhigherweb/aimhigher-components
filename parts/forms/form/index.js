import React from 'react'

import styles from './form.module.scss'

const Form = ({children, ...attr}) => (
	<form {...attr} className={styles.form}>
		{children}
	</form>
)

export default Form