import { useState } from 'react';
import { PageTitle } from '../../components/PageTitle';
import { PageLayout, ThemeContainer } from '../../share';
import { Toast } from '../../ui-kit/Toast';

import './ToastPage.scss';
import { Button } from '../../ui-kit';

const useToast = () => {
	const [open, setOpen] = useState(false);

	const openToast = () => {
		setOpen(true);
	};
	const closeToast = () => {
		setOpen(false);
	};

	return { open, closeToast, openToast };
};

export const ToastPage: React.FC = () => {
	const { open: tctState, closeToast: tctClose, openToast: tctOpen } = useToast();
	const { open: tltState, closeToast: tltClose, openToast: tltOpen } = useToast();
	const { open: trtState, closeToast: trtClose, openToast: trtOpen } = useToast();
	const { open: bltState, closeToast: bltClose, openToast: bltOpen } = useToast();
	const { open: brtState, closeToast: brtClose, openToast: brtOpen } = useToast();
	const { open: bctState, closeToast: bctClose, openToast: bctOpen } = useToast();

	return (
		<ThemeContainer>
			<PageLayout>
				<PageTitle>Toast</PageTitle>
				<div className="grid grid-rows-3 grid-cols-3 place-items-center gap-3">
					<div></div>

					<Button color="secondary" onClick={tctOpen}>
						Open Top Center Toast
					</Button>

					<div></div>

					<Button color="secondary" onClick={tltOpen}>
						Open Top Left Toast
					</Button>

					<div></div>

					<Button color="secondary" onClick={trtOpen}>
						Open Top Right Toast
					</Button>

					<Button color="secondary" onClick={bltOpen}>
						Open Bottom Left Toast
					</Button>

					<div></div>

					<Button color="secondary" onClick={brtOpen}>
						Open Bottom Right Toast
					</Button>

					<div></div>

					<Button color="secondary" onClick={bctOpen}>
						Open Bottom Center Toast
					</Button>
				</div>

				<Toast messge="Content" open={tctState} onClose={tctClose} position="top-center" />

				<Toast messge="Content" open={tltState} onClose={tltClose} position="top-left" />

				<Toast messge="Content" open={trtState} onClose={trtClose} position="top-right" />

				<Toast messge="Content" open={bltState} onClose={bltClose} position="bottom-left" />

				<Toast messge="Content" open={brtState} onClose={brtClose} position="bottom-right" />

				<Toast messge="Content" open={bctState} onClose={bctClose} position="bottom-center" />
			</PageLayout>
		</ThemeContainer>
	);
};
