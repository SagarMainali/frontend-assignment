import { createContext, useContext, useState } from 'react'
import { ChildrenType, GlobalContextType, ProductType } from '../Types/type'
import { useApiWithReactQuery } from '../Utils/useApiWithReactQuery'

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType)

// custom hook for context consumption
export const useGlobalContext = () => {
     return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }: ChildrenType) => {

     const { data, isLoading, error } = useApiWithReactQuery()

     const [productsInCart, setProductsInCart] = useState<ProductType[]>([])

     function addToCart(productToAdd: ProductType) {
          // setProductsInCart(
          //      (currentProductsIncart: ProductType[]) => {
          //           let productMatch: boolean = false
          //           const testData = currentProductsIncart.filter((currentProductIncart: ProductType) => {
          //                currentProductIncart.id === id
          //                productMatch = true
          //           })
          //           if (productMatch) {
          //                return testData
          //           }
          //           else {
          //                const productToAdd = data.filter((product: ProductType) => {
          //                     product.id === id
          //                })
          //                return productToAdd
          //           }
          //      })
          // console.log(productsToAddInCart)
     }

     return (
          <GlobalContext.Provider value={{ data, isLoading, error, addToCart, productsInCart }}>
               {children}
          </GlobalContext.Provider>
     )
}