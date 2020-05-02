import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updatePostText, newMessageHandler, addMessage } from './redux/state'

export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App 
                state={state} 
                addPost={addPost} 
                updatePostText={updatePostText} 
                addMessage={addMessage} 
                newMessageHandler={newMessageHandler} 
            />    
        </BrowserRouter>, document.getElementById('root')
    );
    
}
