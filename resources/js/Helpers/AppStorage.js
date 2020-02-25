class AppStorage {

	/* Store Token Method Here.. */
	storeToken(token) {
		localStorage.setItem('token', token);
	}

	/* Store Token User Method Here.. */
	storeUser(user) {
		localStorage.setItem('user', user);
	}

	/* Token or User Store Method Here.. */
	store(token,user) {
		this.storeToken('token');
		this.storeUser('user');
	}

	/* Token or User Clear Method Here.. */
	clear() {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	}

	/* Store Token Get Method Here.. */
	getToken(token) {
		localStorage.getItem('token');
	}

	/* Store Token User Get Method Here.. */
	getUser(user) {
		localStorage.getItem('user');
	}



}

export default AppStorage = new AppStorage();