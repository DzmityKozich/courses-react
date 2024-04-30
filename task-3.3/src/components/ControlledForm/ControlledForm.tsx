import { useForm } from '../../hooks/useForm';
import { useValidation } from '../../hooks/useValidation';
import { InputControl, Checkbox, ConfirmBtn } from '../controls';

import './ControlledForm.scss';

export const ControlledForm: React.FC = () => {
	const { fields, updateFields } = useForm({ username: '', email: '', confirmPassword: '', isAgree: false, password: '' });
	const { validate } = useValidation();

	const logResult = () => {
		console.log(fields);
		console.log(validate(fields));
	};

	return (
		<div className="flex flex-col text-white">
			<div className="text-4xl mb-6">Controlled Components</div>
			<div className="formCard">
				<InputControl
					type="text"
					label="username"
					name="username"
					placeholder="Enter your username"
					value={fields.username}
					onChange={updateFields}
					required
				/>
				<InputControl
					type="email"
					label="email"
					name="email"
					placeholder="Enter your email"
					value={fields.email}
					onChange={updateFields}
					required
				/>
				<InputControl
					type="password"
					label="password"
					name="password"
					placeholder="Enter your password"
					value={fields.password}
					onChange={updateFields}
					required
				/>
				<InputControl
					type="password"
					label="confirm password"
					placeholder="Enter your password"
					value={fields.confirmPassword}
					name="confirmPassword"
					onChange={updateFields}
					required
				/>
				<Checkbox
					label="I agree to the terms and conditions."
					name="isAgree"
					id="checkbox"
					checked={fields.isAgree}
					onChange={updateFields}
				/>
				<ConfirmBtn label="Register" onClick={logResult} />
			</div>
		</div>
	);
};
