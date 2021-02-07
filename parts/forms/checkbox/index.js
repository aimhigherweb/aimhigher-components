import React, {Fragment} from 'react'

import Label from '../label'

import styles from './checkbox.module.scss'

const Checkbox = ({children, ...attr}) => {
	attr.id = attr.id || attr.name

	return (
		<Fragment>
			<input className={styles.input} {...attr} />
			<Label className={styles.label} htmlFor={attr.id}>{children}</Label>
		</Fragment>
	)
}

export default Checkbox