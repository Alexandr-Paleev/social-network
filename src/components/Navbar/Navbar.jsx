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
          <NavLink to="/profile" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" className={({ isActive }) => (isActive ? s.activeLink : undefined)}>Settings</NavLink>
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
