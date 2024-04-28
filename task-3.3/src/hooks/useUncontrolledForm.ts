import { useEffect, useRef, useState } from 'react';

type FieldsType = {
	username?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	isAgree?: boolean;
};

export const useUncoontrolledForm = (props: FieldsType) => {
	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);
	const isAgreeRef = useRef<HTMLInputElement>(null);

	const [value, setValue] = useState<FieldsType>(props);

	useEffect(() => {
		console.log('object');
		setValue({
			username: usernameRef.current?.value,
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
			confirmPassword: confirmPasswordRef.current?.value,
			isAgree: isAgreeRef.current?.checked,
		});
	}, [
		usernameRef.current?.value,
		emailRef.current?.value,
		passwordRef.current?.value,
		confirmPasswordRef.current?.value,
		isAgreeRef.current?.checked,
	]);

	const getValue = () => {
		return {
			username: usernameRef.current?.value,
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
			confirmPassword: confirmPasswordRef.current?.value,
			isAgree: isAgreeRef.current?.checked,
		};
	};

	return { value, usernameRef, emailRef, passwordRef, confirmPasswordRef, isAgreeRef, getValue };
};
