import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import { TodoList } from './components/TodoList';
import { ApiContext } from './context/ApiContext';
import { TodoApiService } from './services/TodoApiService';
import { ThemeContext, themes } from 'ui-kit';

const queryClient = new QueryClient();
const todoApi = new TodoApiService();

function App() {
	return (
		<ApiContext.Provider value={{ todoApi }}>
			<QueryClientProvider client={queryClient}>
				<ThemeContext.Provider value={themes.light}>
					<TodoList />
				</ThemeContext.Provider>
			</QueryClientProvider>
		</ApiContext.Provider>
	);
}

export default App;
