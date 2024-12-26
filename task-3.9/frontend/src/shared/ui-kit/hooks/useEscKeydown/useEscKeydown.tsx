import { useCallback, useEffect, useRef } from 'react';

export const useEscKeydown = (handler: (event: any) => void) => {
	const documentRef = useRef(document);

	const escHandler = useCallback(
		(event: KeyboardEvent) => {
			const isEsc = event.key === 'Escape';
			if (isEsc) {
				handler(event);
			}
		},
		[handler]
	);

	useEffect(() => {
		documentRef.current?.addEventListener('keydown', escHandler);

		return () => {
			documentRef.current?.removeEventListener('keydown', escHandler);
		};
	}, []);
};
