export const ACTIONS = {
    RETRIEVE_USER: "retrieve_user",
    REGISTER_USER: "register_user",
    LOGIN_USER: "login_user",
    LOGOUT_USER: "logout_user",
    AUTH_ERROR: 'auth_error'
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'retrieve_user':
            return {authenticated: true, user: action.payload}
            break;
        case 'register_user':
            return {authenticated: true, user: action.payload}
            break;
        case 'login_user':
            return {
                authenticated: true,
                user: action.payload
            }
            break;
        case 'logout_user':
            return {
                authenticated: false,
                user: {}
            }
            break;
        case 'auth_error':
            return {message: action.payload};
            break;
        default:
            return state;
    }
}
//
// module.exports = authReducer;