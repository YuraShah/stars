import React from 'react'
import st from './history.module.scss'

const History: React.FC = () => {
   return (
      <section className={st.container}>
         <h3 className={st.title}>History</h3>
         <article className={st.article}>
            <p>Stars was founded in 2024 by a group of friends who were captivated by the night sky. What started as a small blog quickly grew into a comprehensive resource for space enthusiasts around the world. Our love for space drove us to create a platform where people could learn about and discuss the wonders of the universe.</p>
            <p>From the very beginning, our vision was clear: to create a space where knowledge and passion for the cosmos could be shared freely. We began by writing about the basics of astronomy, sharing beautiful images of celestial events, and covering the latest news in space exploration. As our audience grew, so did our ambition.</p>
            <p>Over the years, Stars has evolved, but our core mission remains the same: to inspire and educate. We have expanded our content to include a variety of media, from detailed articles and stunning images to interactive tools and engaging videos. Our interactive star maps and virtual telescopes allow users to explore the night sky from the comfort of their own homes. We've also hosted webinars and live Q&A sessions with leading astronomers and scientists, providing direct access to experts in the field.</p>
            <p>We are proud to have built a community of curious minds and space lovers. Our forums and social media channels are buzzing with discussions, questions, and shared discoveries. Members of our community have contributed their own observations and insights, enriching the collective knowledge of our site.</p>
            <p>As we continue to grow, we remain committed to exploring the cosmos and sharing our discoveries with you. We are constantly working on new features and content to keep our audience engaged and informed. Our upcoming projects include a podcast series, more interactive educational tools, and collaborative projects with other space organizations.</p>
            <p>Thank you for being a part of our journey. Together, we reach for the stars.</p>
         </article>
      </section>
   )
}

export default History
