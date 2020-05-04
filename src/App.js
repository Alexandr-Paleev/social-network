import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom'
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidebar} />
        <div className="app-wrapper-content">
          <Route 
            path="/dialogs" 
            render={()=> {
              return (
                <Dialogs
                  store={props.store}
                  messagesPage={props.state.messagesPage} 
                  dispatch={props.dispatch}
                />
              )
            }} />
          <Route 
            path="/profile" 
            render={()=> {
              return (
                <Profile store={props.store} />
              )
            }} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
  );
}

export default App;
