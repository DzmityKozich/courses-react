import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { calendarEventRouter, calendarRouter, userRouter } from './routers';
import { authMiddleware } from './middlewares';

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.use(authMiddleware);

app.use('/calendars', calendarRouter);

app.use('/calendar-events', calendarEventRouter);

app.use('/user', userRouter);

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
