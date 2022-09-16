import React, { createContext, useState, useEffect } from 'react'
import { CreateLinkPage } from '../../../pages/Link/create';
import Pages from '../../../pages/pages'

type IState = {
    alertMsg: Array<alertData>, 
    setAlertMsg:  React.Dispatch<React.SetStateAction<alertData[]>>
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
  useState<Array<alertData>>(AlertMsgSample);
  // ( // remove last item of the alert
  //   function(){
  //     if(alertMsg)
  //     if (alertMsg.length > 4){ 
  //           removeExpiredAlertMessage()
  //     }
  //     console.log(alertMsg)
  //   }
  // )()
  function removeExpiredAlertMessage(){
        if (alertMsg.length){
        const filtered = alertMsg.filter(item => item != alertMsg[0])
        setAlertMsg(() => [...filtered])
        }
  }
  // ( // 
  //   function(){
  //        const interval = setInterval(removeExpiredAlertMessage, 9000);
  //        if (alertMsg.length <= 0) clearInterval(interval)
  //   }
  // )()
  useEffect(() => {
      if (alertMsg.length > 4) removeExpiredAlertMessage()
      const interval = setInterval(removeExpiredAlertMessage, 2000);
      return(() => clearInterval(interval))
  }, [alertMsg])

  return (
    <AlertContext.Provider value={{alertMsg, setAlertMsg}}>
        { children }
    </AlertContext.Provider>
  )
}
const AlertMaintainer = (alerts: Array<alertData>) => {
  if(alerts.length > 4) alerts.pop
}