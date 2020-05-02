import React from 'react'
import s from './Profileinfo.module.css'

export default function Profileinfo() {
    return (
      <div>
        <div>
          <img src="https://www.w3schools.com/howto/img_snow_wide.jpg" alt="mountains" />
        </div>
        <div className={s.posts}>
          ava + description
        </div>
      </div>
    )
}