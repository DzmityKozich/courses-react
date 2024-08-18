import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';
import { TodoList } from './components/TodoList';
import { ApiContext } from './context/ApiContext';
import { TodoApiService } from './services/TodoApiService';

const queryClient = new QueryClient();
const todoApi = new TodoApiService();

function App() {
	return (
		<ApiContext.Provider value={{ todoApi }}>
			<QueryClientProvider client={queryClient}>
				<TodoList />
			</QueryClientProvider>
		</ApiContext.Provider>
	);
}

export default App;
