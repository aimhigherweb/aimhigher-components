import React, { Fragment } from 'react';

import Label from '../label';

import styles from './checkbox.module.scss';

const Checkbox = ({ children, ...attr }) => {
	attr.id = attr.id || attr.name;

	return (
		<Fragment>
			<input type="checkbox" className={`${styles.input} ${styles[`input_${attr.type}`]}`} {...attr} />
			<Label className={`${styles.label} ${styles[`label_${attr.type}`]}`} htmlFor={attr.id}>{children}</Label>
		</Fragment>
	);
};

export default Checkbox;
