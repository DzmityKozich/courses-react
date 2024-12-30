import React, { useEffect, useState } from 'react';
import { Img } from '../../models/Img';
import { ImgCard } from '../ImgCard';
import { useImgApi } from '../../lib/api/useImgApi';

export const Gallery: React.FC = () => {
	const [imgs, setImgs] = useState<Img[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const { getImgs } = useImgApi();

	useEffect(() => {
		setIsLoading(true);
		getImgs()
			.then((imgs) => setImgs(imgs))
			.catch((err) => console.error('Error reading images: ', err))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{isLoading ? <h1>Loading...</h1> : imgs.map((img, i) => <ImgCard img={img} key={i}></ImgCard>)}
			</div>
		</>
	);
};
