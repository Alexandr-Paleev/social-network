const ADD_MESSAGE = 'ADD-MESSAGE'
const NEW_MESSAGE_HANDLER = 'NEW-MESSAGE-HANDLER'

const messagesReducer = (state, action) => {
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