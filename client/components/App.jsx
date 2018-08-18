import React from 'react'
import {HashRouter as Router} from 'react-router-dom'

import Nav from './Nav'
class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav />
        </div>
      </Router>
    )
  }
}

export default App
