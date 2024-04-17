import { Img } from '../models/Img';
import ImgCard from './ImgCard/ImgCard';

export function Gallery({ imgs }: { imgs: Img[] }) {
	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
				{imgs.map((img, i) => (
					<ImgCard img={img} key={i}></ImgCard>
				))}
			</div>
		</>
	);
}
