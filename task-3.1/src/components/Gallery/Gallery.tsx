import React from 'react';
import { Img } from '../../models/Img';
import { ImgCard } from '../ImgCard';

type Props = {
	imgs: Img[];
};

export const Gallery: React.FC<Props> = ({ imgs }) => {
	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{imgs.map((img, i) => (
					<ImgCard img={img} key={i}></ImgCard>
				))}
			</div>
		</>
	);
};
