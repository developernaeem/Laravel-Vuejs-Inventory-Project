class Token {

	/* Token Valid Method Here.. */
	isValid(token) {
		const payload = this.payload(token);
		if (payload) {
			return payload.iss == "http://127.0.0.1:8000/api/auth/login" || "http://127.0.0.1:8000/api/auth/register" ? true : false;
		}
		return false;
	}

	/* Payload Method Here.. */
	payload() {
		const payload = token.split('.')[1];
		return this.decode(payload);
	}

	/* Token Decode Method Here.. */
	decode(payload) {
		return JSON.parse(atob(payload));
	}










}

export default Token = new Token();