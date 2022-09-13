import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import '../public/css/index.css'
import { RoutedPages, ComponentsPages } from './pages'
import { AlertContextProvider } from './components/Alert/Context';

function App() {

  return (
    <AlertContextProvider>
     <Router>
        <RoutedPages />
     </Router>
    </AlertContextProvider>
  )
}

export default App
