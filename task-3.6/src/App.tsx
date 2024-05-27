import { Button } from '@mui/material';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import './App.scss';

function App() {
	return (
		<>
			<Button startIcon={<PanToolAltIcon />}>Click on Me!</Button>
		</>
	);
}

export default App;
