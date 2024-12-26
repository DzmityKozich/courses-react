import { auth, authProvider } from './firebase-auth';
import { OAuthCredential, UserInfo } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

class AuthService {
	public getUserProfile(): Promise<UserInfo | null> {
		const { promise, reject, resolve } = Promise.withResolvers<UserInfo | null>();
		auth.onAuthStateChanged((user) => resolve(user), reject);
		return promise;
	}

	public logout(): Promise<void> {
		return auth.signOut();
	}

	public async signInWithPopup(): Promise<OAuthCredential | null> {
		const result = await signInWithPopup(auth, authProvider);
		return GoogleAuthProvider.credentialFromResult(result);
	}
}

export const authService = new AuthService();
