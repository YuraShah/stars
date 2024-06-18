import React from 'react'
import st from './headers.module.scss'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../../../app/hooks'

const HeaderS: React.FC = () => {
  const { user } = useAppSelector((state) => state.signinStore)

  return (
    <nav className={st.navbar}>
      <ul className={cn(st.dropDown__menu)}>
        <li className={st.dropDown__menu_list}>
          <NavLink
            to={'/'}
            className={st.dropDown__menu_link}
            style={({ isActive }) => isActive ? { backgroundColor: '#d4a41f' } : {}}
          >
            Home
          </NavLink>
        </li>
        <li className={st.dropDown__menu_list}>
          <NavLink
            to={'/history'}
            className={(st.dropDown__menu_link)}
            style={({ isActive }) => isActive ? { backgroundColor: '#d4a41f' } : {}}
          >
            History
          </NavLink>
        </li>
        <li className={st.dropDown__menu_list}>
          <NavLink
            to={'/about'}
            className={st.dropDown__menu_link}
            style={({ isActive }) => isActive ? { backgroundColor: '#d4a41f' } : {}}
          >
            About
          </NavLink>
        </li>
        {user &&
          <li className={st.dropDown__menu_list}>
            <NavLink
              to={'/news'}
              className={st.dropDown__menu_link}
              style={({ isActive }) => isActive ? { backgroundColor: '#d4a41f' } : {}}
            >
              News
            </NavLink>
          </li>}
      </ul>
    </nav>
  )
}

export default HeaderS
