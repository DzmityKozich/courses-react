import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Routes } from './constants';
import { Layout } from '../../pages/Layout';
import { DayCalendar } from '../../pages/DayCalendar';
import { CalendarEventInfo } from '../../pages/CalendarEventInfo';
import { Login } from '../../pages/Login';
import { AuthGuard } from './guards/AuthGuard';
import { UserLoadingCard } from 'widgets/UserLoadingCard';

export const router = createBrowserRouter([
	{
		path: Routes.login,
		element: <Login />,
	},
	{
		path: Routes.default,
		element: <AuthGuard component={<Layout />} loadingComponent={<UserLoadingCard />} />,
		children: [
			{
				path: '',
				element: <Navigate to="/day" replace />,
			},
			{
				path: Routes.day,
				element: <DayCalendar />,
				children: [
					{
						path: Routes.selectedEvent,
						element: <CalendarEventInfo />,
					},
				],
			},
			{
				path: '*',
				element: <Navigate to="/day" />,
			},
		],
	},
]);
