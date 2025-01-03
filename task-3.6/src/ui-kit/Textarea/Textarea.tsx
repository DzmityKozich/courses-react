import { Label } from '../Label';
import { ChangeEvent, forwardRef, useEffect, useMemo, useRef } from 'react';
import { TextareaProps } from './types';
import { mergeRefs } from 'react-merge-refs';
import { calculateHeight } from './utils';
import classNames from 'classnames';
import { ShadowTextarea, StyledTextarea } from './styled-elements';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
	const { label, id, helpText, error, rows = 2, ...textareaProps } = props;

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const shadowTextareaRef = useRef<HTMLTextAreaElement>(null);

	const textareaLabel = useMemo(() => {
		return props.required ? `${label}*` : label;
	}, [label, props.required]);

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		syncHeight();
		props.onChange?.(event);
	};

	useEffect(() => {
		syncHeight();
	});

	const syncHeight = () => {
		if (textareaRef.current && shadowTextareaRef.current) {
			const height = calculateHeight(textareaRef.current, shadowTextareaRef.current, props.rows || 2);
			textareaRef.current.style.height = `${height}px`;
		}
	};

	return (
		<div className="w-full flex flex-col items-start">
			{label && (
				<Label htmlFor={id} className={classNames('mb-2', { disabled: textareaProps.disabled })}>
					{textareaLabel}
				</Label>
			)}
			<StyledTextarea
				{...textareaProps}
				ref={mergeRefs([ref, textareaRef])}
				id={id}
				onChange={handleChange}
				rows={rows}
				className={classNames({ error })}
			></StyledTextarea>
			<ShadowTextarea ref={shadowTextareaRef} tabIndex={-1} rows={rows} readOnly></ShadowTextarea>
			{helpText && <div className={classNames('text-xs font-semibold mt-1', { 'text-red-500': error })}>{helpText}</div>}
		</div>
	);
});
