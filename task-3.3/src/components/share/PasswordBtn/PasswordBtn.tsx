import React, { MouseEventHandler } from 'react';

import './PasswordBtn.scss';

type Props = {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	toggle?: boolean;
};

export const PasswordBtn: React.FC<Props> = ({ onClick, toggle }) => {
	// const

	return <button className="passwordBtn" type="button" onClick={onClick}></button>;
};
