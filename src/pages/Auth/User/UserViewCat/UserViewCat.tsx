import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { getViewCats } from '../../../../features/cats/catsAPI'
import { Link, Navigate, useParams } from 'react-router-dom'
import st from './usercatview.module.scss'

const UserViewCat: React.FC = () => {
   const { uid } = useParams()
   const dispatch = useAppDispatch()
   const { catData, catPending, catRej, catResp } = useAppSelector(state => state.catsStore)
   const { user } = useAppSelector((state) => state.signinStore)

   useEffect(() => {
      if (!uid) return
      dispatch(getViewCats(JSON.stringify(uid)))
   }, [uid])

   if ((uid && +uid !== user?.id) || !user) {
      return <Navigate to={"/"} />
   } else {
      return (
         <section>
            <h3 className={st.title}>View Category</h3>
            {catPending ? <p className={st.text__err}>Loading...</p> :
               catRej ? <p className={st.text__err}>Connection problem. Try refreshing the page</p> :
                  catResp && catData.length === 0 ? <p className={st.text__not}>No categories added</p> :
                     catResp && catData.length > 0 &&
                     <ol className={st.menu}>
                        {catData.map((data) =>
                        (
                           <li 
                           key={data.user_cat_id}
                           className={st.menu__list}
                           >
                              {data.cat === 1 ? 'Astronomy' : data.cat === 2 ? 'Astrophysics' : 'Cosmology'}
                              </li>
                        )
                        )}
                     </ol>
            }
         </section>
      )
   }
}

export default UserViewCat
