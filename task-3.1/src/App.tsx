import './App.scss';
import { Gallery } from './components/Gallery';
import imgs from './assets/imgs.json';

function App() {
	return (
		<>
			<Gallery imgs={imgs.hits}></Gallery>
		</>
	);
}

export default App;
