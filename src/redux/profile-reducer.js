const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'

let initialState = {
    posts: [
        {id: 1, message: 'Hello everyone!', like: 5},
        {id: 2, message: 'How are you?', like: 7},
        {id: 3, message: "I'am fine", like: 15},
        {id: 4, message: "What are you doing?", like: 2},
        {id: 5, message: "lalala", like: 51}
    ],
    newPostText: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
              id: Date.now(), 
              message: state.newPostText, 
              like: 0
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostTextActionCreator = text => ({type: UPDATE_POST_TEXT, newText: text})

export default profileReducer