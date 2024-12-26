import React, { ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

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
					<div className="kitLink">{children}</div>
				</NavLink>
			)}
			{!disabled && (
				<NavLink
					to={to}
					className={({ isActive }) => {
						return isActive ? `activeLink ${className}` : className;
					}}
				>
					<div className="kitLink">{children}</div>
				</NavLink>
			)}
		</>
	);
};

export const Link = styled(LinkComponent)`
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
