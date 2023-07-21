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

     function addToCart(productToAdd: ProductType): void {
          setProductsInCart(
               (currentProductsIncart: ProductType[]) => {
                    let matchFound: boolean = false
                    const updatedData = currentProductsIncart.map(
                         (currentProductInCart: ProductType) => {
                              if (currentProductInCart.id === productToAdd.id) {
                                   matchFound = true
                                   // change the cart quantity of the product 
                                   return {
                                        ...currentProductInCart,
                                        cartQuantity: currentProductInCart.cartQuantity + 1
                                   }
                              }
                              else {
                                   // if there is no product in cart that matches the product to be added, then don't modify the existing products in cart
                                   return currentProductInCart
                              }
                         })
                    if (matchFound) {
                         // return the data where only cartQuantity was changed rather than adding it to avoid duplication
                         return updatedData
                    }
                    else {
                         // if there is no product in cart that matches the product to be added, then simply add the new data to the cart
                         return [...currentProductsIncart, {
                              ...productToAdd,
                              cartQuantity: productToAdd.cartQuantity + 1
                         }]
                    }
               })
     }

     function removeFromCart(id: number): void {
          setProductsInCart(
               (currentProductsInCart: ProductType[]) => {
                    return currentProductsInCart.filter(
                         (currentProductInCart: ProductType) => {
                              currentProductInCart.id === id
                         }
                    )
               }
          )
     }

     function clearCart(): void {
          setProductsInCart([])
     }

     return (
          <GlobalContext.Provider value={{ data, isLoading, error, productsInCart, addToCart, removeFromCart, clearCart }}>
               {children}
          </GlobalContext.Provider>
     )
}