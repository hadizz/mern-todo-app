import React from 'react'
import './style.css'

import { Menu } from '@material-ui/icons'
// import NotificationsIcon from '@material-ui/icons/Notifications';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';

function Header() {
  return (
    <div className="header-section">
      <div className="left">
        <DeleteSweepIcon onClick={ () => localStorage.clear() } style={{ fontSize: 40, cursor: 'pointer' }} />
      </div>
      <div className="right">
        <div className="info">
          <span className="title">تسک‌ها</span>
          <span className="description">چه برنامه‌ای دارید؟</span>
        </div>
        <Menu style={{ fontSize: 50 }} />
      </div>
    </div>
  )
}

export default Header;