/*import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {message: "Hi, how are you?", likeCounter: 5},
                {message: "It looks like you?", likeCounter: 14}
            ],
            newPostText: 'google'
        },
        dialogsPage: {
            newUserName: 'google',
            dialogsData: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Anrey"},
            ],
            newMessage: '',
            messagesData: [
                {message: "Bro"},
                {message: "Cringe"},
                {message: "Top"},
                {message: "Krop"},
                {message: "No"},
            ]
        },
        sideBar: {

        }
    },

    _callSubscriber() {

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch: function (action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);
    }
}

export default store
window.store = store*/
