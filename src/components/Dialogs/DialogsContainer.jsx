import React from 'react'
import {
    addMessageActionCreator,
    addUserActionCreator,
    updateNewMessageTextActionCreator,
    updateNewUserNameActionCreator
} from "../../redux/dialogsPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
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

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps),withAuthNavigate)(Dialogs)

/*let AuthNavigateComponent = withAuthNavigate(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthNavigateComponent);*/

export default DialogsContainer