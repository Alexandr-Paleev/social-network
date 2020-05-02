import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsItems = props.posts.map( p => {
    return (
      <div key={p.id}>
        <Post message={p.message} like={p.like} />
      </div>
    )
  })

  let newPostElement = React.createRef()

  let addPost = () => {
    //props.addPost()
    props.dispatch({type: 'ADD-POST'})
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    //props.updatePostText(text)
    props.dispatch({type: 'UPDATE-POST-TEXT', newText: text})
  }

  return (
      <div className={s.postsBlock}> 
        <h3>My posts</h3>
        <div>
          New post
          <div>
            <div>
              <textarea 
                onChange={onPostChange} 
                ref={newPostElement} 
                value={props.newPostText}
              />
            </div>
            <div>
              <button onClick={addPost}>add Post</button>
            </div>
          </div>
        </div>
        <div className={s.posts}>
          { postsItems }
        </div>
      </div>
  )
}

export default MyPosts
