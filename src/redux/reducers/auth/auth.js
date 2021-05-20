const initialState = {
	authenticated: false,
	username: '',
};
const Auth = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return {
				...state,
				authenticated: true,
				username: action.payload.username,
			};
		case 'LOGOUT':
			return {
				...state,
				authenticated: false,
			};
		default:
			return state;
	}
};
export default Auth;
