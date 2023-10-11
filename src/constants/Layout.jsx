import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components';

const Layout = () => {
  return (
    <div className="flex flex-col overflow-hidden">
        <Navbar />
        <div className="flex-1">
            <div>{ < Outlet/> }</div>
        </div>
        
    </div>
  )
}

export default Layout;