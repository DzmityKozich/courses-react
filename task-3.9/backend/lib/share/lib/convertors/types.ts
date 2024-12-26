import { firestore } from 'firebase-admin';

export interface FirebaseConvertor<T, U = T> {
	toFirestore: (value: T) => firestore.DocumentData;
	fromFirestore: (snapshot: firestore.QueryDocumentSnapshot<U>) => T;
}
