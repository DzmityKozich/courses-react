import React, { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Theme } from '../../themes/types';

type Props = NavLinkProps & {
	children: ReactNode;
	className?: string;
	disabled?: boolean;
};

const LinkComponent: React.FC<Props> = ({ to, children, disabled, className }) => {
	return (
		<>
			{disabled && (
				<NavLink to={to} onClick={(event) => event.preventDefault()} className={`disabled ${className}`}>
					<div className="storeLink">{children}</div>
				</NavLink>
			)}
			{!disabled && (
				<NavLink
					to={to}
					className={({ isActive }) => {
						return isActive ? `activeLink ${className}` : className;
					}}
				>
					<div className="storeLink">{children}</div>
				</NavLink>
			)}
		</>
	);
};

export const Link = styled(LinkComponent)`
	${({ theme }) => css`
		& .storeLink {
			text-decoration: none;
			color: ${theme.defaultColors.green[500]};
			font-weight: 700;

			&:hover {
				text-decoration: underline;
				/* color: #243573; */
			}

			&:active {
				color: ${theme.defaultColors.green[400]};
			}
		}

		.activeLink .storeLink {
			color: #00ae1c !important;

			&:hover {
				text-decoration: none;
			}
		}

		&.disabled {
			cursor: not-allowed;
			pointer-events: none;
		}

		&.disabled .storeLink {
			color: ${theme.defaultColors.green[600]} !important;
			text-decoration: none !important;
		}
	`}
`;
