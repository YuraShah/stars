import React, { useEffect } from 'react'
import st from './errorpage.module.scss'
import { useNavigate } from 'react-router-dom'

const ErrorPage: React.FC = () => {
   const navigate = useNavigate()

   const navigation = (): void => {
      setTimeout(() => {
         navigate("/")
      }, 5000)
   }

   useEffect(() => {
      navigation()
   }, [])

   return (
      <section className={st.container}>
         <div className={st.number}>
            404
         </div>
         <div>
            Page not found
         </div>
         <div>
            You will be redirected to the home page in 5 seconds
         </div>
      </section>
   )
}

export default ErrorPage
