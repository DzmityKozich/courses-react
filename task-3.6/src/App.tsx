import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './pages/Layout';

import './App.scss';

const router = createBrowserRouter([
	{
		path: '*',
		element: <Layout />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
