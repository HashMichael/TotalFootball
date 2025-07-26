import React from 'react'
import './Home.css'
import Navbar from '../Sub-Components/Navbar/Navbar'

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>

        <section className='bg_section'>
          <h2>
            Champions League Final : Arsenal vs. Barcelona
          </h2>
          <p>
            The highly anticipated final is set to Sunday, June 10th. Will Aresnal Finally Win It's First Ever Champions League Or Is It Another Next Season?
          </p>

          <button>
            Read More
          </button>
        </section>

        <section className='news_section'>

        </section>
      </main>
    </>
  )
}

export default Home