import React from 'react';

import * as styles from './form.module.scss';

const Form = ({ children, ...attr }) => (
	<form {...attr} className={styles.form}>
		{children}
	</form>
);

export default Form;
