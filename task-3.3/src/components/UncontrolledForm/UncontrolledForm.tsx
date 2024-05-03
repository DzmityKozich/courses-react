import React, { useRef, useState } from 'react';
import { Checkbox, ConfirmBtn, InputControl } from '../../ui-kit';
import { useValidation } from '../../hooks/useValidation';
import { ValidationResult } from '../../types';
import { getFormData } from '../../utils/form-utils';

export const UncontrolledForm: React.FC = () => {
	const [errors, setErrors] = useState<ValidationResult>({});
	const { validate } = useValidation();
	const formRef = useRef<HTMLFormElement>(null);

	const submit = (event: React.FormEvent) => {
		event.preventDefault();
		const value = getFormData(formRef.current!);
		setErrors(validate(value));
		console.log(errors);
	};

	return (
		<div className="flex flex-col text-white">
			<div className="text-4xl mb-6">Uncontrolled Components</div>
			<form noValidate className="formCard" onSubmit={submit} ref={formRef}>
				<InputControl type="text" label="username" name="username" placeholder="Enter your username" required errors={errors.username} />

				<InputControl type="email" label="email" name="email" placeholder="Enter your email" required errors={errors.email} />

				<InputControl
					type="password"
					label="password"
					name="password"
					placeholder="Enter your password"
					required
					errors={errors.password}
				/>

				<InputControl
					type="password"
					label="confirm password"
					placeholder="Enter your password"
					name="confirmPassword"
					required
					errors={errors.confirmPassword}
				/>
				<Checkbox label="I agree to the terms and conditions." name="isAgree" id="uncontrolled" />
				<ConfirmBtn label="Register" type="submit" />
			</form>
		</div>
	);
};
