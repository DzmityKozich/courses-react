import { createContext, useContext } from 'react';
import { TodoApiServiceDef } from '../models/types/api-service/TodoApiServiceDef';

export type ApiContextProps = {
	todoApi: TodoApiServiceDef;
};

export const ApiContext = createContext<ApiContextProps | null>(null);

export const useApiContext = (): ApiContextProps => {
	const api = useContext(ApiContext);

	if (!api) {
		throw new Error('useApiContext has to be used within <ApiContext.Provider>');
	}

	return api;
};
