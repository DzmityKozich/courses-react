import { useRef } from 'react';

export const useUncoontrolledForm = () => {
	const usernameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const confirmPasswordRef = useRef<HTMLInputElement>(null);
	const isAgreeRef = useRef<HTMLInputElement>(null);

	const getValue = () => {
		return {
			username: usernameRef.current?.value,
			email: emailRef.current?.value,
			password: passwordRef.current?.value,
			confirmPassword: confirmPasswordRef.current?.value,
			isAgree: isAgreeRef.current?.checked,
		};
	};

	return { usernameRef, emailRef, passwordRef, confirmPasswordRef, isAgreeRef, getValue };
};
