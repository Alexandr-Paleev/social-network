import React from 'react'
import s from './Friends.module.css'

export default function Friends(props) {

    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/86/e9/da/86e9da58ae38649d3d7de22f0d3473c5.png" alt="" />
            <div className={s.name}>
                {props.name}
            </div>            
        </div>
    )
}
