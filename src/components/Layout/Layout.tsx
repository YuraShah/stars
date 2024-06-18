import React from 'react';
import { Outlet } from "react-router-dom";
import st from './layout.module.scss';
import cn from 'classnames';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: React.FC = () => {
   return (
      <>
         <Header />
         <main className={st.main}>
            <section className={st.main__section}><Outlet /></section>
            <section className={st.another}>
               <aside
                  className={st.another__first}
               >
                  <div
                  className={st.another__content}
                  >
                     <img src={'/logo192.png'} alt="logo" width={'70%'} className={st.another__img} />
                     <h3 className={st.title}>Stars</h3>
                  </div>
               </aside>
               <aside className={st.another__second}>
                  <div className={cn(st.another__content, st.another__content_second)}>
                     <img src={'/logo192.png'} alt="logo" width={'70%'} className={st.another__img} />
                     <h3 className={st.title}>Stars</h3>
                  </div>
               </aside>
               <aside className={st.another__third}>
                  <div className={cn(st.another__content, st.another__content_third)}>
                     <img src={'/logo192.png'} alt="logo" width={'70%'} className={st.another__img} />
                     <h3 className={st.title}>Stars</h3>
                  </div>
               </aside>
            </section>
         </main>
         <Footer />
      </>
   )
}

export default Layout
