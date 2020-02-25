import Token from './Token.js';
import AppStorage from './AppStorage.js';

class User {

	/* Response After Login Method Here.. and Check access_token, name */
	responseAfterLogin(response) {
		const access_token = response.data.access_token;
		const username = response.data.name;
		if (Token.isValid(access_token)) {
			AppStorage.store(access_token, username);
		}
	}

	/* Token Chack Method Here.. */
	hasToken() {
		const storeToken = localStorage.getItem('token');
		if (storeToken) {
			return Token.isValid(storeToken) ? true : false;
		}
		return false;
	}

	/* LoggedIn Methode Here..  */
	loggedIn() {
		return this.hasToken();
	}

	/* Logout Method Here.. */
	logout() {
		AppStorage.clear();
	}

	/* Name Methode Check Authenticate Name */
	name() {
		if (this.loggedIn) {
			return localStorage.getItem('user');
		}
	}

	/* Id Methode Check Authenticate Id  */
	id() {
		if (this.loggedIn) {
			const payload = Token.payload(localStorage.getItem('token'));
			return payload.sub;
		}
		return false;
	}

}

export default User = new User();