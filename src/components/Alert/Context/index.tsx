import React, { createContext, useState } from 'react'
import { CreateLinkPage } from '../../../pages/Link/create';
import Pages from '../../../pages/pages'

type IState = {
    alertMsg: Array<alertData> | null,
    setAlertMsg:  React.Dispatch<React.SetStateAction<alertData[] | null>>
}
type alertData = {
  msg: string,
  status: string
}
type IProps = {
  children: React.ReactNode
}
export const AlertContext = createContext({} as IState)
export const AlertContextProvider = ({ children }: IProps) => {
  const AlertMsgSample = [
    {
      msg: "", 
      status: "" 
    },
  ]
  const [alertMsg, setAlertMsg] = 
  useState<Array<alertData> | null>(AlertMsgSample);
  return (
    <AlertContext.Provider value={{alertMsg, setAlertMsg}}>
        { children }
    </AlertContext.Provider>
  )
}