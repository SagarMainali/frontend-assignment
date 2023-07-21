import axios from "axios"
import { ProductType } from "../Types/type"
import { useQuery } from "@tanstack/react-query"

const BASE_URL = 'https://fakestoreapi.com/productsa'

export const useApiWithReactQuery = () => {
     // directly return the useQuery itself so that we can access all its properties when using it
     return useQuery({
          queryKey: ['products'],
          queryFn: async () => {
               const { data } = await axios.get(BASE_URL)
               return data as ProductType[]
          }
     })
}