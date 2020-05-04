import React from 'react'
import s from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo'
import MyPostsContainer from './MyPost/MyPostsContainer'

export default function Profile(props) {

    return (
      <div className={s.content}>
        <Profileinfo />
        <MyPostsContainer store={props.store} />
      </div>
    )
}
