import './ConfirmBtn.scss';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	label?: string;
};

export const ConfirmBtn: React.FC<Props> = (props) => {
	const { label, ...btnProps } = props;

	return (
		<button {...btnProps} className="confirmBtn">
			{label}
		</button>
	);
};
