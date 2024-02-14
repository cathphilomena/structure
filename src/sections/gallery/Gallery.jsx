import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import './gallery.css'
import cards from './data'

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
      
    <section ref={targetRef} id="gallery" className="outer__container">
    <h2 class="gallery__title">Gallery</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, quaerat veritatis autem, sint reiciendis suscipit laudantium rem qui aliquid id minus labore numquam modi, commodi pariatur veniam eos. Consequatur, qui.</p>
    <div className="parallax__container">
      <motion.div style={{ x }} className="parallax">
        {cards.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </motion.div>
    </div>
  </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="parallax__image-container">
        <img src={card.image}/>
    </div>
  );
};

export default Gallery;
