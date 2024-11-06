import {usersAPI} from "../api/api";

let ADD_POST = 'ADD-POST'
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let SET_USER_PROFILE = 'SET_USER_PROFILE'

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (newName) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: newName,
});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const viewCurrentProfile = (currentUserId) => {
    return (dispatch) => {
        usersAPI.getCurrentProfile(currentUserId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}

let initialState = {
    postsData: [
        {message: "Hi, how are you?", likeCounter: 5},
        {message: "It looks like you?", likeCounter: 14}
    ],
    newPostText: 'google',
    profile: null
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
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}

export default profilePageReducer;