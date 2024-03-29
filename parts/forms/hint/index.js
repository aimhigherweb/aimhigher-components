import React from 'react';

import * as styles from './hint.module.scss';

const Hint = ({ children, ...attr }) => (
	<div className={styles.hint} {...attr}>{children}</div>
);

export default Hint;
