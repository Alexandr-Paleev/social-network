import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addMessageActionCreator, newMessageHandlerActionCreator } from '../../redux/messages-reducer'

export default function Dialogs(props) {

    const dialogsItems = props.messagesPage.dialogs.map( d => {
        return (
            <div key={d.id}>
                <DialogItem name={d.name} id={d.id} />
            </div>
        )
    })

    const messagesItems = props.messagesPage.messages.map( m => {
        return (
            <div key={m.id}>
                <Message message={m.message} />
            </div>
        )
    })

    const addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    const newMessageHandler = (e) => {
        let message = e.target.value
        props.dispatch(newMessageHandlerActionCreator(message))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsItems }
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <textarea 
                        onChange={newMessageHandler} 
                        value={props.messagesPage.newMessageText}
                        placeholder="Enter your message"
                    />
                    <br />
                    <button onClick={addMessage}>add Message</button>
                </div>
            </div>
        </div>
    )
}
