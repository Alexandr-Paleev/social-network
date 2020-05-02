import React from 'react'
import s from './Profile.module.css'
import MyPosts from './MyPost/MyPosts'
import Profileinfo from './Profileinfo/Profileinfo'

export default function Profile(props) {

    return (
      <div className={s.content}>
        <Profileinfo />
        <MyPosts 
          posts={props.profilePage.posts} 
          newPostText={props.profilePage.newPostText}
          updatePostText={props.updatePostText}
          addPost={props.addPost} 
        />
      </div>
    )
}
