let ADD_USER = 'ADD-USER'
let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_NEW_USER_NAME = 'UPDATE-NEW-USER-NAME'
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const addUserActionCreator = () => ({type: ADD_USER});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewUserNameActionCreator = (newText) => ({
    type: UPDATE_NEW_USER_NAME,
    newName: newText
});
export const updateNewMessageTextActionCreator = (newMessage) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: newMessage
})

let initialState = {
    newUserName: 'google',
    dialogsData: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Katya"},
        {id: 6, name: "Tana"},
    ],
    newMessage: '',
    messagesData: [
        {message: "Bro"},
        {message: "Cringe"},
        {message: "Top"},
        {message: "Krop"},
        {message: "No"},
    ]
}

const dialogsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const newUser = {
                name: state.newUserName,
                id: 0
            };
            return {
                ...state,
                dialogsData: [...state.dialogsData, newUser],
                newUserName: ''
            };

        case ADD_MESSAGE:
            const newMessage = {
                message: state.newMessage,
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessage: ''
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessage
            };

        case UPDATE_NEW_USER_NAME:
            return {
                ...state,
                newUserName: action.newName
            };

        default:
            return state;
    }

}

export default dialogsPageReducer;