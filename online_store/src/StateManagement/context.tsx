import { createContext, useContext } from 'react'
import { ChildrenType, GlobalContextType } from '../Types/type'
import { useApiWithReactQuery } from '../Utils/useApiWithReactQuery'

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType)

// custom hook for context consumption
export const useGlobalContext = () => {
     return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }: ChildrenType) => {

     const { data, isLoading, error } = useApiWithReactQuery()

     return (
          <GlobalContext.Provider value={{ data, isLoading, error }}>
               {children}
          </GlobalContext.Provider>
     )
}