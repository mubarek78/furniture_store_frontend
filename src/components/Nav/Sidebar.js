import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from '../../features/navSettings';
import sublinks from './NavData'

const Sidebar = () => {
  const isSidebarOpen = useSelector((state) => state.settings.isSidebarOpen);
  const dispatch = useDispatch();
 console.log(isSidebarOpen)
  return (
    <div
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className='sidebar'>
        <button className='close-btn' onClick={() => {dispatch(closeSidebar({type: 'settings/openSidebar', payload: false}));}}>
          <FaTimes />
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item, index) => {
            const { links, page } = item
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { url, icon, label } = link
                    return (
                      <a key={index} href={url}>
                        {icon}
                        {label}
                      </a>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar