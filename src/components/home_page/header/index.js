import React from 'react'
import './header.css'

import { Menu } from '@material-ui/icons'
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
  return (
    <div className="header-section">
      <div className="left">
        <NotificationsIcon style={{ fontSize: 40 }} />
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