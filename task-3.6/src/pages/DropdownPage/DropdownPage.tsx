import React from 'react';
import { PageDescription, PageLayout, ThemeContainer } from '../../share';
import { PageTitle } from '../../share/PageTitle';
import { Dropdown, DropdownButton } from '../../ui-kit/Dropdown';
import { Menu, MenuItem } from '../../ui-kit/Menu';
import { ArrowDown } from '../../ui-kit/icons/ArrowDown';

import './DropdownPage.scss';

export const DropdownPage: React.FC = () => {
	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Dropdown</PageTitle>

				<PageDescription>
					You can close this Dropdown with <kbd>Esc</kbd> button and by click outside of menu element
					<br />
					Doropdown and Select are using Popover Component
				</PageDescription>

				<div className="flex justify-center items-center flex-col gap-8">
					<div className="w-full flex flex-col items-center gap-2">
						<p>Simple Dropdown</p>
						<Dropdown>
							<DropdownButton color="secondary" endIcon={<ArrowDown color="inherit" />}>
								Click Me!
							</DropdownButton>
							<Menu>
								<MenuItem
									onClick={() => {
										console.log('first item');
									}}
								>
									1
								</MenuItem>
								<MenuItem
									onClick={() => {
										console.log('second item');
									}}
								>
									2
								</MenuItem>
								<MenuItem
									onClick={() => {
										console.log('3th item');
									}}
								>
									3
								</MenuItem>
							</Menu>
						</Dropdown>
					</div>

					<div className="w-full flex flex-col items-center gap-2">
						<p>Dropdown inside container</p>
						<div className="clipping-container">
							<Dropdown>
								<DropdownButton color="secondary" endIcon={<ArrowDown color="inherit" />}>
									Click Me!
								</DropdownButton>
								<Menu>
									<MenuItem
										onClick={() => {
											console.log('first item');
										}}
									>
										1
									</MenuItem>
									<MenuItem
										onClick={() => {
											console.log('second item');
										}}
									>
										2
									</MenuItem>
									<MenuItem
										onClick={() => {
											console.log('3th item');
										}}
									>
										3
									</MenuItem>
								</Menu>
							</Dropdown>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione atque placeat sapiente recusandae rerum, alias sunt harum
								iure quo cum neque obcaecati quae consectetur dicta similique blanditiis sint quibusdam, excepturi repellendus saepe nemo
								laborum est aperiam? Magnam, in! Ullam hic alias nam aut tempore sed dolore iste necessitatibus, vitae, quas odio expedita.
								Cumque harum nisi eius sunt maiores similique repellat, quis odio incidunt dicta ab necessitatibus hic, quidem quibusdam
								ipsa eveniet. Nisi optio autem, repudiandae sed temporibus illum sunt quidem delectus maxime excepturi blanditiis voluptate
								quasi ducimus. Excepturi repellat soluta dignissimos, deserunt, quis reprehenderit libero perspiciatis fuga error sapiente
								ipsam iure in hic ad officiis voluptatibus quo facilis! Qui illum nemo iste numquam ducimus sint quam maiores assumenda
								minus veritatis facilis error necessitatibus ex, aliquid iusto aut fuga reiciendis possimus soluta dolore. Saepe tempora non
								sequi ad temporibus nihil dolor reiciendis cumque? Nulla, minus! Deleniti id laudantium sapiente veniam praesentium!
							</p>
						</div>
					</div>
				</div>
			</PageLayout>
		</ThemeContainer>
	);
};
