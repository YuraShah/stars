import React, { useEffect, useRef, useState } from 'react'
import st from './headerf.module.scss'
import cn from 'classnames'
import { Link, NavLink } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { logoutUser } from '../../../../features/signin/signinSlice'
import useWindowDimensions from '../../../../hooks/useWindowDimensions'
import { useWindowScrollPositions } from '../../../../hooks/useWindowScrollPositions'

const HeaderF: React.FC = () => {
  const { user } = useAppSelector((state) => state.signinStore)
  const dispatch = useAppDispatch()
  const { scrollY } = useWindowScrollPositions()

  const burgerMenuRef = useRef<HTMLDivElement>(null)
  const burgerButtonRef = useRef<HTMLDivElement>(null)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(true)

  useEffect(() => {
    const handleClickOutsider = (e: any) => {
      if (!isBurgerMenuOpen && !burgerMenuRef.current?.contains(e.target as Node) && !burgerButtonRef.current?.contains(e.target as Node)) {
        setIsBurgerMenuOpen(true)
      }
    }
    window.addEventListener("click", handleClickOutsider);

    return () => {
      window.removeEventListener('click', handleClickOutsider);
    }
  }, [isBurgerMenuOpen])


  const burgerMenuToggle = (e: any) => {
    e.stopPropagation();
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  const burgerMenuClose = (bool: boolean): void => {
    setIsBurgerMenuOpen(bool);
  }

  const burgerSignOut = () => {
    burgerMenuClose(true)
    dispatch(logoutUser())
  }

  useEffect(() => {
    document.body.classList.toggle('lock', !isBurgerMenuOpen)
  }, [isBurgerMenuOpen])


  return (
    <section className={st.container}>
      <Link to={'/'} className={st.logo__title_container} tabIndex={-1}>
        <div>
          <img src={'/logo.png'} className={st.logo} />
        </div>
        <h2 className={st.logo__title}>Stars</h2>
      </Link>
      <div className={st.sign__container}>
        <div>
          {!user ?
            <NavLink
              to={'/sign-in'}
              className={st.sign__link}
              style={({ isActive }) => isActive ? { backgroundColor: '#d4a41f' } : {}}
            >
              Sign In
            </NavLink> :
            <NavLink
              to={'/profile'}
              className={st.sign__link}
              style={({ isActive }) => isActive ? { backgroundColor: '#d4a41f' } : {}}
              end
            >
              {user && <span>{user.username}</span>}
            </NavLink>
          }
        </div>
        <div>
          {!user ?
            <NavLink
              to={'/register'}
              className={st.sign__link}
              style={({ isActive }) => isActive ? { backgroundColor: '#d4a41f' } : {}}
            >
              Register
            </NavLink> :
            <span
              className={cn(st.sign__link, st.sign__link_span)}
              onClick={() => dispatch(logoutUser())}
            >
              Sign Out
            </span>}
        </div>
      </div>
      <div
        className={st.burger__btn}
        onClick={(e) => burgerMenuToggle(e)}
        ref={burgerButtonRef}
      >
        {isBurgerMenuOpen ?
          <i className={cn("fa-solid fa-bars fa-lg", st.burger__btn_bars)}></i> :
          <i className={cn("fa-solid fa-xmark fa-xl", st.burger__btn_x)}></i>}
      </div>
      <div
        className={cn({
          [st.burger__side]: true,
          [st.burger__side_active]: !isBurgerMenuOpen
        })}
        style={{ top: `${98 - scrollY}px` }}
        ref={burgerMenuRef}
      >
        <ul className={st.burger__menu}>
          <li>User
            <ul className={st.burger__submenu}>
              <li>
                {!user ?
                  <NavLink
                    to={'/sign-in'}
                    onClick={() => burgerMenuClose(true)}
                    style={({ isActive }) => isActive ? { color: '#d4a41f', display: 'block' } : { display: 'block' }}
                  >
                    Sign In
                  </NavLink> :
                  <NavLink
                    to={'/profile'}
                    onClick={() => burgerMenuClose(true)}
                    style={({ isActive }) => isActive ? { color: '#d4a41f', display: 'block' } : { display: 'block' }}
                    end
                  >
                    {user && <span className={st.burger__uspan}>{user.username}</span>}
                  </NavLink>}
              </li>
              <li>
                {!user ? <NavLink
                  to={'/register'}
                  onClick={() => burgerMenuClose(true)}
                  style={({ isActive }) => isActive ? { color: '#d4a41f', display: 'block' } : { display: 'block' }}
                >
                  Register
                </NavLink> :
                  <span
                    onClick={() => burgerSignOut()}
                    style={{ display: 'block' }}
                  >
                    Sign Out
                  </span>}
              </li>
            </ul>
          </li>
          <li>
            <NavLink
              to={'/'}
              onClick={() => burgerMenuClose(true)}
              style={({ isActive }) => isActive ? { color: '#d4a41f', display: 'block' } : { display: 'block' }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/history'}
              end
              onClick={() => burgerMenuClose(true)}
              style={({ isActive }) => isActive ? { color: '#d4a41f', display: 'block' } : { display: 'block' }}
            >
              History
            </NavLink>
          </li>
          <li className={st.burger__menu_list_last}>
            <NavLink
              to={'/about'}
              onClick={() => burgerMenuClose(true)}
              style={({ isActive }) => isActive ? { color: '#d4a41f', display: 'block' } : { display: 'block' }}
            >
              About
            </NavLink>
          </li>
          {user &&
            <li className={st.burger__menu_list_last}>
              <NavLink
                to={'/news'}
                onClick={() => burgerMenuClose(true)}
                style={({ isActive }) => isActive ? { color: '#d4a41f', display: 'block' } : { display: 'block' }}
              >
                News
              </NavLink>
            </li>}
        </ul>
      </div>
    </section>
  )
}

export default HeaderF
