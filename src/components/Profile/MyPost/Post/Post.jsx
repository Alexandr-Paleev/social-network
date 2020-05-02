import React from 'react'
import s from './Post.module.css'

export default function Post(props) {
    const {message, like} = props
    
    return (
        <div className={s.item}>
          <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" alt="cat"/>
          {message}
          <div>
            <span>like</span> {like}
          </div>
        </div>
    )
}
