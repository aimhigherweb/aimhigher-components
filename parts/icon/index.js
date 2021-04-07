import React from 'react';

import Analytics from "../../img/icons/analytics.svg";
import Cancel from "../../img/icons/cancel.svg";
import Close from '../../img/icons/close.svg';
import Codepen from "../../img/icons/codepen.svg";
import Doc from "../../img/icons/doc.svg";
import Error from "../../img/icons/error.svg";
import Facebook from "../../img/icons/facebook.svg";
import Github from "../../img/icons/github.svg";
import Hamburger from '../../img/icons/hamburger.svg';
import InProgress from "../../img/icons/in-progress.svg";
import Instagram from "../../img/icons/instagram.svg";
import Linkedin from "../../img/icons/linkedin.svg";
import PasswordHide from '../../img/icons/password-hide.svg';
import PasswordShow from '../../img/icons/password-show.svg';
import Projects from "../../img/icons/project.svg";
import Success from "../../img/icons/success.svg";
import Twitch from "../../img/icons/twitch.svg";
import Twitter from "../../img/icons/twitter.svg";
import Chevron from '../../img/icons/chevron_down.svg';
import styles from './icon.module.scss';

const Icon = ({ icon, className }) => {
	let Img = false;

	// eslint-disable-next-line default-case
	switch (icon) {
		case `docs`:
		case `doc`:
			Img = (props) => (<Doc {...props} />);
			break;
		case `projects`:
			Img = (props) => (<Projects {...props} />);
			break;
		case `analytics`:
		case `chart`:
			Img = (props) => (<Analytics {...props} />);
			break;
		case `codepen`:
			Img = (props) => (<Codepen {...props} />);
			break;
		case `facebook`:
			Img = (props) => (<Facebook {...props} />);
			break;
		case `github`:
			Img = (props) => (<Github {...props} />);
			break;
		case `instagram`:
			Img = (props) => (<Instagram {...props} />);
			break;
		case `linkedin`:
			Img = (props) => (<Linkedin {...props} />);
			break;
		case `twitch`:
			Img = (props) => (<Twitch {...props} />);
			break;
		case `twitter`:
			Img = (props) => (<Twitter {...props} />);
			break;
		case `password-hide`:
			Img = (props) => (<PasswordHide {...props} />);
			break;
		case `password-show`:
			Img = (props) => (<PasswordShow {...props} />);
			break;
		case `cancel`:
			Img = (props) => (<Cancel {...props} />);
			break;
		case `error`:
		case `warning`:
			Img = (props) => (<Error {...props} />);
			break;
		case `in-progress`:
			Img = (props) => (<InProgress {...props} />);
			break;
		case `completed`:
		case `success`:
			Img = (props) => (<Success {...props} />);
			break;
		case `close`:
			Img = (props) => (<Close {...props} />);
			break;
		case `hamburger`:
			Img = (props) => (<Hamburger {...props} />);
			break;
		case `chevron`:
		case `down`:
			Img = (props) => (<Chevron {...props} />);
			break;
	}

	if (!Img) return <p>Error, icon {icon} doesn't exist</p>;

	return <Img className={`${styles.icon} ${className}`} />;
};

export default Icon;
