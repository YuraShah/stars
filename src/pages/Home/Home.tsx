import React from 'react'
import st from './home.module.scss'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <section className={st.container}>
      <div className={st.content}>
        <div className={st.content__text}>
          <h3 className={st.content__mtitle}>Stars</h3>
          <article className={st.content__article}>
            <p>We are dedicated to bringing you the latest and most fascinating information about the universe. From the mysteries of black holes to the beauty of distant galaxies, our goal is to ignite your curiosity and passion for space.</p>
            <p>Join us on an exciting journey through the cosmos. Discover breathtaking images, in-depth articles, and up-to-date news about space exploration, astronomy, and the latest scientific discoveries. Whether you are a seasoned astronomer or just beginning to explore the stars, there's something here for everyone.</p>
          </article>
        </div>
      </div>
      <div className={st.content}>
        <div className={st.content__text}>
          <h3 className={st.content__title}>History</h3>
          <article className={st.content__article}>
            <p>Stars was founded in 2024 by a group of friends who were captivated by the night sky. What started as a small blog quickly grew into a comprehensive resource for space enthusiasts around the world. Our love for space drove us to create a platform where people could learn about and discuss the wonders of the universe.</p>
            <p>Over the years, Stars has evolved, but our core mission remains the same: to inspire and educate. We have expanded our content to include a variety of media, from detailed articles and stunning images to interactive tools and engaging videos.</p>
            <p>We are proud to have built a community of curious minds and space lovers. As we continue to grow, we remain committed to exploring the cosmos and sharing our discoveries with you.</p>
          </article>
          <Link
            to={'/history'}
            className={st.content__link}>
            More
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className={st.content}>
        <div className={st.content__text}>
          <h3 className={st.content__title}>About</h3>
          <article className={st.content__article}>
            <p>Stars is a website created for space enthusiasts by space enthusiasts. Our mission is to inspire, educate, and connect people who share a love for the cosmos. We believe that the universe is a vast and wondrous place, full of mysteries waiting to be uncovered.</p>
            <p>Our team of writers, scientists, and astronomers work tirelessly to bring you accurate and engaging content. We cover a wide range of topics, including astrophysics, space missions, celestial events, and the latest advancements in space technology.</p>
            <p>At Stars, we are passionate about making space accessible to everyone. We aim to foster a community where knowledge is shared, questions are encouraged, and curiosity is celebrated.</p>
          </article>
          <Link
            to={'/about'}
            className={st.content__link}>
            More
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Home
