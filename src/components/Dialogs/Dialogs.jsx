import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {Navigate} from 'react-router-dom'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem Name={dialog.name} id={dialog.id}/>)

    let messageElements = props.dialogsPage.messagesData
        .map(message => <Message message={message.message} id={message.id}/>)

    let addUser = () => {
        props.addUserActionCreator();
    }

    let onNameChange = (e) => {
        let newName = e.target.value;
        props.updateNewUserNameActionCreator(newName);
    }


    let addMessage = () => {
        props.addMessageActionCreator();
    }

    let onMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessageTextActionCreator(newMessage);
    }

    if (!props.isAuth) {
        return <Navigate to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div>
                    <textarea
                        value={props.dialogsPage.newUserName}
                        onChange={onNameChange}
                    />
                </div>
                <div>
                    <button onClick={addUser}>Add user</button>
                </div>
                <div>
                    <textarea
                        value={props.dialogsPage.newMessage}
                        onChange={onMessageChange}
                        placeholder={'Enter message'}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs