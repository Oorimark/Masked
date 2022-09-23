import React, { createContext, useState, useEffect } from 'react'

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
  const [alertMsg, setAlertMsg] = useState<Array<alertData>>(AlertMsgSample);
  function removeExpiredAlertMessage(){
        if (alertMsg.length){
        const filtered = alertMsg.filter(item => item != alertMsg[0])
        setAlertMsg(() => [...filtered])
        }
  }
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