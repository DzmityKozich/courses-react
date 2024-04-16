import { useState } from 'react';
import { Img } from '../../models/Img';

import './ImgCard.scss';

interface Props {
	img: Img;
}

export default function ImgCard({ img }: Props) {
	const [size, setSize] = useState<{ width: number; height: number }>();

	const zoomIn = () => {
		setSize({ width: img.webformatWidth, height: img.webformatHeight });
	};

	const zoomOut = () => {
		setSize({ width: 180, height: 135 });
	};

	return (
		<>
			<div
				className="img-card bg-cover bg-center cursor-pointer"
				// onMouseEnter={zoomIn}
				// onMouseLeave={zoomOut}
				style={{ backgroundImage: `url(${img.webformatURL})`, ...size }}
			>
				<p className="absolute left-0 bottom-0 w-full text-center bg-black bg-opacity-60 text-white">{img.user}</p>
			</div>
		</>
	);
}
