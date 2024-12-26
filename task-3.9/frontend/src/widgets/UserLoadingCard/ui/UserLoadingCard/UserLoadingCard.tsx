import { Logo } from 'features/Logo';

export const UserLoadingCard: React.FC = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div className="p-16 shadow bg-white rounded-lg flex flex-col gap-3">
				<Logo />
				<p>
					<span className="text-lg">Welcome!</span> Please wait, user is loading
				</p>
			</div>
		</div>
	);
};
