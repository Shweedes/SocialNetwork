import {usersAPI} from "../api/api";

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setAuthUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthData = () => {
    return (dispatch) => {
        usersAPI.getAuthData().then((response) => {
            if(response.data.resultCode === 0) {
                let {userId, email, login} = response.data.data;
                dispatch(setAuthUserData(userId, email, login))
            }
        });
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state, ...action.data, isAuth: true
            }
        default:
            return state;
    }
}

export default authReducer;