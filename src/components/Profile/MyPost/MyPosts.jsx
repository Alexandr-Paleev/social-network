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

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updatePostText(text)
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
              <button onClick={onAddPost}>add Post</button>
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
