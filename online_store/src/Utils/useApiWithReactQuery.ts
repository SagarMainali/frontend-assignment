import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const BASE_URL = 'https://fakestoreapi.com/products/'

export const useApiWithReactQuery = (endpoint?: string) => {

     const full_url = BASE_URL + (endpoint ? endpoint : '')

     // directly return the useQuery itself so that we can access all its properties when using it
     return useQuery({
          queryKey: ['products', { endpoint }],
          queryFn: async () => {
               const { data } = await axios.get(full_url)
               return data
          }
     })
}