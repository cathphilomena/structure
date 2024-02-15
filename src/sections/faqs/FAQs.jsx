import faqs from './data'
import './faqs.css'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <section id="faqs">
        <div className="container">
          <h2>FAQs</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, exercitationem illum ratione, enim quam optio corrupti asperiores nesciunt et suscipit nam voluptatum nostrum cum incidunt? Quia aliquam molestiae perspiciatis nostrum!</p>
          <div className='faqs__container'>
            {
              faqs.map(faq => (
                <FAQ key={faq.id} faq={faq}/>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default FAQs