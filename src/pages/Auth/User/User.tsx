import React from 'react'
import { Outlet } from 'react-router-dom'
import st from './user.module.scss'

const User: React.FC = () => {
   return (
      <section className={st.container}>
         <Outlet />
      </section>
   )
}

export default User
