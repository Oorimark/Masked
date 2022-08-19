import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import '../public/css/index.css'
import { RoutedPages, ComponentsPages } from './pages'

function App() {

  return (
    <React.Fragment>
     <Router>
        <RoutedPages />
     </Router>
    </React.Fragment>
  )
}

export default App
