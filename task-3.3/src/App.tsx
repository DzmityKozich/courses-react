import { useRef } from 'react';
import './App.scss';
import { InputControl } from './components/controls/Input';

function App() {
	const a = useRef<HTMLInputElement | null>(null);

	const onCahnge = (value: string) => {
		console.log(value);
	};

	const onClick = () => {
		console.log(a.current?.value);
	};

	return (
		<>
			{/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
			<InputControl
				onChange={({ target }) => onCahnge(target.value)}
				ref={a}
				placeholder="Enter your email"
				label="username"
			></InputControl>
			{/* <button onClick={onClick}>CLICK ME</button> */}
		</>
	);
}

export default App;
