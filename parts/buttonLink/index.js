import React from 'react';

import styles from './buttonLink.module.scss';

const ButtonLink = ({ children, ...attr }) => (
	<a className={styles.link} {...attr}>
		{children}
	</a>
);

export default ButtonLink;
