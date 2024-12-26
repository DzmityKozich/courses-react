import { vi } from 'vitest';
import { calculateHeight } from '../utils';

const getComputedStyleSpy = vi.spyOn(global, 'getComputedStyle');

const BIG_SCROLL_HEUGHT = 100;
const MEDIUM_SCROLL_HEUGHT = 40;
const text =
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nihil possimus assumenda aspernatur necessitatibus animi aperiam tempore nobis, ipsa consectetur.';

class Textarea {
	private _value: string;
	private _scrollHeight: number;

	constructor(value: string, scrollHeight: number) {
		this._value = value;
		this._scrollHeight = scrollHeight;
	}

	set scrollHeight(height: number) {
		this._scrollHeight = height;
	}

	get scrollHeight() {
		return this._scrollHeight;
	}

	set value(val: string) {
		this._value = val;
		if (val === text) {
			this._scrollHeight = BIG_SCROLL_HEUGHT;
		}
		if (val === 'text') {
			this._scrollHeight = MEDIUM_SCROLL_HEUGHT;
		}
	}

	get value() {
		return this._value;
	}
}

const mockTextarea = (value: string = ''): HTMLTextAreaElement => {
	return {
		value,
	} as any as HTMLTextAreaElement;
};

const mockShadowTextarea = (value: string = '', scrollHeight: number = 0): HTMLTextAreaElement => {
	return {
		value,
		scrollHeight,
	} as any as HTMLTextAreaElement;
};

const BORDER_HEIGHT = 1;

describe('Textarea utils test', () => {
	it('should return height 0', () => {
		getComputedStyleSpy.mockReturnValueOnce({ height: '0px' } as CSSStyleDeclaration);

		const height = calculateHeight(mockTextarea(), mockShadowTextarea(), 7);

		expect(height).toBe(0);
	});

	it('should return minHeight', () => {
		const rows = 7;
		const scrollHeight = 5;
		getComputedStyleSpy.mockReturnValueOnce({ height: '1px' } as CSSStyleDeclaration);

		const height = calculateHeight(mockTextarea(), mockShadowTextarea(undefined, scrollHeight), rows);

		expect(height).toBe(scrollHeight * rows);
	});

	it('should return minHeight', () => {
		const rows = 7;
		const scrollHeight = 5;
		getComputedStyleSpy.mockReturnValueOnce({ height: '1px' } as CSSStyleDeclaration);

		const height = calculateHeight(mockTextarea('x'), mockShadowTextarea(undefined, scrollHeight), rows);

		expect(height).toBe(rows * scrollHeight + BORDER_HEIGHT);
	});

	it('should return maxHeight', () => {
		const rows = 7;
		const maxRows = 10;
		const scrollHeight = 5;
		const bigHeight = scrollHeight * maxRows + 10;
		getComputedStyleSpy.mockReturnValueOnce({ height: '1px' } as CSSStyleDeclaration);

		const height = calculateHeight(mockTextarea(text), new Textarea('', scrollHeight) as any, rows);

		expect(height).toBe(scrollHeight * 10 + BORDER_HEIGHT);
		expect(height).toBeLessThan(bigHeight);
	});

	it('should return actual height', () => {
		const rows = 7;
		const maxRows = 10;
		const scrollHeight = 5;
		const bigHeight = scrollHeight * maxRows + 10;
		getComputedStyleSpy.mockReturnValueOnce({ height: '1px' } as CSSStyleDeclaration);

		const height = calculateHeight(mockTextarea('text'), new Textarea('', scrollHeight) as any, rows);

		expect(height).toBe(MEDIUM_SCROLL_HEUGHT + BORDER_HEIGHT);
		expect(height).toBeLessThan(bigHeight);
	});
});
