import React from 'react';

import Analytics from "../../img/icons/analytics.svg";
import Codepen from "../../img/icons/codepen.svg";
import Doc from "../../img/icons/doc.svg";
import Facebook from "../../img/icons/facebook.svg";
import Github from "../../img/icons/github.svg";
import Instagram from "../../img/icons/instagram.svg";
import Linkedin from "../../img/icons/linkedin.svg";
import Projects from "../../img/icons/project.svg";
import Twitch from "../../img/icons/twitch.svg";
import Twitter from "../../img/icons/twitter.svg";
import styles from './icon.module.scss';

const Icon = ({ icon }) => {
	let Img = false;

	// eslint-disable-next-line default-case
	switch (icon) {
		case `docs`:
		case `doc`:
			Img = () => (<Doc className={styles.icon} />);
			break;
		case `projects`:
			Img = () => (<Projects className={styles.icon} />);
			break;
		case `analytics`:
		case `chart`:
			Img = () => (<Analytics className={styles.icon} />);
			break;
		case `codepen`:
			Img = () => (<Codepen className={styles.icon} />);
			break;
		case `facebook`:
			Img = () => (<Facebook className={styles.icon} />);
			break;
		case `github`:
			Img = () => (<Github className={styles.icon} />);
			break;
		case `instagram`:
			Img = () => (<Instagram className={styles.icon} />);
			break;
		case `linkedin`:
			Img = () => (<Linkedin className={styles.icon} />);
			break;
		case `twitch`:
			Img = () => (<Twitch className={styles.icon} />);
			break;
		case `twitter`:
			Img = () => (<Twitter className={styles.icon} />);
			break;
	}

	if (!Img) return <p>Error, icon {icon} doesn't exist</p>;

	return <Img />;
};

export default Icon;
