import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom';
import { ErrorPage } from './Error';
import { StartPage } from './Start/start';
import { Welcome } from './Welcome/welcome';
import { AnimatePresence } from 'framer-motion'
import { CreateLinkPage } from './Link/create';
import Alert from '../components/Alert';
import { JonLinkPage } from './Link/join';

export const RoutedPages:React.FC = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Welcome />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/create" element={<CreateLinkPage />} />
        <Route path="/join" element={<JonLinkPage />} />
    </Routes>
    </AnimatePresence>
  )
}

export const ComponentsPages: React.FC = () => {
  return (
    <AnimatePresence>
      <Routes>
      </Routes>
    </AnimatePresence>
  )
}