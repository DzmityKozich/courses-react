export interface OptimisticHookProps<ET, ST = ET> {
	onError?: (error: Error, variable: ET) => void;
	onSuccess?: (variable: ST) => void;
	onMutation?: (variable: ET) => void;
}
