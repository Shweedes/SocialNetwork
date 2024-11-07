import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    email: null,
    userId: null,
    login: null,
    isAuth: false
};

export const setAuthUserData = (email, userId, login) => ({
    type: SET_USER_DATA,
    data: { email, userId, login }
});

export const getAuthDataAboutMe = () => async (dispatch) => {
    try {
        const response = await authAPI.me();
        console.log('API response:', response.data);
        if (response.data.resultCode === 0) {
            const { email, id: userId, login } = response.data.data;
            dispatch(setAuthUserData(email, userId, login));
        }
    } catch (error) {
        console.error('Error fetching auth data:', error);
    }
};

const authReducer = (state = initialState, action) => {
    console.log('Action data:', action.data);
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

export default authReducer;