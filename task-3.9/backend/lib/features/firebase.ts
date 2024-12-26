import dotenv from 'dotenv';
import admin from 'firebase-admin';
import config from '../../firebase-config.json';

dotenv.config();

export const firebase = admin.apps.length
	? admin.app()
	: admin.initializeApp({
			credential: admin.credential.cert(config as admin.ServiceAccount),
	  });
