import classNames from 'classnames';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
	active?: boolean;
};

const LinkComponent: React.FC<Props> = ({ active, children, disabled, className }) => {
	const preventClickEvent = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		console.log(event.preventDefault.toString());
		event.preventDefault();
	};

	if (disabled) {
		return (
			<div onClick={preventClickEvent} className={`disabled ${className}`}>
				<div className="kitLink">{children}</div>
			</div>
		);
	} else {
		return (
			<div className={classNames(className, { activeLink: active })}>
				<div className="kitLink">{children}</div>
			</div>
		);
	}
};

export const Link = styled(LinkComponent)`
	user-select: none;

	${({ theme }) => css`
		& .kitLink {
			text-decoration: none;
			color: ${theme.defaultColors.green[500]};
			font-weight: 700;
			font-size: 1rem;

			&:hover {
				text-decoration: underline;
			}

			&:active {
				color: ${theme.defaultColors.green[400]};
			}
		}

		.activeLink .kitLink {
			color: #00ae1c !important;

			&:hover {
				text-decoration: none;
			}
		}

		&.disabled {
			cursor: not-allowed;
			pointer-events: none;
		}

		&.disabled .kitLink {
			color: ${theme.defaultColors.green[600]} !important;
			text-decoration: none !important;
		}
	`}
`;
