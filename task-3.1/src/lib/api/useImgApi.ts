import { useCallback } from 'react';
import { Img } from '../../models/Img';

export const useImgApi = () => {
	const getImgs = useCallback<() => Promise<Img[]>>(async () => {
		const res = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}`);
		return (await res.json()).hits;
	}, []);

	return { getImgs };
};
