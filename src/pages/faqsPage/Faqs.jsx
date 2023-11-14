import React from 'react';
import './faqs.css'
import Faq from './Faq';
import { Questions } from './questions';
const Faqs = () => {
    const faqs=Questions.map((answer)=>
        <Faq Key={answer.id} Headline={answer.headline} Question={answer.question}/>
    )
    return (
        <div className='faqs'>
            <h2>Frequently Asked Questions(FAQSs)</h2>
            {faqs}
        </div>
    );
};

export default Faqs;