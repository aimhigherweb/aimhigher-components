import React, { forwardRef } from 'react';

import * as styles from './error.module.scss';

const Error = forwardRef(({ children, ...attr }, ref) => (
	<div ref={ref} className={styles.error} {...attr}>{children}</div>
));

export default Error;
