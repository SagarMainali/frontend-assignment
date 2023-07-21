import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import { ProductType } from "../Types/type"

const BASE_URL = 'https://fakestoreapi.com/products/'

export const useApiWithReactQuery = (endpoint?: string) => {

     const full_url = BASE_URL + (endpoint ? endpoint : '')

     // directly return the useQuery itself so that we can access all its properties when using it
     return useQuery({
          queryKey: ['products', { endpoint }],
          queryFn: async () => {
               const { data } = await axios.get(full_url)
               // if all products is called
               if (full_url === BASE_URL) {
                    const modifiedData = data.map((product: ProductType) => {
                         return {
                              ...product,
                              cartQuantity: 0
                         }
                    })
                    return modifiedData
                    // if only single product is called 
               } else {
                    const modifiedData = {
                         ...data,
                         cartQuantity: 0
                    }
                    return modifiedData
               }
          }
     })
}

// the data got from the api call has been modified in order to add custom 'cartQuanity' property for cart functionality