import React from 'react'
import './NewsCard.css'

const NewsCard = ({pic, news_text}) => {
  return (
    <>
        <section className='news_card_section'>
            <img src={pic} alt="news on image" width={200}/>
            <p>
               {news_text}
            </p>
        </section>
    </>
  )
}

export default NewsCard