import React from 'react'
import { Route } from 'react-router-dom'

import HomePage from './HomePage'

const Routing = () => {
  return (
    <>
      <Route exact component={HomePage}/>
    </>
  )
}

export default Routing
