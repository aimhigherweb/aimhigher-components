import React from 'react';

import * as styles from './form.module.scss';

const Form = ({ children, className, ...attr }) => (
	<form {...attr} className={`${styles.form} ${className}`}>
		{children}
	</form>
);

export default Form;
