import './ConfirmBtn.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	label?: string;
};

export const ConfirmBtn: React.FC<Props> = (props) => {
	const { label } = props;

	return (
		<button {...props} className="confirmBtn">
			{label}
		</button>
	);
};
