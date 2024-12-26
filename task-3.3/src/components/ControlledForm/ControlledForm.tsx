import { useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';
import { InputControl, Checkbox, ConfirmBtn } from '@/ui-kit';
import { ValidationResult } from '@/types';

import './ControlledForm.scss';

export const ControlledForm: React.FC = () => {
	const { fields, updateFields } = useForm({ username: '', email: '', confirmPassword: '', isAgree: false, password: '' });
	const { validate } = useValidation();
	const [errors, setErrors] = useState<ValidationResult>({});

	const submit = (event: React.FormEvent) => {
		event.preventDefault();
		console.log(fields);
		console.log(validate(fields));
		setErrors(validate(fields));
	};

	return (
		<div className="flex flex-col text-white">
			<div className="text-4xl mb-6">Controlled Components</div>
			<form noValidate className="formCard" onSubmit={submit}>
				<InputControl
					type="text"
					label="username"
					name="username"
					placeholder="Enter your username"
					value={fields.username}
					onChange={updateFields}
					required
					errors={errors.username}
				/>

				<InputControl
					type="email"
					label="email"
					name="email"
					placeholder="Enter your email"
					value={fields.email}
					onChange={updateFields}
					required
					errors={errors.email}
				/>

				<InputControl
					type="password"
					label="password"
					name="password"
					placeholder="Enter your password"
					value={fields.password}
					onChange={updateFields}
					required
					errors={errors.password}
				/>

				<InputControl
					type="password"
					label="confirm password"
					placeholder="Enter your password"
					name="confirmPassword"
					value={fields.confirmPassword}
					onChange={updateFields}
					required
					errors={errors.confirmPassword}
				/>

				<Checkbox
					label="I agree to the terms and conditions."
					name="isAgree"
					id="checkbox"
					checked={fields.isAgree}
					onChange={updateFields}
				/>
				<ConfirmBtn label="Register" type="submit" />
			</form>
		</div>
	);
};
