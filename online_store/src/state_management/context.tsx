import { createContext, useContext, useState, useEffect } from 'react'
import { ChildrenType, ProductType } from '../types/type'
import { useQuery } from '@tanstack/react-query'
import { getDataFromApi } from '../Utils/api'
import axios from 'axios'

const GlobalContext = createContext({})

// custom hook for context consumption
export const useGlobalContext = () => {
     return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }: ChildrenType) => {

     const [products, setProducts] = useState<ProductType[]>()

     const { data, isLoading, error } = useQuery({
          queryFn: () => {
               const data = getDataFromApi('')
               return data
          }
     })

     console.log(data)

     return (
          <GlobalContext.Provider value={{ products, setProducts }}>
               {children}
          </GlobalContext.Provider>
     )
}