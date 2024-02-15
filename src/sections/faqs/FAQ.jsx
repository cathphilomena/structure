import data from './data.js'
import { FaPlus, FaMinus} from "react-icons/fa";
import {useState} from 'react'

const FAQ = ({faq}) => {
    const [showAnswer, setShowAnswer] = useState(false)
  return (
    <div className='faq' onClick={() => setShowAnswer(prev => !prev)}>
        <div>
            <h3 className='faq__question'>{faq.question}</h3>
            <button className='faq__icon'>{showAnswer ? <FaMinus /> : <FaPlus/>}</button>
        </div>
        {showAnswer && <p className='faq__answer'>{faq.answer}</p>}
    </div>
  )
}

export default FAQ