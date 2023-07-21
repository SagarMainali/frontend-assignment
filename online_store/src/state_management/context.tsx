import { createContext, useContext, useState } from 'react'
import { ChildrenType, ProductType } from '../types/type'
import { useApiWithReactQuery } from '../Utils/useApiWithReactQuery'

const GlobalContext = createContext({})

// custom hook for context consumption
export const useGlobalContext = () => {
     return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }: ChildrenType) => {

     const [products, setProducts] = useState<ProductType[]>()

     const { data, isLoading, isError } = useApiWithReactQuery()

     console.log(data)

     return (
          <GlobalContext.Provider value={{ products, setProducts }}>
               {children}
          </GlobalContext.Provider>
     )
}