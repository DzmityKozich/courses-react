import './App.scss';
import { Layout } from './pages/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
