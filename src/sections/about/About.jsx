import './about.css'
import about from "../../assets/image1.jpg"
import about1 from "../../assets/image2.jpg"
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const container = useRef(null)
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start end', 'end start']
})
const sm = useTransform(scrollYProgress, [0, 1], [0, -350]) 
  return (
    <section id="about">
      <div className="container about__container">
        <div ref={container} className="about__left">
            <div className="about__image-lg">
                <img src={about1} alt="About Image"/>
            </div>
            <motion.div style={{y: sm}} className="about__image-sm">
                <img src={about} alt="About Image"/>
            </motion.div>
          </div>
        <div className="about__right">
          <h2>About</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id itaque quae consectetur, alias explicabo doloribus architecto sit tempore nisi enim labore impedit dolorem. Officiis iste dignissimos laudantium est dicta quod? </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ea fuga alias iusto? Odio, consectetur.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, non.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid nostrum fugit vitae, nam esse iusto.</p>
        </div>
      </div>
    </section>
  )
}

export default About