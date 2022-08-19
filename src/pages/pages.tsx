import React from 'react'
import Alert from '../components/Alert'
import { LinkPage } from './Link'
import { StartPage } from './Start/start'
import { Welcome } from './Welcome/welcome'

const Pages = () => {
  return (
    <>
        <StartPage />
        <LinkPage />
    </>
  )
}

export default Pages