import styled from 'styled-components';
import { Label } from '../Label';
import { ChangeEvent, forwardRef, useEffect, useMemo, useRef } from 'react';
import { TextareaProps } from './types';
import { mergeRefs } from 'react-merge-refs';
import { calculateHeight } from './utils';

const StyledTextarea = styled.textarea`
	border-bottom: 1px #000 solid;
	resize: none;
	outline: none;

	&:focus {
		border-bottom: 1px blue solid;
	}
`;

const ShadowTextarea = styled.textarea`
	visibility: hidden;
	position: absolute;
	overflow: hidden;
	height: 0;
	top: 0;
	left: 0;
	transform: translateZ(0);
`;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, ref) => {
	const { label, id, rows = 2, ...textareaProps } = props;

	const textareaRef = useRef<HTMLTextAreaElement>(null);
	const shadowTextareaRef = useRef<HTMLTextAreaElement>(null);

	const textareaLabel = useMemo(() => {
		return props.required ? `${label}*` : label;
	}, [label, props.required]);

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (textareaRef.current && shadowTextareaRef.current) {
			const height = calculateHeight(textareaRef.current, shadowTextareaRef.current, props.rows || 2);
			console.log(height);
			textareaRef.current.style.height = `${height}px`;
		}

		props.onChange?.(event);
	};

	useEffect(() => {
		console.log('xxx');
		if (textareaRef.current) {
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
		}
	});

	return (
		<div className="w-full flex flex-col items-start">
			{label && <Label htmlFor={id}>{textareaLabel}</Label>}
			<StyledTextarea {...textareaProps} ref={mergeRefs([ref, textareaRef])} id={id} onChange={handleChange} rows={rows}></StyledTextarea>
			<ShadowTextarea ref={shadowTextareaRef} tabIndex={-1} rows={rows} readOnly></ShadowTextarea>
		</div>
	);
});
