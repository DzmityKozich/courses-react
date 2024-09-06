export type OptimisticMutateProps = {
	onError?: (error: Error, variables: any, context?: any | undefined) => Promise<unknown> | unknown;
	onSettled?: (data: any | undefined, error: any | null, variables: any, context?: any) => Promise<unknown> | unknown;
};
