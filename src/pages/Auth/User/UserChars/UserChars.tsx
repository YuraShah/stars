import React from 'react'
import st from './userchars.module.scss'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../../app/hooks'

const UserChars: React.FC = () => {
   const { user } = useAppSelector((state) => state.signinStore)

   return (
      <section>
         <ul className={st.menu}>
            <li className={st.menu__list}>
               <Link to={'add'} className={st.menu__link}>Add category</Link>
            </li>
            <li className={st.menu__list}>
               <Link to={`view/${user?.id!}`} className={st.menu__link}>View category</Link>
            </li>
         </ul>
      </section>
   )
}

export default UserChars
