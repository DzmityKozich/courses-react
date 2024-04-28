import { InputControl, Checkbox } from '../controls';
import { ConfirmBtn } from '../controls/ConfirmBtn';

import './UncontrolledForm.scss';

export const UncontrolledForm: React.FC = () => {
	return (
		<div className="formCard">
			<InputControl type="text" label="username" placeholder="Enter your username" required />
			<InputControl type="email" label="email" placeholder="Enter your email" required />
			<InputControl type="password" label="password" placeholder="Enter your password" required />
			<InputControl type="password" label="confirm password" placeholder="Enter your password" required />
			<Checkbox label="I agree to the terms and conditions." id="checkbox" />
			<ConfirmBtn label="Register" />
		</div>
	);
};
