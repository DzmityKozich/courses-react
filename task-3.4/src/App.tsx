import './App.scss';
import { TicTacToeField } from './components/TicTacToeField';

function App() {
	return (
		<>
			<TicTacToeField player="playerO" />
			<TicTacToeField player="playerX" />
		</>
	);
}

export default App;
