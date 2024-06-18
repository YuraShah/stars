import React, { useEffect, useRef, useState } from 'react';
import st from './register.module.scss';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from 'react-google-recaptcha';
import { RegForm } from '../../../types/types';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { registerUser } from '../../../features/register/registerAPI';

const Register: React.FC = () => {
   const dispatch = useAppDispatch()
   const [errorMsg, setErrorMsg] = useState<string | null>(null);
   const [isPassShow, setIsPassShow] = useState<boolean>(false);
   const [isChPassShow, setIsChPassShow] = useState<boolean>(false);
   const { register, handleSubmit, formState: { errors }, reset } = useForm<RegForm>()
   const { registerData, registerPending, registerRej } = useAppSelector((state) => state.registerStore)

   const save = (data: RegForm) => {
      if (data.password != data.chpassword) {
         setErrorMsg("Passwords don't match")
         window.scroll(0, 0)
      } else {
         const regData: RegForm = {
            email: data.email,
            username: data.username,
            password: data.password,
            name: data.name,
            surname: data.surname,
         }
         dispatch(registerUser(JSON.stringify(regData)))
         setErrorMsg("");
      }
   }

   useEffect(() => {
      reset()
      window.scroll(0, 0)
   }, [registerData[0] === "You have successfully registered"])

   useEffect(() => {
      window.scroll(0, 0)
   }, [registerData[0] === "This user already exists. Change username"])

   useEffect(() => {
      window.scroll(0, 0)
   }, [registerData[0] === "A user with this email address already exists. Change email address"])

   return (
      <div className={st.container}>
         <h3 className={st.title}>Register</h3>
         {errorMsg && <p className={st.text__attention}>{errorMsg}</p>}
         {registerRej ? <p className={st.text__attention}>Connection problem. Try refreshing the page</p> :
            registerData[0] === "You have successfully registered" ? <p className={st.text__attention}>{registerData[0]}</p> :
               <>
                  {registerData && registerData[0] !== "You have successfully registered" && <p className={st.text__attention}>{registerData[0]}</p>}
                  <p className={st.text__req}>* fields are required</p>
                  <form
                     className={st.form}
                     onSubmit={(handleSubmit(save))}
                  >
                     <div className={st.form__lab_inp_container}>
                        <label htmlFor="email">E-mail*</label>
                        {errors.email && <p className={st.form__error_text}></p>}
                        <input
                           type="text"
                           id="email"
                           className={st.form__input}
                           {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                        />
                     </div>
                     <div className={st.form__lab_inp_container}>
                        <label htmlFor="username">Username*</label>
                        {errors.username && <p className={st.form__error_text}>This field is required and must be 5 or more characters</p>}
                        <input
                           type="text"
                           id="username"
                           className={st.form__input}
                           {...register('username', { required: true, minLength: 5, maxLength: 30 })}
                        />
                     </div>
                     <div className={st.form__lab_inp_container}>
                        <label htmlFor="name">Name*</label>
                        {errors.name && <p className={st.form__error_text}>The name is incorrect or short</p>}
                        <input
                           type="text"
                           id="name"
                           className={st.form__input}
                           {...register('name', { required: true, pattern: /^[a-zA-Zա-ֆԱ-Ֆ]+$/, minLength: 2, maxLength: 30 })}
                        />
                     </div>
                     <div className={st.form__lab_inp_container}>
                        <label htmlFor="surname">Surname*</label>
                        {errors.surname && <p className={st.form__error_text}>The surname is incorrect or short</p>}
                        <input
                           type="text"
                           id="surname"
                           className={st.form__input}
                           {...register('surname', { required: true, pattern: /^[a-zA-Zա-ֆԱ-Ֆ]+$/, minLength: 4, maxLength: 50 })}
                        />
                     </div>
                     <div className={st.form__lab_inp_container}>
                        <label htmlFor="password">Password*</label>
                        {errors.password && <p className={st.form__error_text}>Password must be at least 8 characters long, start with a letter, contain at least 1 number, 1 lowercase letter, and 1 uppercase letter</p>}
                        <div className={st.form__inp_box}>
                           <input
                              type={!isPassShow ? "password" : "text"}
                              id="password"
                              className={st.form__input}
                              {...register('password', { required: true, pattern: /^(?=.*[0-9])(?=.*[a-zա-ֆ])(?=.*[A-ZԱ-Ֆ]).{8,32}$/ })}
                           />
                           {!isPassShow ? <i className="fa-solid fa-eye" onClick={() => setIsPassShow(true)}></i>
                              : <i className="fa-solid fa-eye-slash" onClick={() => setIsPassShow(false)}></i>}
                        </div>
                     </div>
                     <div className={st.form__lab_inp_container}>
                        <label htmlFor="chpassword">Repeat password*</label>
                        {errors.chpassword && <p className={st.form__error_text}>This field is required and must match the password</p>}
                        <div className={st.form__inp_box}>
                           <input
                              type={!isChPassShow ? "password" : "text"}
                              id="chpassword"
                              className={st.form__input}
                              {...register('chpassword', { required: true, pattern: /^(?=.*[0-9])(?=.*[a-zա-ֆ])(?=.*[A-ZԱ-Ֆ]).{8,32}$/ })}
                           />
                           {!isChPassShow ? <i className="fa-solid fa-eye" onClick={() => setIsChPassShow(true)}></i>
                              : <i className="fa-solid fa-eye-slash" onClick={() => setIsChPassShow(false)}></i>}
                        </div>
                     </div>
                     <button className={st.form__button}>{registerPending ? 'Registration...' : "Register"}</button>
                  </form>
               </>}
      </div>
   )
}

export default Register
