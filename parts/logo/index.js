import React from 'react';

import AimHigher from '../../img/logo.svg';
import * as styles from './logo.module.scss';

const Logo = ({ version }) => <AimHigher className={styles.logo} data-version={version} />;

export default Logo;
