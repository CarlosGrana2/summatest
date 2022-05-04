import React from 'react';
import '@styles/Button.scss';

const Button = ({name, styles, click}) => {
	return (
			<button type="submit" className={styles} onClick={click} >{name}</button>
	);
}

export default Button;