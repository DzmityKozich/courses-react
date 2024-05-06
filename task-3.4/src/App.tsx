import './App.scss';
import { Playgroud } from './components/Playground';
import { TicTacToeField } from './components/TicTacToeField';

function App() {
	return (
		<div className="flex flex-row gap-[100px]">
			<Playgroud player="playerX" />
			<Playgroud player="playerO" />
		</div>
	);
}

export default App;
