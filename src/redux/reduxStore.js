import {combineReducers, legacy_createStore, applyMiddleware } from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import sideBarReducer from "./sideBarReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import {thunk} from 'redux-thunk';
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    sideBar: sideBarReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer
})

const store = legacy_createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;