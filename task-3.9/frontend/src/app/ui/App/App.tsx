import { RouterProvider } from 'react-router-dom';
import { router } from '../../routes';
import { lightTheme, ToastContextProvider } from 'shared/ui-kit';
import { ThemeContext } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.scss';

const queryClient = new QueryClient();

export function App() {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<ThemeContext.Provider value={lightTheme}>
					<ToastContextProvider>
						<RouterProvider router={router} />
					</ToastContextProvider>
				</ThemeContext.Provider>
			</QueryClientProvider>
		</Provider>
	);
}
