let rerenderEntireTree = () => {
  console.log("State changed")
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello everyone!', like: 5},
            {id: 2, message: 'How are you?', like: 7},
            {id: 3, message: "I'am fine", like: 15},
            {id: 4, message: "What are you doing?", like: 2},
            {id: 5, message: "lalala", like: 51}
        ],
        newPostText: ""
    },
    messagesPage: {
        dialogs: [
          {id: 1, name: "Dimych"},
          {id: 2, name: "Petya"},
          {id: 3, name: "Sveta"},
          {id: 4, name: "Kolya"},
          {id: 5, name: "Sasha"},
          {id: 6, name: "Katya"}
        ],

        messages: [
          {id: 1, message: "Hi"},
          {id: 2, message: "How are you?"},
          {id: 3, message: "Yo"},
          {id: 4, message: "Yo"},
          {id: 5, message: "Yo"},
        ],
        newMessageText: ""
    },
    sidebar: {
      friends: [
        {id: 1, name: "Andrew", ava: "https://вайбер-ок.рф/wp-content/uploads/2018/06/2-min.jpg"},
        {id: 2, name: "Sasha", ava: "https://i.pinimg.com/originals/c0/b7/7f/c0b77faeb2cb3e67fd1b423c4535f6c3.jpg"},
        {id: 3, name: "Sveta", ava: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/04/09/img_20200409_161212-350x250.jpg"}
      ]
    }
}

window.state = state

export const addPost = () => {
    const newPost = {
      id: Date.now(), 
      message: state.profilePage.newPostText, 
      like: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)
}

export const updatePostText = newText => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export const addMessage = () => {
  const newMessageObj = {
    id: Date.now(), 
    message: state.messagesPage.newMessageText
  }
  state.messagesPage.messages.push(newMessageObj)
  state.messagesPage.newMessageText = ""
  rerenderEntireTree(state)
}

export const newMessageHandler = newMessage => {
    state.messagesPage.newMessageText = newMessage
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state