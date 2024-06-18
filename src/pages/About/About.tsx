import React from 'react'
import st from '../History/history.module.scss'

const About: React.FC = () => {
   return (
      <section className={st.container}>
         <h3 className={st.title}>About</h3>
         <article className={st.article}>
            <p>Stars is a website created for space enthusiasts by space enthusiasts. Our mission is to inspire, educate, and connect people who share a love for the cosmos. We believe that the universe is a vast and wondrous place, full of mysteries waiting to be uncovered.</p>
            <p>Our team of writers, scientists, and astronomers work tirelessly to bring you accurate and engaging content. We cover a wide range of topics, including astrophysics, space missions, celestial events, and the latest advancements in space technology. Whether you're interested in the technical details of spacecraft or the awe-inspiring beauty of nebulae, we've got something for you.</p>
            <p>At Stars, we are passionate about making space accessible to everyone. We aim to foster a community where knowledge is shared, questions are encouraged, and curiosity is celebrated. Our educational resources cater to all levels of interest and expertise, from beginners just starting their journey to seasoned astronomers looking for the latest research.</p>
            <p>We offer comprehensive articles on a wide array of space-related topics, written by experts in the field. Our high-resolution images of celestial bodies, space missions, and astronomical phenomena provide a visual feast for the eyes. Interactive tools like star maps and virtual telescopes allow you to explore the night sky from the comfort of your own home. Engaging videos, including documentaries, tutorials, and interviews with leading figures in space science, provide a dynamic way to learn about the universe. Our community forums are a place for discussions, questions, and sharing insights with fellow space enthusiasts. We also provide educational resources, including tutorials, guides, and lesson plans for educators and learners of all ages.</p>
            <p>Our commitment to quality and accuracy ensures that the information you find on Stars is reliable and up-to-date. We collaborate with scientists, researchers, and space agencies to bring you the most current and fascinating developments in the field of astronomy.</p>
            <p>At Stars, we believe that exploring the universe should be a shared adventure. We encourage our readers to participate by contributing their own observations, questions, and ideas. By building a vibrant community of space enthusiasts, we hope to inspire the next generation of astronomers and explorers.</p>
         </article>
      </section>
   )
}

export default About
