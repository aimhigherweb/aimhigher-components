import React from 'react'

import styles from './textArea.module.scss'

const TextArea = (props) => {
	const {...attr} = props

	return (
		<textarea className={styles.input} {...attr}></textarea>
	)
}

export default TextArea