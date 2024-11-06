import React from 'react'
import s from "./Message.module.css"

const Message = (props) => {
    return (
        <div className={s.message}>
                {props.message} {props.id}
        </div>
    )
}

export default Message