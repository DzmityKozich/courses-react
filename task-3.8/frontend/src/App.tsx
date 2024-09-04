import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import { TodoList } from './components/TodoList';
import { ApiContext } from './context/ApiContext';
import { TodoApiService } from './services/TodoApiService';
import { ThemeContext, themes } from 'ui-kit';
import { ToastContext } from './context/ToastContext';
import { ToastTrigger } from './services/ToastTrigger';
import { ToastHolder } from './components/ToastHolder';

const queryClient = new QueryClient();
const todoApi = new TodoApiService();
const toastTrigger = new ToastTrigger();

function App() {
	return (
		<ApiContext.Provider value={{ todoApi }}>
			<QueryClientProvider client={queryClient}>
				<ThemeContext.Provider value={themes.light}>
					<ToastContext.Provider value={{ toastTrigger }}>
						<ToastHolder />
						<TodoList />
					</ToastContext.Provider>
				</ThemeContext.Provider>
			</QueryClientProvider>
		</ApiContext.Provider>
	);
}

export default App;
