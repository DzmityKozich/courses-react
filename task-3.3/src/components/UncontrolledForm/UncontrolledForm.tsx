import React, { useState } from 'react';
import { Checkbox, ConfirmBtn, ControlField, InputControl } from '../controls';
import { useUncoontrolledForm } from '../../hooks/useUncontrolledForm';
import { useValidation } from '../../hooks/useValidation';
import { ValidationResult } from '../../types';

export const UncontrolledForm: React.FC = () => {
	const { confirmPasswordRef, emailRef, isAgreeRef, passwordRef, usernameRef, getValue } = useUncoontrolledForm();
	const [errors, setErrors] = useState<ValidationResult>({});
	const { validate } = useValidation();

	const submit = (event: React.FormEvent) => {
		event.preventDefault();
		const value = getValue();
		console.log(value);
		setErrors(validate(value));
	};

	return (
		<div className="flex flex-col text-white">
			<div className="text-4xl mb-6">Uncontrolled Components</div>
			<form noValidate className="formCard" onSubmit={submit}>
				<ControlField
					control={
						<InputControl type="text" label="username" name="username" placeholder="Enter your username" ref={usernameRef} required />
					}
					errors={errors.username}
				/>

				<ControlField
					control={<InputControl type="email" label="email" name="email" placeholder="Enter your email" ref={emailRef} required />}
					errors={errors.email}
				/>

				<ControlField
					control={
						<InputControl type="password" label="password" name="password" placeholder="Enter your password" ref={passwordRef} required />
					}
					errors={errors.password}
				/>

				<ControlField
					control={
						<InputControl
							type="password"
							label="confirm password"
							placeholder="Enter your password"
							ref={confirmPasswordRef}
							name="confirmPassword"
							required
						/>
					}
					errors={errors.confirmPassword}
				/>
				<Checkbox label="I agree to the terms and conditions." name="isAgree" id="uncontrolled" ref={isAgreeRef} />
				<ConfirmBtn label="Register" type="submit" />
			</form>
		</div>
	);
};
