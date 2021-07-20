import React from 'react';

import * as styles from './faq.module.scss';

const FAQ = ({ children, title, ...attrs }) => (
	<details className={styles.details}>
		<summary className={styles.summary}>{title}</summary>
		{children}
	</details>
);

export default FAQ;
