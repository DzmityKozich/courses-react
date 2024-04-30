import React from 'react';
import { Checkbox, ConfirmBtn, InputControl } from '../controls';
import { useUncoontrolledForm } from '../../hooks/useUncontrolledForm';

export const UncontrolledForm: React.FC = () => {
	const { confirmPasswordRef, emailRef, isAgreeRef, passwordRef, usernameRef, getValue } = useUncoontrolledForm();

	const logResult = () => {
		console.log(getValue());
	};

	return (
		<div className="flex flex-col text-white">
			<div className="text-4xl mb-6">Uncontrolled Components</div>
			<div className="formCard">
				<InputControl type="text" label="username" name="username" placeholder="Enter your username" ref={usernameRef} required />
				<InputControl type="email" label="email" name="email" placeholder="Enter your email" ref={emailRef} required />
				<InputControl type="password" label="password" name="password" placeholder="Enter your password" ref={passwordRef} required />
				<InputControl
					type="password"
					label="confirm password"
					placeholder="Enter your password"
					ref={confirmPasswordRef}
					name="confirmPassword"
					required
				/>
				<Checkbox label="I agree to the terms and conditions." name="isAgree" id="uncontrolled" ref={isAgreeRef} />
				<ConfirmBtn label="Register" onClick={logResult} />
			</div>
		</div>
	);
};
