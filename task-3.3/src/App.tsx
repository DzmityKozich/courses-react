import './App.scss';
import { ControlledForm } from './components/ControlledForm';
import { UncontrolledForm } from './components/UncontrolledForm';

function App() {
	return (
		<div className="flex flex-row gap-10">
			<ControlledForm />
			<UncontrolledForm />
		</div>
	);
}

export default App;
