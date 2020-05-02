import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'
import Friends from './Friends'

export default function Navbar(props) {

  const friendsItems = props.state.friends.map(f => {
    return (
      <div key={f.id}>
        <Friends name={f.name} ava={f.ava} />
      </div>
    )
  })

    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>        
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.friends}>
          <h2>Friends</h2>          
          <div className={s.itemFriend}>
            {friendsItems}
          </div>  
        </div>
      </nav>
    )
}
