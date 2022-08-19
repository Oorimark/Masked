import React, { createContext, useState } from 'react'
import { CreateLinkPage } from '../../../pages/Link/create';
import Pages from '../../../pages/pages'

type IState = {
    status: null | string;
    message: string;
}
export const AlertContext = createContext<any>("")
export const alertContext = () => {
  const [alertcontext, setalertcontext] = 
        useState<string>("");
  return (
    <AlertContext.Provider value={{alertcontext, setalertcontext}}>
        <CreateLinkPage />
    </AlertContext.Provider>
  )
}