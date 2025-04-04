import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { PageTitle, StoreCard, StoreLinkBtn } from '../../share';
import { Box, CardContent, CardHeader } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';
import { OrderItemCard } from '../../components/OrderItemCard';
import { useCart } from '../../hooks/useCart';
import { contactFormText, shipmentFormText } from '../../utils/form-data';
import { useLocation } from 'react-router-dom';

import './OrderInformationPage.scss';

export const OrderInformationPage: React.FC = () => {
	const {
		state: { shipmentFormValue, conatctFormValue },
	} = useLocation();
	const { items, sum } = useCart(({ items, sum }) => ({ items, sum }));

	return (
		<div className="px-[15rem] mb-8">
			<div className="w-full flex flex-col items-center gap-4 text-[#243573]">
				<div className="circle">
					<CheckIcon color="inherit" fontSize="large" />
				</div>

				<PageTitle title="Thank you for your order!" />

				<p>The order confirmation email with details of your order and a link to track its progress has been sent to your email address.</p>

				<strong>Your order # is 000000003 - PENDING</strong>

				<div className="text-gray-600">Order Date: 6 Nov 2023</div>
			</div>

			<div className="grid grid-cols-2 grid-rows-[auto_auto] gap-8 my-8">
				<StoreCard>
					<CardHeader
						title="Contact information"
						titleTypographyProps={{ color: '#243573', fontSize: '1rem', fontWeight: 700 }}
						avatar={<PersonIcon color="success" />}
					/>
					<CardContent>
						{contactFormText(conatctFormValue)
							.split('\n')
							.map((text, i) => (
								<p key={i}>{text}</p>
							))}
					</CardContent>
				</StoreCard>

				<StoreCard>
					<CardHeader
						title="Shipment information"
						avatar={<LocalShippingIcon color="success" />}
						titleTypographyProps={{ color: '#243573', fontSize: '1rem', fontWeight: 700 }}
					/>
					<CardContent>
						{shipmentFormText(shipmentFormValue)
							.split('\n')
							.map((text, i) => (
								<p key={i}>{text}</p>
							))}
					</CardContent>
				</StoreCard>

				<StoreCard className="col-span-2">
					<CardHeader
						title="Order summary"
						avatar={<InfoIcon color="success" />}
						titleTypographyProps={{ color: '#243573', fontSize: '1rem', fontWeight: 700 }}
					/>
					<CardContent>
						{items.map(({ item, amount }) => (
							<OrderItemCard key={item.id} item={item} amount={amount} />
						))}

						<Box sx={{ paddingTop: '0.75rem', width: '50%' }}>
							<Box className="grid grid-cols-2">
								<Box className="">
									<p>Subtotal:</p>
									<p>Shipping & Handling:</p>
									<p>Tax:</p>
									<p className="font-bold">Grand Total:</p>
								</Box>
								<Box>
									<p>${sum().toFixed(2)}</p>
									<p>$0.00</p>
									<p>$0.00</p>
									<p className="font-bold">${sum().toFixed(2)}</p>
								</Box>
							</Box>
						</Box>
					</CardContent>
				</StoreCard>
			</div>

			<StoreLinkBtn to="/">Continue shopping</StoreLinkBtn>
		</div>
	);
};
