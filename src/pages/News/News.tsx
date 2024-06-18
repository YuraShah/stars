import React from 'react'
import st from '../History/history.module.scss'

const News: React.FC = () => {
   return (
      <section className={st.container}>
         <h3 className={st.title}>News</h3>
         <article className={st.article}>
            <p>Welcome to the News section of Stars, where we bring you the latest and most exciting developments from the world of space exploration, astronomy, and astrophysics. Our dedicated team of writers and researchers work around the clock to provide timely and accurate news coverage, ensuring you never miss a significant event in the cosmos.</p>
            <p>From groundbreaking discoveries and space missions to celestial events and technological advancements, we cover a wide range of topics to keep you informed and engaged. Whether it's a new exoplanet discovery, a milestone in a Mars mission, or a spectacular meteor shower, you can count on Stars to deliver detailed and insightful articles that explain the science and significance behind the headlines.</p>
            <p>We also feature exclusive interviews with leading scientists, astronauts, and industry experts who share their insights and experiences, giving you a behind-the-scenes look at the exciting world of space exploration. Our news stories are complemented by high-quality images and videos, bringing the wonders of the universe to your screen.</p>
            <p>At Stars, we believe that staying informed about space is not just for scientists and researchers, but for everyone with a curious mind and a passion for the cosmos. Our goal is to make space news accessible and engaging, sparking your curiosity and encouraging you to delve deeper into the mysteries of the universe.</p>
            <p>Join us as we report on humanity's ongoing journey to explore the stars and unlock the secrets of the cosmos. Stay tuned for regular updates and be part of the conversation as we witness history in the making.</p>
         </article>
      </section>
   )
}

export default News
