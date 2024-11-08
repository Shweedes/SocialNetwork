import React from 'react'
import {
    addMessageActionCreator,
    addUserActionCreator,
    updateNewMessageTextActionCreator,
    updateNewUserNameActionCreator
} from "../../redux/dialogsPageReducer";

import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUserActionCreator: () => {
            dispatch(addUserActionCreator());
        },
        updateNewUserNameActionCreator: (newName) => {
            let action = updateNewUserNameActionCreator(newName);
            dispatch(action);
        },
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        },
        updateNewMessageTextActionCreator: (newMessage) => {
            let action = updateNewMessageTextActionCreator(newMessage)
            dispatch(action);
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer