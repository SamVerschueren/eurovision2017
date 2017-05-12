// TODO Rename this one to `app.config.ts` and fill in all the credentials
import { AuthProviders, AuthMethods } from 'angularfire2';

export const firebaseConfig = {
	apiKey: '',
	authDomain: '',
	databaseURL: '',
	storageBucket: '',
	messagingSenderId: ''
};

export const firebaseAuthConfig = {
	provider: AuthProviders.Facebook,
	method: AuthMethods.Popup
};
