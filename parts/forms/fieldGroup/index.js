import React from 'react';

import Legend from '../legend';
import * as styles from './fieldGroup.module.scss';

const FieldGroup = ({ children, legend, ...attr }) => (
	<fieldset {...attr} className={styles.group}>
		<Legend>{legend}</Legend>
		<div className={styles.container}>{children}</div>
	</fieldset>
);

export default FieldGroup;
