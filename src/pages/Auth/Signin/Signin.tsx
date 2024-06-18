import React, { useState } from 'react'
import st from './signin.module.scss'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { useForm } from 'react-hook-form'
import { SigninForm } from '../../../types/types'
import { signIn } from '../../../features/signin/signinAPI'
import { Navigate } from 'react-router-dom'

const Signin: React.FC = () => {
   const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>()
   const { user, signinPend, signinRej, signinErr } = useAppSelector((state) => state.signinStore)
   const dispatch = useAppDispatch();
   const [isShowPass, setIsShowPass] = useState<boolean>(false);

   const save = (data: SigninForm): void => {
      const signInData: SigninForm = {
         email: data.email,
         password: data.password
      }
      dispatch(signIn(JSON.stringify(signInData)))
   }


   return (
      <div className={st.container}>
         {!user ? <>
            <h3 className={st.title}>Sign In</h3>
            {signinRej && <p className={st.text__attention}>Connection problem. Try refreshing the page</p>}
            {signinErr !== '' && <p className={st.text__attention}>{signinErr}</p>}
            <form
               className={st.form}
               onSubmit={(handleSubmit(save))}
            >
               <div className={st.form__lab_inp_container}>
                  <label htmlFor="email"><b>E-mail</b></label>
                  {errors.email && <p className={st.form__error_text}>Invalid email address</p>}
                  <input
                     type='text'
                     id="email"
                     {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                  />
               </div>
               <div className={st.form__lab_inp_container}>
                  <label htmlFor="password"><b>Password</b></label>
                  {errors.password && <p className={st.form__error_text}>Invalid password</p>}
                  <div className={st.form__input_box}>
                     <input
                        type={!isShowPass ? "password" : "text"}
                        id="password"
                        {...register('password', { required: true, pattern: /^(?=.*[0-9])(?=.*[a-zա-ֆ])(?=.*[A-ZԱ-Ֆ]).{8,32}$/ })}
                     />
                     <div className={st.form__icon_box}>
                        {!isShowPass ? <i className="fa-solid fa-eye" onClick={() => setIsShowPass(true)}></i>
                           : <i className="fa-solid fa-eye-slash" onClick={() => setIsShowPass(false)}></i>}
                     </div>
                  </div>
               </div>
               <div className={st.form__lab_check_container}>
                  <input
                     type="checkbox"
                     id="rem"
                     {...register('remember')}
                     className={st.form__check}
                  />
                  <label htmlFor="rem" className={st.form__lab_check}>Remember me</label>
               </div>
               <button className={st.form__button}>{signinPend ? 'Sign In...' : 'Sign In'}</button>
            </form>
         </>
            :
            <Navigate to={"/profile"} />
         }
      </div>
   )
}

export default Signin
