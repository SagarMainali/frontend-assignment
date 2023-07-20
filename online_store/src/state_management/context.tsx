import { createContext, useContext, useState } from 'react'
import { ChildrenType } from '../types/type'

// creating context
export const GlobalContext = createContext({})

// custom hook for context consumption
export const useGlobalContext = () => {
     return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }: ChildrenType) => {

     return (
          <GlobalContext.Provider value={{}}>
               {children}
          </GlobalContext.Provider >
     )

}
