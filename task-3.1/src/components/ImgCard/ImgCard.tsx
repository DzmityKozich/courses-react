import React from 'react';
import { Img } from '../../models/Img';

import './ImgCard.scss';

type Props = {
	img: Img;
};

export const ImgCard: React.FC<Props> = ({ img }) => {
	return (
		<>
			<div className="img-card bg-cover bg-center cursor-pointer" style={{ backgroundImage: `url(${img.webformatURL})` }}>
				<p className="absolute left-0 bottom-0 w-full text-center bg-black bg-opacity-60 text-white">{img.user}</p>
			</div>
		</>
	);
};