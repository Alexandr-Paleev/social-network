const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_HANDLER = 'NEW-MESSAGE-HANDLER'

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessageObj = {
              id: Date.now(), 
              message: state.newMessageText
            }
            state.messages.push(newMessageObj)
            state.newMessageText = ""
            return state
        case NEW_MESSAGE_HANDLER:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const newMessageHandlerActionCreator = message => ({type: NEW_MESSAGE_HANDLER, newMessage: message})

export default messagesReducer