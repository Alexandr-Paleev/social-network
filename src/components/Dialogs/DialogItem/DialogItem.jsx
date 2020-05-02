import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem = (props) => {
    const {name, id} = props
    let path = `/dialogs/${id}`

    return (
        <div className={s.active}>
            <img src="https://www.meme-arsenal.com/memes/ae1d44253a861f53d95864dd37c55a78.jpg" alt="ava" />
            <NavLink to={path} >{name}</NavLink>
        </div>
    )
}

export default DialogItem