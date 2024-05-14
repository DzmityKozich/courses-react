import './App.scss';
import { ItemCard } from './components/ItemCard';

function App() {
	return (
		<>
			<ItemCard
				imgSrc="src/assets/chair_1.png"
				price={3500}
				text="Gaming Chair, Ergonomic Swivel Chair Chair with Footrest, Executive Chair with Arms and Wheels Adjustableng
					Load-Beacapacity and with Massage Multifunctional Chair/Black"
				title="RILOOP Computer Chair,"
			></ItemCard>
		</>
	);
}

export default App;
