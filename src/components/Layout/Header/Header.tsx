import React from 'react'
import st from './header.module.scss'
import cn from 'classnames'
import HeaderF from './HeaderF/HeaderF'
import HeaderS from './HeaderS/HeaderS'

const Header:React.FC = () => {
  return (
    <header className={st.header}>
      <div className={cn('wrapper', st.wrapper)}>
         <HeaderF/>
         <HeaderS/>
      </div>
    </header>
  )
}

export default Header
