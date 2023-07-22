import { createContext, useContext, useState } from 'react'
import { ChildrenType, GlobalContextType, ProductType } from '../types/type'
import { useApiWithReactQuery } from '../Utils/useApiWithReactQuery'

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType)

// custom hook for context consumption
export const useGlobalContext = () => {
     return useContext(GlobalContext)
}

export const GlobalContextProvider = ({ children }: ChildrenType) => {

     const { data, isLoading, error } = useApiWithReactQuery()

     const [productsInCart, setProductsInCart] = useState<ProductType[]>([])

     const addToCart = (productToAdd: ProductType): void => {
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

     const removeFromCart = (id: number): void => {
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

     const changeCartQuantity = (id: number, action: string): void => {
          setProductsInCart(
               (currentProductsIncart: ProductType[]) => {
                    const updatedData = currentProductsIncart.map(
                         (currentProductInCart: ProductType) => {
                              // increase or decrease the cartQuantity based on 'action'
                              if (currentProductInCart.id === id) {
                                   if (action === 'increment') {
                                        return {
                                             ...currentProductInCart,
                                             cartQuantity: currentProductInCart.cartQuantity + 1
                                        }
                                   }
                                   else {
                                        return {
                                             ...currentProductInCart,
                                             cartQuantity: currentProductInCart.cartQuantity - 1
                                        }
                                   }
                              }
                              else {
                                   return currentProductInCart
                              }
                         }
                    )
                    // finally filter the updated data and only put those whose 'cartQuantity' is atleast 1
                    return updatedData.filter(
                         (productWithChangedQuantity: ProductType) => {
                              return productWithChangedQuantity.cartQuantity !== 0
                         }
                    )
               }
          )
     }

     const clearCart = (): void => {
          setProductsInCart([])
     }

     return (
          <GlobalContext.Provider value={{ data, isLoading, error, productsInCart, addToCart, removeFromCart, changeCartQuantity, clearCart }}>
               {children}
          </GlobalContext.Provider>
     )
}