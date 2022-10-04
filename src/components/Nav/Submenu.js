import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
// import { useGlobalContext } from './context'

const Submenu = () => {

  const isSubmenuOpen = useSelector((state) => state.settings.isSubmenuOpen);
  const location = useSelector((state) => state.settings.location);
  const page = useSelector((state) => state.settings.page.page);
  const links = useSelector((state) => state.settings.page.links);
  console.log(page)
  // const {
  //   isSubmenuOpen,
  //   page: { page, links },
  //   location,
  // } = useGlobalContext()
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    setColumns('col-2')
    const submenu = container.current
    const { center, bottom } = location
    submenu.style.left = `${center}px`
    submenu.style.top = `${bottom}px`
    console.log(links)
    if (links.length === 3) {
      setColumns('col-3')
    }
    if (links.length > 3) {
      setColumns('col-4')
    }
  }, [page, location, links])
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
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
      </section>
    </aside>
  )
}

export default Submenu
