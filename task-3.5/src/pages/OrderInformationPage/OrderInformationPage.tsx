import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import { PageTitle, StoreLinkBtn } from '../../share';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';
import { useStoreItems } from '../../hooks/useStoreItems';

import './OrderInformationPage.scss';
import { OrderItemCard } from '../../components/OrderItemCard';

export const OrderInformationPage: React.FC = () => {
	const { items } = useStoreItems();

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
				<Card>
					<CardHeader
						title="Contact information"
						titleTypographyProps={{ color: '#243573', fontSize: '1rem', fontWeight: 700 }}
						avatar={<PersonIcon color="success" />}
					/>
					<CardContent>Emily Andersonemily.anderson@example.com(555) 123-4567</CardContent>
				</Card>

				<Card>
					<CardHeader
						title="Shipment information"
						avatar={<LocalShippingIcon color="success" />}
						titleTypographyProps={{ color: '#243573', fontSize: '1rem', fontWeight: 700 }}
					/>
					<CardContent>123 Elm Street, Apt 4BSpringfield, Illinois, 62701United States</CardContent>
				</Card>

				<Card className="col-span-2">
					<CardHeader
						title="Order summary"
						avatar={<InfoIcon color="success" />}
						titleTypographyProps={{ color: '#243573', fontSize: '1rem', fontWeight: 700 }}
					/>
					<CardContent>
						{items.splice(0, 3).map((item) => (
							<OrderItemCard key={item.id} item={item} amount={5} />
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
									<p>$000</p>
									<p>$000</p>
									<p>$000</p>
									<p className="font-bold">$000</p>
								</Box>
							</Box>
						</Box>
					</CardContent>
				</Card>
			</div>

			<StoreLinkBtn to="/">Continue shopping</StoreLinkBtn>
		</div>
	);
};
