import React from 'react'
import "../Styles/SideBarStyles.css";

const SideBar = () => {
  return (
    <div className='sidebar-cntr'>
      <button className='sidebar-btn'><img src="../vite.svg" alt="" /></button>
      <button className='sidebar-btn'><img src="../assets/fast-forward-x3.svg" alt=""/></button>
    </div>
  )
}

export default SideBar