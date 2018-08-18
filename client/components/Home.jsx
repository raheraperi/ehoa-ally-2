import React from 'react'
import {Route} from 'react-router-dom'

import About from './About'
import AllyOverview from './AllyOverview'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='columns'>
        <div className='about column'>
          <Route path='/' component={About} />
        </div>
      </div>
      <hr />
      <div className='ally column'>
        <Route path='/' component={AllyOverview} />
      </div>
    </div>
  )
}

export default Home
