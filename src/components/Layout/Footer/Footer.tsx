import React from 'react';
import st from './footer.module.scss';
import cn from 'classnames'
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
   return (
      <footer className={st.footer}>
         <div className={cn('wrapper', st.footer__wrapper)}>
            <div className={st.footer__container}>
               <div className={st.footer__img_title}>
                  <div>
                     <img
                        src={"/logofoot.png"}
                        className={st.footer__img}
                        alt="logo"
                        title='logo'
                     />
                  </div>
                  <h3 className={st.footer__mtitle}>Stars</h3>
               </div>
               <div className={st.footer__content}>
                  <h4 className={st.footer__title}>Sitemap</h4>
                  <p className={st.footer__text}>
                     <Link
                        className={st.footer__link}
                        to={'/history'}
                     >
                        History
                     </Link>
                  </p>
                  <p className={st.footer__text}>
                     <Link
                        className={st.footer__link}
                        to={'/About'}
                     >
                        About
                     </Link>
                  </p>
               </div>
            </div>
            <div className={st.footer__dash}></div>
            <div className={st.footer__reserved}>
               All rights reserved. © {new Date().getFullYear()} Stars
            </div>
         </div>
      </footer>
   )
}

export default Footer
