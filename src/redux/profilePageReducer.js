import {profileAPI, usersAPI} from "../api/api";

let ADD_POST = 'ADD-POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let SET_STATUS = 'SET_STATUS'

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newName) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newName,
});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatusActionCreator = (status) => ({type: SET_STATUS, status})
export const viewCurrentProfile = (currentUserId) => {
    return (dispatch) => {
        usersAPI.getCurrentProfile(currentUserId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

export const getStatus = (currentUserId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(currentUserId).then(response => {
            /*console.log(response);
            console.log(response.data);*/
            dispatch(setStatusActionCreator(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
                dispatch(setStatusActionCreator(status));
        });
    }
}

let initialState = {
    postsData: [
        {message: "Hi, how are you?", likeCounter: 5},
        {message: "It looks like you?", likeCounter: 14}
    ],
    newPostText: 'google',
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                message: state.newPostText,
                likeCounter: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profilePageReducer;