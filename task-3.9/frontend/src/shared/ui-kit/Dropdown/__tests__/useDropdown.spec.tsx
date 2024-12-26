import { renderHook, act } from '@testing-library/react';
import { useDropdown } from '../useDropdown';

describe('useDropdown test', () => {
	it('should return devault values', () => {
		const {
			result: { current },
		} = renderHook(() => useDropdown());
		const { registerTrigger, state, toggleState, triggerElement } = current;

		expect(registerTrigger).toBeTruthy();
		expect(state).toBeTruthy();
		expect(state.open).toBe(false);
		expect(toggleState).toBeTruthy();
		expect(triggerElement).toBeNull();
	});

	it('should toggle state', () => {
		const { result } = renderHook(() => useDropdown());

		expect(result.current.state.open).toBe(false);

		act(() => {
			result.current.toggleState();
		});

		expect(result.current.state.open).toBe(true);
	});
});
