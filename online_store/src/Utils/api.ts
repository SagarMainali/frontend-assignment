import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com/products'

export async function getDataFromApi(url?: string) {
     try {
          const { data } = await axios.get(BASE_URL + url)
          return data
     }
     catch (error) {
          console.log(error)
          return error
     }
}