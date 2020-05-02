import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

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

    let newMessage = React.createRef()

    const addMessage = () => {
        props.addMessage()
    }

    const newMessageHandler = () => {
        let message = newMessage.current.value
        console.log(message)
        props.newMessageHandler(message)
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
                        ref={newMessage} 
                        value={props.messagesPage.newMessageText}
                    />
                    <br />
                    <button onClick={addMessage}>add Message</button>
                </div>
            </div>
        </div>
    )
}
