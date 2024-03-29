import React from 'react';

import * as styles from './textArea.module.scss';

const TextArea = ({ ...attr }) => (
	<textarea className={styles.input} {...attr}></textarea>
);

export default TextArea;
