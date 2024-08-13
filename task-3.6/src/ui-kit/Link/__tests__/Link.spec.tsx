import { vi } from 'vitest';
import { renderWithThemeContext } from '../../../test/common';
import { Link } from '../Link';
import { act, createEvent, fireEvent } from '@testing-library/react';
import React from 'react';

describe('Link test', () => {
	it('should render Link component', () => {
		const { getByText } = renderWithThemeContext(<Link>Link</Link>);

		const link = getByText('Link');

		expect(link).toBeInTheDocument();
	});

	it('should have activeLink class', () => {
		const { getByText } = renderWithThemeContext(<Link active>Link</Link>);

		const link = getByText('Link');

		expect(link.parentElement).toHaveClass('activeLink');
	});

	it('should disable Link', () => {
		const { getByText } = renderWithThemeContext(<Link disabled>Link</Link>);

		const link = getByText('Link');

		expect(link!.parentElement).toHaveClass('disabled');
	});
});
