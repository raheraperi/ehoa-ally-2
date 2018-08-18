import React from 'react'
import {Route} from 'react-router-dom'

import About from './About'

const Home = () => {
  return (

    <div className='columns'>

      <div className='about column'>
        <Route path='/' component={About} />
      </div>

    </div>
  )
}

export default Home
